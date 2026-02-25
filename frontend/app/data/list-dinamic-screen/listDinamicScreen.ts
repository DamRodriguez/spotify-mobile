import { ListDinamicScreenDataType } from "@/app/(app)/(player-group)/(drawer-group)/(tabs)/home/list-dinamic-screen/[type]/[id]";
import { getListImages } from "@/utils/getPlaylistImages";
import { getSongColorByArtist } from "@/utils/getAlbumColors";
import { playlists } from "./playlists";
import { dailyReleases } from "./dailyReleases";
import { backToYourMusic } from "./backToYourMusic";
import { depecheModeAlbums } from "./albums/depecheModeAlbums";

const listDinamicScreenItems: ListDinamicScreenDataType[] = [
  ...playlists,
  ...dailyReleases,
  ...backToYourMusic,
  ...depecheModeAlbums
];

export const listDinamicScreenData: ListDinamicScreenDataType[] =
  listDinamicScreenItems.map(item => ({
    ...item,
    frontImage: item.sectionType === "playlist" ? getListImages(item.title, listDinamicScreenItems) : item.frontImage,
    songs: item.songs.map(song => ({
      ...song,
      color: getSongColorByArtist(song.artistName, song.album)
    }))
  }));