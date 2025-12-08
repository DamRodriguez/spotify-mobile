import type { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import TabItem from "@/components/tabs/TabItem";
import ThemedView from "@/components/themed/ThemedView";
import { sizes } from "@/constants/sizes";

type TabBarProps = {
  translateDuration: number;
  navigation: BottomTabBarProps["navigation"];
  state: BottomTabBarProps["state"];
  descriptors: BottomTabBarProps["descriptors"];
};

const TabBar = ({ translateDuration, navigation, state, descriptors }: TabBarProps) => {

  const handlePress = (route: string) => {
    navigation.navigate(route);
  };

  return (
    <ThemedView
      style={{
        backgroundColor: "transparent",
        paddingBottom: 0,
      }}
    >
      <ThemedView
        style={{
          flexDirection: "row",
          position: "absolute",
          left: 0,
          right: 0,
          height: sizes.tabBar.height,
          bottom: 0,
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
    </ThemedView>
  );
};

export default TabBar;
