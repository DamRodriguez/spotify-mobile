import { dailyReleasesItems } from "@/data/home";

export const getDailyReleaseTextById = (id: number): string | undefined => {
  return dailyReleasesItems.find(item => item.id === id)?.text;
};
