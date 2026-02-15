import * as NavigationBar from "expo-navigation-bar";
import { Slot } from "expo-router";
import { useEffect } from "react";
import SplashScreen from "@/components/other/SplashScreen";
import useAppBootstrap from "@/hooks/useAppBootstrap";

const AppLayout = () => {
  const { criticalError, isBootstrapFinished, isAppReady, handleOnFinish } = useAppBootstrap();

  useEffect(() => {
    void NavigationBar.setButtonStyleAsync("light");
  }, []);

  {/*
  useEffect(() => {
    if (isBootstrapFinished && criticalError)
      router.replace(ROUTES.ERROR);
  }, [criticalError]);

  if (criticalError)
    return <Redirect href={ROUTES.ERROR} />;
    */}

  if (!isBootstrapFinished) {
    return (
      <SplashScreen onFinish={handleOnFinish} isAppReady={isAppReady} />
    );
  }

  return <Slot />;
};

export default AppLayout;
