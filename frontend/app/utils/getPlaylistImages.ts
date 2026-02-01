import { ListDinamicPageDataType } from "@/app/(player-group)/(tabs)/home/listDinamicPage/[type]/[id]";

export const getListImages = (
  listId: string,
  dynamicData: ListDinamicPageDataType[]
): any | any[] => {
  const playlist = dynamicData.find(
    item => item.sectionType === "playlist" && item.id === listId
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
