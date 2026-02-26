import { HomeIcon, LibraryIcon, PlusIcon, SearchIcon } from "@/components/icons/tabs";
import { TABS } from "@/navigation/tabs";

type tabItemsData = {
  name: string;
  text: string;
  icon: React.FC;
}

export const tabItems: tabItemsData[] = [
  {
    name: TABS.HOME.name,
    text: TABS.HOME.text,
    icon: HomeIcon,
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