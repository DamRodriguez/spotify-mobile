import React, { useEffect } from 'react';
import { useAudioPlayer, useAudioPlayerStatus } from 'expo-audio';
import Animated, { useAnimatedStyle, useSharedValue, withTiming, Easing } from 'react-native-reanimated';
import ThemedView from "@/components/themed/ThemedView";
import { colors } from "@/themes/colors";
import useSongItem from '@/features/redux/song-item/useSongItem';

const DurationBar = () => {
  const { songData } = useSongItem();
  const player = useAudioPlayer(songData?.mp3);
  const status = useAudioPlayerStatus(player);
  const progressPercent = useSharedValue(0);

  useEffect(() => {
    if (status?.duration > 0) {
      const currentPercent = (status.currentTime / status.duration) * 100;

      progressPercent.value = withTiming(currentPercent, {
        duration: 500,
        easing: Easing.linear
      });
    } else {
      progressPercent.value = 0;
    }
  }, [status.currentTime, status.duration, progressPercent]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: `${progressPercent.value}%`,
    };
  });

  return (
    <ThemedView
      style={{
        width: "100%",
        height: 3,
        backgroundColor: colors.transparentWhite,
        overflow: "hidden",
        position: "absolute",
        bottom: 0,
        zIndex: 10,
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