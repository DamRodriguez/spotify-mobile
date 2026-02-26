import React from "react";
import { View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { runOnJS } from "react-native-reanimated";

type Props = {
  onSingleTap?: () => void;
  onDoubleTap?: () => void;
  onLongPress?: (active: boolean) => void;
  onPanUpdate?: (event: any) => void;
  onPanEnd?: (event: any) => void;
  children: React.ReactNode;
};

export default function GestureHandler({
  onSingleTap,
  onDoubleTap,
  onLongPress,
  onPanUpdate,
  onPanEnd,
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

  const pan = Gesture.Pan()
    .onUpdate((event) => {
      if (onPanUpdate) {
        onPanUpdate(event);
      }
    })
    .onEnd((event) => {
      if (onPanEnd) {
        onPanEnd(event);
      }
    });

  const composed = Gesture.Simultaneous(
    Gesture.Exclusive(doubleTap, singleTap, longPress),
    pan
  );

  return (
    <GestureDetector gesture={composed}>
      <View style={{ flex: 1 }}>{children}</View>
    </GestureDetector>
  );
}