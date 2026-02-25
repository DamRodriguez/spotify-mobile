import ThemedText from "@/components/themed/ThemedText";
import ThemedView from "@/components/themed/ThemedView";
import { sizes } from "@/constants/sizes";
import { colors } from "@/themes/colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: sizes.mainPadding,
    backgroundColor: colors.background,
    flex: 1
  },
  text: {
    color: "#fff"
  },
});

const CreateScreen = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.text}>
        Crear
      </ThemedText>
    </ThemedView>
  );
};

export default CreateScreen;