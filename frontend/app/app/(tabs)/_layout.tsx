import HomeHeader from "@/components/header/HomeHeader";
import { HomeIcon, SearchIcon } from "@/components/icons/tabs";
import BgAbsolute from "@/components/layout/BgAbsolute";
import TabBar from "@/components/tabs/TabBar";
import ThemedView from "@/components/themed/ThemedView";
import { TABS } from "@/navigation/tabs";
import { colors } from "@/themes/colors";
import { Tabs } from "expo-router";

const TabsLayout = () => {
  const tabActiveColor = colors.neutral[1000];
  const tabInactiveColor = colors.softGray;

  return (
    <ThemedView style={{
      flex: 1,
    }}>
      <BgAbsolute />
      <Tabs
        screenOptions={({ route }) => ({
          freezeOnBlur: true,
          sceneStyle: { backgroundColor: "transparent" },
          header: () => <></>,
        })}
        tabBar={({ state, navigation, descriptors }) =>
          <TabBar
            descriptors={descriptors}
            state={state}
            navigation={navigation}
            translateDuration={0}
          />}
      >
        <Tabs.Screen
          name={TABS.HOME.name}
          options={{
            header: () => <HomeHeader />,
            title: TABS.HOME.text,
            tabBarIcon: ({ focused }) => (
              <HomeIcon fill={focused ? tabActiveColor : tabInactiveColor} />
            )
          }}
        />
        <Tabs.Screen name={TABS.SEARCH.name} options={{
          title: TABS.SEARCH.text,
          tabBarIcon: ({ focused }) => (
            <SearchIcon fill={focused ? tabActiveColor : tabInactiveColor} />
          )
        }} />
      </Tabs>
    </ThemedView >
  );
};

export default TabsLayout;
