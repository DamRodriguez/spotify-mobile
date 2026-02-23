import { Stack } from "expo-router";
import type { NativeStackNavigationOptions } from "@react-navigation/native-stack";

const playerGroupScreens: {
  name: string;
  options: NativeStackNavigationOptions;
}[] = [
    {
      name: "(tabs)",
      options: {
        header: () => null,
        animation: "fade",
      },
    },
    {
      name: "(player)/index",
      options: {
        header: () => null,
        animation: "slide_from_bottom",
        presentation: "formSheet",
        gestureEnabled: true,
        gestureDirection: "vertical",
      },
    },
  ];

export default function PlayerGroup() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: "transparent" },
      }}
    >
      {playerGroupScreens.map(({ name, options }) => (
        <Stack.Screen key={name} name={name} options={options} />
      ))}
    </Stack>
  );
}
