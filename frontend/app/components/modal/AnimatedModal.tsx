import { useEffect, useMemo, useState } from "react";
import {
  Dimensions,
  Pressable,
  StyleSheet,
  View,
  type ViewStyle,
} from "react-native";
import { Portal } from "react-native-paper";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  interpolate,
} from "react-native-reanimated";

interface AnimatedModalProps {
  visible: boolean;
  onClose?: () => void;
  children: React.ReactNode;
  style?: ViewStyle;
  height?: number;
  direction?: "bottom" | "left" | "right";
  duration?: number;
}

const styles = StyleSheet.create({
  modalBase: {
    position: "absolute",
    width: "100%",
    backgroundColor: "white",
  },
  sideModal: {
    top: 0,
    bottom: 0,
    width: "85%",
  },
});

const AnimatedModal: React.FC<AnimatedModalProps> = ({
  visible,
  onClose,
  children,
  style,
  height,
  direction = "bottom",
  duration = 500,
}) => {
  const screen = Dimensions.get("window");
  const screenHeight = height ?? screen.height;
  const screenWidth = screen.width;

  const progress = useSharedValue(0);
  const [mounted, setMounted] = useState(visible);

  const modalSize = useMemo(() => {
    return direction === "left" || direction === "right"
      ? screenWidth
      : screenHeight;
  }, [direction, screenWidth, screenHeight]);

  useEffect(() => {
    if (visible) {
      setMounted(true);
      progress.value = withTiming(1, { duration });
    } else {
      progress.value = withTiming(0, { duration });

      const timeout = setTimeout(() => {
        setMounted(false);
      }, duration);

      return () => clearTimeout(timeout);
    }
  }, [visible, duration, progress]);

  const backdropStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      progress.value,
      [0, 1],
      [0, 0.4],
      "clamp"
    ),
  }));

  const modalStyle = useAnimatedStyle(() => {
    const translate = modalSize * (1 - progress.value);

    switch (direction) {
      case "bottom":
        return {
          transform: [{ translateY: translate }],
        };
      case "left":
        return {
          transform: [{ translateX: -translate }],
        };
      case "right":
        return {
          transform: [{ translateX: translate }],
        };
      default:
        return {};
    }
  });

  if (!mounted) return null;

  return (
    <Portal>
      <View style={StyleSheet.absoluteFill}>
        <Pressable
          onPress={onClose}
          style={StyleSheet.absoluteFill}
        >
          <Animated.View
            style={[
              StyleSheet.absoluteFill,
              { backgroundColor: "#000" },
              backdropStyle,
            ]}
          />
        </Pressable>

        <Animated.View
          style={[
            styles.modalBase,
            direction !== "bottom" && styles.sideModal,
            direction === "left" && { left: 0 },
            direction === "right" && { right: 0 },
            direction === "bottom" && { bottom: 0 },
            modalStyle,
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