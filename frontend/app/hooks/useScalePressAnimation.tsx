import {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

type Options = {
  scaleIn?: number;
  durationIn?: number;
  durationOut?: number;
};

const useScalePressAnimation = (options?: Options) => {
  const {
    scaleIn = 1.05,
    durationIn = 120,
    durationOut = 120,
  } = options || {};

  const scale = useSharedValue(1);

  const animate = () => {
    scale.value = withTiming(scaleIn, { duration: durationIn }, () => {
      scale.value = withTiming(1, { duration: durationOut });
    });
  };

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return {
    animatedStyle,
    animate,
  };
};

export default useScalePressAnimation;
