import { useEffect, useState } from "react";
import useLoadFonts from "@/utils/fonts/useLoadFonts";

const useAppBootstrap = () => {
  const fonts = useLoadFonts();
  const [isSplashScreenAnimationEnded, setIsSplashScreenAnimationEnded] = useState<boolean>(false);
  const [load, setLoad] = useState({
    fonts: false,
  });
  const [criticalError, setCriticalError] = useState<boolean>(false);
  const [isAppReady, setIsAppReady] = useState(false);

  const handleOnFinish = () => {
    setIsSplashScreenAnimationEnded(true);
  };

  useEffect(() => {
    setIsAppReady(load.fonts);
  }, [load]);

  useEffect(() => {
    if (fonts.loaded) {
      setLoad(prev => ({ ...prev, fonts: true }));
    }
  }, [fonts.loaded]);

  useEffect(() => {
    if (fonts.error)
      setCriticalError(true);
  }, [fonts.error]);

  return {
    handleOnFinish,
    isAppReady: isAppReady,
    isBootstrapFinished: isSplashScreenAnimationEnded && isAppReady,
    criticalError,
  };
};

export default useAppBootstrap;
