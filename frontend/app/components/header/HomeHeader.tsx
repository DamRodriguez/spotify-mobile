import ThemedView from "@/components/themed/ThemedView";
import { colors } from "@/themes/colors";
import { StyleSheet } from "react-native";
import OptimizedImage from "@/components/image/OptimizedImage";

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: colors.background,
    elevation: 5,
  },
  profileImage: {
    backgroundColor: "red",
    width: 40,
    height: 40,
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
    </ThemedView>
  );
};

export default HomeHeader;