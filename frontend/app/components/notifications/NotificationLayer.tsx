import { useEffect, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolate,
  Easing,
} from "react-native-reanimated";
import useNotification from "@/features/redux/notification/useNotification";
import { BasicNotification } from "@/components/notifications/BasicNotification";
import { sizes } from "@/constants/sizes";
import useSongItem from "@/features/redux/song-item/useSongItem";

const AUTO_CLOSE_MS = 2500;
const ANIMATION_MS = 250;
const START_OFFSET = 10;

const NotificationLayer = () => {
  const insets = useSafeAreaInsets();
  const { songData } = useSongItem();
  const { hideNotification, state } = useNotification();

  const [mounted, setMounted] = useState(false);
  const progress = useSharedValue(0);

  useEffect(() => {
    if (state.isVisible) {
      setMounted(true);

      progress.value = withTiming(1, {
        duration: ANIMATION_MS,
        easing: Easing.out(Easing.cubic),
      });

      const autoClose = setTimeout(() => {
        hideNotification();
      }, AUTO_CLOSE_MS);

      return () => clearTimeout(autoClose);
    }

    if (!mounted) return;

    progress.value = withTiming(0, {
      duration: ANIMATION_MS,
      easing: Easing.in(Easing.cubic),
    });

    const unmount = setTimeout(() => {
      setMounted(false);
    }, ANIMATION_MS);

    return () => clearTimeout(unmount);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.isVisible, state.text]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: interpolate(
          progress.value,
          [0, 1],
          [START_OFFSET, 0],
          "clamp"
        ),
      },
    ],
    opacity: progress.value,
  }));

  if (!mounted) return null;

  return (
    <Animated.View
      style={[
        {
          position: "absolute",
          bottom: songData.id
            ? insets.bottom + 130
            : insets.bottom + sizes.tabsHeight,
          left: sizes.mainPadding,
          right: sizes.mainPadding,
          zIndex: 1,
          pointerEvents: "box-none",
        },
        animatedStyle,
      ]}
    >
      <BasicNotification type={state.type} text={state.text} />
    </Animated.View>
  );
};

export default NotificationLayer;