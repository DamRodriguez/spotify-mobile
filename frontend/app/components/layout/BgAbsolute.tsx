import { memo } from "react";
import { StyleSheet } from "react-native";
import ThemedView from "@/components/themed/ThemedView";
import { colors } from "@/themes/colors";

const styles = StyleSheet.create({
  background: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    pointerEvents: "none",
    backgroundColor: colors.background
  },
});

const BgAbsolute = () => {
  return (
    <ThemedView
      style={styles.background}
    />
  );
};

export default memo(BgAbsolute);
