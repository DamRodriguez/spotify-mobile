import { ListDinamicScreenDataType } from "@/app/(app)/(player-group)/(tabs)/home/list-dinamic-screen/[type]/[id]";

export const getListImages = (
  title: string,
  dynamicData: ListDinamicScreenDataType[]
): any | any[] => {
  const playlist = dynamicData.find(
    item => item.sectionType === "playlist" && item.title === title
  );

  if (!playlist) return "";

  const uniqueImages = Array.from(
    new Set(
      playlist.songs
        .map(song => song.image)
        .filter(Boolean)
    )
  );

  if (uniqueImages.length >= 4) {
    return uniqueImages.slice(0, 4);
  }

  if (uniqueImages.length > 0) {
    const randomIndex = Math.floor(Math.random() * uniqueImages.length);
    return uniqueImages[randomIndex];
  }

  return "";
};
