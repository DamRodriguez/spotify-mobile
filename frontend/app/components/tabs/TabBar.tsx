import type { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import TabItem from "@/components/tabs/TabItem";
import ThemedView from "@/components/themed/ThemedView";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import BorderGradient from "../other/BorderGradient";
import { Dimensions } from "react-native";
import { useRouter } from "expo-router";
import { sizes } from "@/constants/sizes";

type TabBarProps = {
  navigation: BottomTabBarProps["navigation"];
  state: BottomTabBarProps["state"];
  descriptors: BottomTabBarProps["descriptors"];
};

const TabBar = ({ navigation, state, descriptors }: TabBarProps) => {
  const screenSizes = Dimensions.get("window");
  const insets = useSafeAreaInsets();
  const router = useRouter();

  const handlePress = (routeName: string, isFocused: boolean) => {
    if (isFocused) {
      router.navigate(routeName.toLowerCase());
    } else {
      navigation.navigate(routeName);
    }
  };

  return (
    <ThemedView
      style={{
        flexDirection: "row",
        paddingBottom: insets.bottom + 5,
        paddingTop: 15,
        position: "absolute",
        bottom: 0,
      }}
    >
      {Array.from({ length: 4 }, (_, i) => (
        <BorderGradient
          key={i}
          direction="bottom"
          shadowSize={screenSizes.width}
          shadowDistance={insets.bottom + sizes.tabsHeight}
          shadowColor="rgb(0, 0, 0)"
        />
      ))}
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = index === state.index;
        if (!options.title || !options.tabBarIcon)
          return null;

        return (
          <TabItem
            key={route.key}
            name={route.name}
            title={options.title}
            icon={options.tabBarIcon({ focused: isFocused, color: "", size: 0 })}
            isFocused={isFocused}
            onPress={() => handlePress(route.name, isFocused)}
          />
        );
      })}
    </ThemedView>
  );
};

export default TabBar;
