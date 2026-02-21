import { useEffect, useState, useRef } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  runOnJS,
} from "react-native-reanimated";
import useNotification from "@/features/redux/notification/useNotification";
import { BasicNotification } from "@/components/notifications/BasicNotification";
import { sizes } from "@/constants/sizes";
import useSongItem from "@/features/redux/song-item/useSongItem";

const AUTO_CLOSE_MS = 2500;
const ANIMATION_MS = 250;
const START_OFFSET = 40;

const NotificationLayer = () => {
  const insets = useSafeAreaInsets();

  const { songData } = useSongItem();

  const { hideNotification, state } = useNotification();

  const [mounted, setMounted] = useState(false);

  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const translateY = useSharedValue(START_OFFSET);
  const opacity = useSharedValue(0);

  useEffect(() => {
    if (!state.isVisible) return;

    setMounted(true);

    translateY.value = START_OFFSET;
    opacity.value = 0;

    translateY.value = withTiming(0, {
      duration: ANIMATION_MS,
      easing: Easing.out(Easing.cubic),
    });

    opacity.value = withTiming(1, {
      duration: ANIMATION_MS,
    });
  }, [state.isVisible, state.text]);

  useEffect(() => {
    if (!state.isVisible) return;

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      hideNotification();
    }, AUTO_CLOSE_MS);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [state.isVisible, state.text, hideNotification]);

  useEffect(() => {
    if (state.isVisible) return;
    if (!mounted) return;

    opacity.value = withTiming(
      0,
      {
        duration: ANIMATION_MS,
        easing: Easing.in(Easing.cubic),
      },
      () => {
        runOnJS(setMounted)(false);
      }
    );
  }, [state.isVisible]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
    opacity: opacity.value,
  }));

  if (!mounted) return null;

  return (
    <Animated.View
      style={[
        {
          position: "absolute",
          bottom: songData.id ? insets.bottom + 135 : insets.bottom + sizes.tabsHeight,
          left: sizes.mainPadding,
          right: sizes.mainPadding,
          zIndex: 10,
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
