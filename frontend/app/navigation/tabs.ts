import { ROUTES } from "@/navigation/routes";

type Tab = {
  text: string;
  name: string;
  route: string;
};

export const TABS = {
  HOME: {
    text: "Inicio",
    name: "home/index",
    route: ROUTES.MAIN.HOME,
  },
  SEARCH: {
    text: "Buscar",
    name: "search/index",
    route: ROUTES.MAIN.SEARCH,
  },
} as const satisfies Record<string, Tab>;
