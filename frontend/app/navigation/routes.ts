export const ROUTES = {
  MAIN: {
    HOME: {
      index: "home/index",
      listDinamicScreen: "home/list-dinamic-screen",
      artistDinamicScreen: "home/artist-dinamic-screen"
    },
    SEARCH: "search",
    LIBRARY: "library",
    CREATE: "create",
  },
  PLAYER: {
    index: "/(player-group)/(player)",
  },
  ERROR: "/error",
} as const;
