import ThemedView from "@/components/themed/ThemedView";
import { colors } from "@/themes/colors";
import { Keyboard, StyleSheet } from "react-native";
import OptimizedImage from "@/components/image/OptimizedImage";
import { sizes } from "@/constants/sizes";
import HorizontalFilters from "@/components/header/home-header/HorizontalFilters";
import ItemWrapper from "@/components/other/ItemWrapper";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import userImage from "@/assets/images/other/user.png"
import { useNavigation } from "expo-router";
import { DrawerActions } from "@react-navigation/native";

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
  const navigation = useNavigation();

  const openProfileDrawer = () => {
    Keyboard.dismiss();
    navigation.dispatch(DrawerActions.openDrawer());
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
    </>
  );
};

export default HomeHeader;