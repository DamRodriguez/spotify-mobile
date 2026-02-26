import React, { useEffect, useState } from "react";
import { Dimensions, Pressable, StyleProp, StyleSheet, ViewStyle } from "react-native";
import Animated, {
  interpolate,
  runOnJS,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { colors } from "@/themes/colors";
import ThemedView from "../themed/ThemedView";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SHEET_HEIGHT = SCREEN_HEIGHT * 0.6;
const CLOSE_THRESHOLD = 140;

type Props = {
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode;
  overlayStyle?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
};

export default function DraggableScrollSheet({
  visible,
  onClose,
  children,
  overlayStyle,
  containerStyle
}: Props) {
  const [isMounted, setIsMounted] = useState(visible);
  const translateY = useSharedValue(SHEET_HEIGHT);
  const scrollY = useSharedValue(0);

  const backdropOpacityStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      translateY.value,
      [0, SHEET_HEIGHT],
      [0.7, 0],
      "clamp"
    );
    return { opacity };
  });

  useEffect(() => {
    if (visible) {
      setIsMounted(true);
      translateY.value = withSpring(0);
    } else {
      translateY.value = withTiming(
        SHEET_HEIGHT,
        { duration: 200 },
        (finished) => {
          if (finished) {
            runOnJS(setIsMounted)(false);
          }
        }
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y;
    },
  });

  const pan = Gesture.Pan()
    .onUpdate((event) => {
      if (scrollY.value <= 0 && event.translationY > 0) {
        translateY.value = event.translationY;
      }
    })
    .onEnd((event) => {
      if (
        translateY.value > CLOSE_THRESHOLD ||
        event.velocityY > 1200
      ) {
        translateY.value = withTiming(
          SHEET_HEIGHT,
          { duration: 200 },
          (finished) => {
            if (finished) {
              runOnJS(setIsMounted)(false);
              runOnJS(onClose)();
            }
          }
        );
      } else {
        translateY.value = withSpring(0);
      }
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
    opacity: interpolate(
      translateY.value,
      [0, SHEET_HEIGHT],
      [1, 0],
      "clamp"
    ),
  }));

  if (!isMounted) return null;

  return (
    <ThemedView
      style={[
        StyleSheet.absoluteFillObject,
        {
          zIndex: 20,
        },
      ]}
    >
      <Pressable
        onPress={onClose}
        style={[StyleSheet.absoluteFill, overlayStyle]}
      >
        <Animated.View
          style={[{
            flex: 1,
            backgroundColor: colors.neutral[100],
          }, backdropOpacityStyle]}
        />
      </Pressable>

      <GestureDetector gesture={pan}>
        <Animated.View
          style={[{},
            containerStyle,
            animatedStyle,
          ]}
        >
          <Animated.ScrollView
            onScroll={scrollHandler}
            scrollEventThrottle={16}
            bounces={false}
          >
            {children}
          </Animated.ScrollView>
        </Animated.View>
      </GestureDetector>
    </ThemedView>
  );
}