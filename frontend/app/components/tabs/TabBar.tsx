import type { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import TabItem from "@/components/tabs/TabItem";
import ThemedView from "@/components/themed/ThemedView";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type TabBarProps = {
  translateDuration: number;
  navigation: BottomTabBarProps["navigation"];
  state: BottomTabBarProps["state"];
  descriptors: BottomTabBarProps["descriptors"];
};

const TabBar = ({ translateDuration, navigation, state, descriptors }: TabBarProps) => {
  const insets = useSafeAreaInsets();

  const handlePress = (route: string) => {
    navigation.navigate(route);
  };

  return (
    <ThemedView
      style={{
        flexDirection: "row",
        paddingBottom: insets.bottom + 10,
        paddingTop: insets.bottom
      }}
    >
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
            onPress={() => { handlePress(route.name); }}
            translateDuration={translateDuration}
          />
        );
      })}
    </ThemedView>
  );
};

export default TabBar;
