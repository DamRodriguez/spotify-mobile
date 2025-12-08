import ThemedText from "@/components/themed/ThemedText";
import ThemedView from "@/components/themed/ThemedView";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  text: {
    color: "#fff"
  },
});

const SearchScreen = () => {
  return (
    <ThemedView>
      <ThemedText style={styles.text}>
        Buscar
      </ThemedText>
    </ThemedView>
  );
};

export default SearchScreen;