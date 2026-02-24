import ThemedView from "@/components/themed/ThemedView";
import { colors } from "@/themes/colors";
import { Keyboard, StyleSheet } from "react-native";
import OptimizedImage from "@/components/image/OptimizedImage";
import { sizes } from "@/constants/sizes";
import HorizontalFilters from "@/components/header/home-header/HorizontalFilters";
import ItemWrapper from "@/components/other/ItemWrapper";
import ProfileDrawer from "./pofile-drawer/ProfileDrawer";
import AnimatedModal from "@/components/modal/AnimatedModal";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import userImage from "@/assets/images/other/user.png"
import { useState } from "react";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    paddingHorizontal: sizes.mainPadding,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    gap: 14,
  },
  profileImage: {
    width: 32,
    height: 32,
    borderRadius: 999,
  }
});

const HomeHeader = () => {
  const insets = useSafeAreaInsets();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openProfileDrawer = () => {
    Keyboard.dismiss();
    setIsDrawerOpen(true)
  };

  const closeProfileDrawer = () => {
    Keyboard.dismiss();
    setIsDrawerOpen(false);
  };

  return (
    <>
      <ThemedView
        style={[{
          paddingTop: insets.top + 16,
        }, styles.container]}
      >
        <ItemWrapper onPress={openProfileDrawer}>
          <OptimizedImage
            source={userImage}
            style={styles.profileImage}
          />
        </ItemWrapper>

        <HorizontalFilters />
      </ThemedView>

      <AnimatedModal
        visible={isDrawerOpen}
        onClose={closeProfileDrawer}
        direction="left"
        style={{
          top: 0,
          backgroundColor: colors.quaternary[600],
          width: "90%",
          elevation: 50,
        }}
      >
        <ProfileDrawer
          onClose={closeProfileDrawer}
        />
      </AnimatedModal>
    </>
  );
};


export default HomeHeader;