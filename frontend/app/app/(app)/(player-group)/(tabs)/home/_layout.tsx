import HomeHeader from "@/components/header/home-header/HomeHeader";
import { Stack } from "expo-router";

const homeStackScreens = [
  {
    name: "index",
    options: {
      header: () => <HomeHeader />
    },
  },
  {
    name: "list-dinamic-screen/[type]/[id]",
    options: {
      header: () => null
    },
  },
  {
    name: "artist-dinamic-screen/[id]",
    options: {
      header: () => null
    },
  },
];

const HomeLayout = () => {
  return (
    <Stack
      screenOptions={{
        animation: "slide_from_right",
        contentStyle: { backgroundColor: "transparent" },
        freezeOnBlur: true,
      }}
    >
      {homeStackScreens.map(({ name, options }) => (
        <Stack.Screen key={name} name={name} options={options} />
      ))}
    </Stack>
  )
};

export default HomeLayout;
