import ThemedView from "@/components/themed/ThemedView";
import { colors } from "@/themes/colors";
import { Keyboard, StyleSheet } from "react-native";
import OptimizedImage from "@/components/image/OptimizedImage";
import { sizes } from "@/constants/sizes";
import HorizontalFilters from "@/components/header/home-header/HorizontalFilters";
import ItemWrapper from "@/components/other/ItemWrapper";
import { useSharedValue } from "react-native-reanimated";
import ProfileDrawer from "./pofile-drawer/ProfileDrawer";
import AnimatedModal from "@/components/modal/AnimatedModal";

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
    backgroundColor: "#fff",
    width: 32,
    height: 32,
    borderRadius: 999,
  }
});

const HomeHeader = () => {
  const profileDrawerVisible = useSharedValue(false);

  const toggleProfileDrawer = () => {
    Keyboard.dismiss();
    profileDrawerVisible.value = !profileDrawerVisible.value;
  };

  const closeProfileDrawer = () => {
    profileDrawerVisible.value = false;
  };

  return (
    <>
      <ThemedView style={styles.container}>
        <ItemWrapper onPress={toggleProfileDrawer}>
          <OptimizedImage
            source={{}}
            style={styles.profileImage}
          />
        </ItemWrapper>

        <HorizontalFilters />
      </ThemedView>

      <AnimatedModal
        visible={profileDrawerVisible}
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