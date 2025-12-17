import { usePathname } from "expo-router";
import React, { useEffect, useMemo, useState } from "react";
import {
  Dimensions,
  Pressable,
  View,
  type ViewStyle,
} from "react-native";
import { Portal } from "react-native-paper";
import Animated, {
  runOnJS,
  type SharedValue,
  useAnimatedReaction,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

interface AnimatedModalProps {
  visible: SharedValue<boolean>;
  onClose?: () => void;
  children: React.ReactNode;
  style?: ViewStyle;
  height?: number;
  direction?: "bottom" | "left" | "right";
}

const AnimatedModal: React.FC<AnimatedModalProps> = ({
  visible,
  onClose,
  children,
  style,
  height,
  direction = "bottom",
}) => {
  const pathname = usePathname();
  const screenHeight = height ? height : Dimensions.get("window").height;
  const screenWidth = Dimensions.get("window").width;
  const animatedValue = useSharedValue(0);
  const [isMounted, setIsMounted] = useState(false);
  const animationDuration = 500;

  const modalSize = useMemo(() => (
    direction === "left" || direction === "right" ? screenWidth : screenHeight
  ), [direction, screenWidth, screenHeight]);

  useAnimatedReaction(
    () => visible.value,
    show => {
      if (show) {
        runOnJS(setIsMounted)(true);
        animatedValue.value = withTiming(modalSize, {
          duration: animationDuration,
        });
      } else {
        animatedValue.value = withTiming(0, {
          duration: animationDuration,
        }, finished => {
          if (finished) {
            runOnJS(setIsMounted)(false);
            if (onClose)
              runOnJS(onClose)();
          }
        });
      }
    },
    [modalSize, onClose],
  );

  useEffect(() => {
    if (visible.value && onClose) {
      onClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const animatedStyle = useAnimatedStyle(() => {
    switch (direction) {
      case "bottom":
        return {
          transform: [{ translateY: screenHeight - animatedValue.value }],
        };
      case "left":
        return {
          transform: [{ translateX: -screenWidth + animatedValue.value }],
        };
      case "right":
        return {
          transform: [{ translateX: screenWidth - animatedValue.value }],
        };
      default:
        return {};
    }
  });

  if (!isMounted) return null;

  return (
    <Portal>
      <View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      >
        <Pressable
          onPress={() => { visible.value = false; }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        />
        <Animated.View
          style={[
            {
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 0,
              overflow: "hidden",
            },
            animatedStyle,
            style,
          ]}
        >
          {children}
        </Animated.View>
      </View>
    </Portal>
  );
};

export default AnimatedModal;
