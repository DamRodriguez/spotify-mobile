import BgAbsolute from "@/components/layout/BgAbsolute";
import FloatSong from "@/components/layout/float-song/FloatSong";
import CreateModal from "@/components/modal/create-modal/CreateModal";
import TabBar from "@/components/tabs/TabBar";
import ThemedView from "@/components/themed/ThemedView";
import { tabItems } from "@/config/tabs";
import { colors } from "@/themes/colors";
import { Tabs } from "expo-router";
import { useState } from "react";

const TabsLayout = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  return (
    <>
      <BgAbsolute />
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
              isCreateModalOpen={isCreateModalOpen}
              setIsCreateModalOpen={setIsCreateModalOpen}
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
                  tabBarIcon: ({ focused }) => {
                    const getIconColor = () => {
                      if (focused && !isCreateModalOpen) return colors.neutral[1000];
                      if (isCreateModalOpen && index === 3) return colors.neutral[100];
                      return colors.softWhite;
                    }
                    return (
                      <Icon fill={getIconColor()} />
                    )
                  },
                }}
              />
            )
          })}
        </Tabs>
      </ThemedView>
      <CreateModal
        isVisible={isCreateModalOpen}
        onClose={() => { setIsCreateModalOpen(false) }}
      />
      <FloatSong />
    </>
  );
};

export default TabsLayout;
