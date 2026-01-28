import ThemedView from "@/components/themed/ThemedView";
import { colors } from "@/themes/colors";
import React, { useEffect, useRef } from "react";
import { Animated } from "react-native";

type DurationBarProps = {
  duration: number;
};

const DurationBar = ({ duration }: DurationBarProps) => {
  const progress = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    progress.setValue(0);

    Animated.timing(progress, {
      toValue: 1,
      duration,
      useNativeDriver: false,
    }).start();
  }, [duration, progress]);

  const widthInterpolated = progress.interpolate({
    inputRange: [0, 1],
    outputRange: ["0%", "100%"],
  });

  return (
    <ThemedView
      style={{
        width: "100%",
        height: 2,
        backgroundColor: colors.neutral[700],
        borderRadius: 999,
        overflow: "hidden",
        position: "absolute",
        bottom: 0,
        elevation: 20,
      }}
    >
      <Animated.View
        style={[
          {
            height: "100%",
            backgroundColor: colors.neutral[1000],
          },
          { width: widthInterpolated },
        ]}
      />
    </ThemedView>
  );
};

export default DurationBar;
