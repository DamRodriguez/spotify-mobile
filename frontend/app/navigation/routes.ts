import { HomeListSectionType } from "@/types/homeListSection";

export const ROUTES = {
  MAIN: {
    HOME: {
      index: "home/index",
      listDinamicScreen: (sectionType: HomeListSectionType, id: string) => `home/list-dinamic-screen/${sectionType}/${id} `,
      artistDinamicScreen: {
        index: (id: string) => `home/artist-dinamic-screen/${id}`,
        albums: (id: string) => `home/artist-dinamic-screen/albums/${id}`
      }
    },
    SEARCH: "search",
    LIBRARY: "library",
    CREATE: "create",
  },
  PLAYER: {
    index: "/(app)/(player-group)/(player)",
  },
  ERROR: "/error",
} as const;
