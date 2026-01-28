import FloatSong from "@/components/layout/float-song/FloatSong";
import TabBar from "@/components/tabs/TabBar";
import ThemedView from "@/components/themed/ThemedView";
import { tabItems } from "@/config/tabs";
import { colors } from "@/themes/colors";
import { Tabs } from "expo-router";

const TabsLayout = () => {
  return (
    <ThemedView style={{ flex: 1 }}>
      <Tabs
        screenOptions={({ route }) => ({
          freezeOnBlur: true,
          sceneStyle: { backgroundColor: "transparent" },
        })}
        tabBar={({ state, navigation, descriptors }) =>
          <TabBar
            descriptors={descriptors}
            state={state}
            navigation={navigation}
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
                  <Icon fill={focused ? colors.neutral[1000] : colors.softGray} />
                ),
              }}
            />
          )
        })}
      </Tabs>
      <FloatSong />
    </ThemedView>
  );
};

export default TabsLayout;
