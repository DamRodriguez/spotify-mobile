import BgAbsolute from "@/components/layout/BgAbsolute";
import TabBar from "@/components/tabs/TabBar";
import ThemedView from "@/components/themed/ThemedView";
import { tabItems } from "@/config/tabs";
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
        {tabItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <Tabs.Screen
              key={index}
              name={item.name}
              options={{
                title: item.text,
                header: item.header ? item.header : () => <></>,
                tabBarIcon: ({ focused }) => (
                  <Icon fill={focused ? tabActiveColor : tabInactiveColor} />
                ),
              }}
            />
          )
        })}
      </Tabs>
    </ThemedView>
  );
};

export default TabsLayout;
