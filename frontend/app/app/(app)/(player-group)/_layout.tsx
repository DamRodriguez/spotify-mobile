import { Stack } from "expo-router";
import type { NativeStackNavigationOptions } from "@react-navigation/native-stack";

const playerGroupScreens: {
  name: string;
  options: NativeStackNavigationOptions;
}[] = [
    {
      name: "(drawer-group)",
      options: {
        headerShown: false,
        animation: "fade",
      },
    },
    {
      name: "(player)/index",
      options: {
        headerShown: false,
        presentation: "formSheet",
        sheetCornerRadius: 15,
        gestureEnabled: true,
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
