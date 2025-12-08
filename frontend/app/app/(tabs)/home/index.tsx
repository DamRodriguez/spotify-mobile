import ThemedText from "@/components/themed/ThemedText";
import ThemedView from "@/components/themed/ThemedView";
import { sizes } from "@/constants/sizes";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: sizes.mainPadding
  },
  text: {
    color: "#fff"
  },
});

const HomeScreen = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.text}>
        Inicio
      </ThemedText>
    </ThemedView>
  );
};

export default HomeScreen;