import HomeHeader from "@/components/header/home-header/HomeHeader";
import ListDinamicPageHeader from "@/components/header/list-dinamic-page-header/ListDinamicPageHeader";
import { Stack } from "expo-router";

const homeStackScreens = [
  {
    name: "index",
    options: {
      header: () => <HomeHeader />
    },
  },
  {
    name: "listDinamicPage/[type]/[id]",
    options: {
      header: () => <ListDinamicPageHeader />
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
