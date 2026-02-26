import BgAbsolute from "@/components/layout/BgAbsolute";
import FloatSong from "@/components/layout/float-song/FloatSong";
import CreateModal from "@/components/modal/create-modal/CreateModal";
import TabBar from "@/components/tabs/TabBar";
import ThemedView from "@/components/themed/ThemedView";
import { tabItems } from "@/config/tabs";
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
                  headerShown: false,
                  tabBarIcon: () => <Icon />,
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
