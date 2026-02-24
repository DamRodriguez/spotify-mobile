import React, { useEffect, useState } from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  Easing,
} from "react-native-reanimated";
import ThemedView from "@/components/themed/ThemedView";
import { colors } from "@/themes/colors";
import useSongProgress from "@/features/redux/song-progress/useSongProgress";

const DurationBar = () => {
  const { state } = useSongProgress();
  const [containerWidth, setContainerWidth] = useState(0);
  const animatedWidth = useSharedValue(0);

  useEffect(() => {
    if (!state.duration || containerWidth === 0) {
      animatedWidth.value = 0;
      return;
    }

    const ratio = state.position / state.duration;
    const newWidth = containerWidth * ratio;

    animatedWidth.value = withTiming(newWidth, {
      duration: 0,
      easing: Easing.linear,
    });
  }, [state.position, state.duration, containerWidth, animatedWidth]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: animatedWidth.value,
    };
  });

  return (
    <ThemedView
      onLayout={(e) => {
        setContainerWidth(e.nativeEvent.layout.width);
      }}
      style={{
        width: "100%",
        height: 3,
        backgroundColor: colors.transparentWhite,
        position: "absolute",
        bottom: 0,
        left: 0,
        overflow: "hidden",
      }}
    >
      <Animated.View
        style={[
          {
            height: "100%",
            backgroundColor: colors.neutral[1000],
          },
          animatedStyle,
        ]}
      />
    </ThemedView>
  );
};

export default DurationBar;