import { HomeListSectionType } from "@/types/homeListSection";

export const formatSectionType = (sectionType: HomeListSectionType) => {
  switch (sectionType) {
    case "album": return "album";
    case "artist": return "artista";
    case "back-to-your-music": return "música";
    case "daily-releases": return "diario";
    case "playlist": return "playlist";
    default:
      return "";
  }
};