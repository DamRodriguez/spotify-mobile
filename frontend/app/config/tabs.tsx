import HomeHeader from "@/components/header/home-header/HomeHeader";
import { HomeIcon, LibraryIcon, PlusIcon, SearchIcon } from "@/components/icons/tabs";
import { TABS } from "@/navigation/tabs";
import { JSX } from "react";

type tabItemsData = {
  name: string;
  text: string;
  icon: React.FC<{ fill: string }>;
  header?: () => JSX.Element;
}

export const tabItems: tabItemsData[] = [
  {
    name: TABS.HOME.name,
    text: TABS.HOME.text,
    icon: HomeIcon,
    header: () => <HomeHeader />
  },
  {
    name: TABS.SEARCH.name,
    text: TABS.SEARCH.text,
    icon: SearchIcon,
  },
  {
    name: TABS.LIBRARY.name,
    text: TABS.LIBRARY.text,
    icon: LibraryIcon,
  },
  {
    name: TABS.CREATE.name,
    text: TABS.CREATE.text,
    icon: PlusIcon,
  },
];