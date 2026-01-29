import { Stack } from "expo-router";

export default function PlayerGroup() {
  return (
    <Stack
      screenOptions={{
        presentation: "modal",
        animation: "slide_from_bottom",
        gestureEnabled: true,
        gestureDirection: "vertical",
        headerShown: false,
        contentStyle: { backgroundColor: "transparent" },
      }}
    />
  );
}
