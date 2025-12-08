import { memo } from "react";
import { StyleSheet } from "react-native";
import ThemedView from "@/components/themed/ThemedView";

const styles = StyleSheet.create({
  background: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    pointerEvents: "none",
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
