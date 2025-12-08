import ThemedText from "@/components/themed/ThemedText";
import ThemedView from "@/components/themed/ThemedView";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  text: {
    color: "#fff"
  },
});

const HomeScreen = () => {
  return (
    <ThemedView>
      <ThemedText style={styles.text}>
        Home
      </ThemedText>
    </ThemedView>
  );
};

export default HomeScreen;