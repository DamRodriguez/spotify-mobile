import { StatusBar } from "expo-status-bar";
import LottieView from "lottie-react-native";
import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import Animated, {
  Easing,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming
} from "react-native-reanimated";
import logo from "@/assets/images/logos/spotify-logo.png";
import splash_illust from "@/assets/lotties/splash_illust.json";

interface SplashScreenProps {
  onFinish?: () => void;
  isAppReady: boolean;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1d1818",
  },
  lottie: {
    flex: 1,
    width: "100%",
  },
  logo: {
    position: "absolute",
    alignSelf: "center",
    top: "35%",
    width: 190,
    height: 190,
    zIndex: 1,
  },
});

const SplashScreen: React.FC<SplashScreenProps> = ({ onFinish, isAppReady }) => {
  const opacity = useSharedValue(0);
  const scale = useSharedValue(0);
  const [isInitialAnimationFinished, setIsInitialAnimationFinished] = useState<boolean>(false);

  useEffect(() => {
    opacity.value = withTiming(1, { duration: 1500, easing: Easing.out(Easing.ease) }, () => {
      runOnJS(setIsInitialAnimationFinished)(true);
    });
    scale.value = withSpring(1, { stiffness: 150 });
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ scale: scale.value }],
  }));

  useEffect(() => {
    if (isAppReady && isInitialAnimationFinished) {
      opacity.value = withTiming(0, { duration: 250 });
      scale.value = withTiming(1.1, { duration: 250 }, () => {
        if (onFinish)
          runOnJS(onFinish)();
      });
    }
  }, [isAppReady, isInitialAnimationFinished]);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <LottieView
        source={splash_illust}
        autoPlay
        resizeMode="cover"
        loop={false}
        style={styles.lottie}
      />
      <Animated.Image
        source={logo}
        style={[styles.logo, animatedStyle]}
        resizeMode="contain"
      />
    </View>
  );
};

export default SplashScreen;
