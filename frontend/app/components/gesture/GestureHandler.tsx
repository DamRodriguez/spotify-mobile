import React from "react";
import { View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { runOnJS } from "react-native-reanimated";

type Props = {
  onSingleTap?: () => void;
  onDoubleTap?: () => void;
  onLongPress?: (active: boolean) => void;
  onPullRefresh?: () => void;
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  onSwipeUp?: () => void;
  onSwipeDown?: () => void;
  children: React.ReactNode;
};

export default function GestureHandler({
  onSingleTap,
  onDoubleTap,
  onLongPress,
  onPullRefresh,
  onSwipeLeft,
  onSwipeRight,
  onSwipeUp,
  onSwipeDown,
  children,
}: Props) {
  const singleTap = Gesture.Tap().onEnd((_event, success) => {
    if (success && onSingleTap) {
      runOnJS(onSingleTap)();
    }
  });

  const doubleTap = Gesture.Tap()
    .numberOfTaps(2)
    .onEnd((_event, success) => {
      if (success && onDoubleTap) {
        runOnJS(onDoubleTap)();
      }
    });

  const longPress = Gesture.LongPress()
    .minDuration(500)
    .onStart(() => {
      if (onLongPress) runOnJS(onLongPress)(true);
    })
    .onEnd(() => {
      if (onLongPress) runOnJS(onLongPress)(false);
    });

  const swipe = Gesture.Pan()
    .activeOffsetX([-20, 20])
    .activeOffsetY([-20, 20])
    .failOffsetX([-30, 30])
    .failOffsetY([-30, 30])
    .simultaneousWithExternalGesture(Gesture.Native())
    .onEnd(event => {
      const threshold = 50;

      const { translationX, translationY } = event;
      const absX = Math.abs(translationX);
      const absY = Math.abs(translationY);

      if (absX > absY && absX > threshold) {
        if (translationX > 0 && onSwipeRight) {
          runOnJS(onSwipeRight)();
        } else if (translationX < 0 && onSwipeLeft) {
          runOnJS(onSwipeLeft)();
        }
        return;
      }

      if (absY > absX && absY > threshold) {
        if (translationY > 0) {
          if (onSwipeDown) runOnJS(onSwipeDown)();
          if (onPullRefresh) runOnJS(onPullRefresh)();
        } else {
          if (onSwipeUp) runOnJS(onSwipeUp)();
        }
      }
    });

  const composed = Gesture.Simultaneous(
    Gesture.Exclusive(doubleTap, singleTap, longPress),
    swipe
  );

  return (
    <GestureDetector gesture={composed}>
      <View style={{ flex: 1 }}>
        {children}
      </View>
    </GestureDetector>
  );
}