import NoContent from "@/components/other/NoContent";
import AlbumList from "@/components/sections/artist-dinamic-screen/album/AlbumList";
import { artistDinamicScreenData } from "@/data/artistDinamicScreen";
import { useLocalSearchParams } from "expo-router";

const AlbumsDinamicScreen = () => {
  const { id } = useLocalSearchParams<{ id: string; }>();
  const data = artistDinamicScreenData.find(
    (item) => item.id === id
  );

  if (!data) {
    return (
      <NoContent />
    );
  }

  return (
    <AlbumList
      albums={data.albums}
    />
  );
};

export default AlbumsDinamicScreen;