import { ROUTES } from "@/navigation/routes";

type Tab = {
  text: string;
  name: string;
  route: string;
};

export const TABS = {
  HOME: {
    text: "Inicio",
    name: "home",
    route: ROUTES.MAIN.HOME.index,
  },
  SEARCH: {
    text: "Buscar",
    name: "search/index",
    route: ROUTES.MAIN.SEARCH,
  },
  LIBRARY: {
    text: "Tu bibloteca",
    name: "library/index",
    route: ROUTES.MAIN.LIBRARY,
  },
  CREATE: {
    text: "Crear",
    name: "create/index",
    route: ROUTES.MAIN.LIBRARY,
  },
} as const satisfies Record<string, Tab>;
