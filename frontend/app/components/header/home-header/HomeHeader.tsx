import ThemedView from "@/components/themed/ThemedView";
import { colors } from "@/themes/colors";
import { StyleSheet } from "react-native";
import OptimizedImage from "@/components/image/OptimizedImage";
import { sizes } from "@/constants/sizes";
import HorizontalFilters from "@/components/header/home-header/HorizontalFilters";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    elevation: 5,
    paddingHorizontal: sizes.mainPadding,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    gap: 14,
  },
  profileImage: {
    backgroundColor: "#fff",
    width: 38,
    height: 38,
    borderRadius: 999,
  }
});

const HomeHeader = () => {
  return (
    <ThemedView style={styles.container}>
      <OptimizedImage
        source={{}}
        style={styles.profileImage}
      />
      <HorizontalFilters />
    </ThemedView>
  );
};

export default HomeHeader;