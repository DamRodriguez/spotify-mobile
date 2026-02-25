import { ListDinamicScreenDataType } from "@/app/(app)/(player-group)/(drawer-group)/(tabs)/home/list-dinamic-screen/[type]/[id]";
import DepecheModeViolatorAlbumImg from "@/assets/images/albums/depeche-mode/violator.png"
import enjoyTheSilenceMp3 from "@/assets/audio/depeche-mode/violator/enjoy-the-silence.mp3"
import personalJesusMp3 from "@/assets/audio/depeche-mode/violator/personal-jesus.mp3"
import dmArtistImage from "@/assets/images/artists/depeche-mode.png"

export const depecheModeAlbums: ListDinamicScreenDataType[] = [
  {
    sectionType: "album",
    id: "dm-violator",
    artist: {
      id: "16",
      name: "Depeche Mode",
      image: dmArtistImage,
    },
    frontImage: DepecheModeViolatorAlbumImg,
    title: "Violator",
    type: "Álbum",
    releaseDate: 1990,
    headerColor: "#5c1212",
    videoImage: DepecheModeViolatorAlbumImg,
    songs: [
      { id: "1", artistId: "16", songName: "World in My Eyes", artistName: "Depeche Mode", mp3: "", album: "violator", image: DepecheModeViolatorAlbumImg },
      { id: "2", artistId: "16", songName: "Sweetest Perfection", artistName: "Depeche Mode", mp3: "", album: "violator", image: DepecheModeViolatorAlbumImg },
      { id: "3", artistId: "16", songName: "Personal Jesus", artistName: "Depeche Mode", mp3: personalJesusMp3, album: "violator", image: DepecheModeViolatorAlbumImg },
      { id: "4", artistId: "16", songName: "Halo", artistName: "Depeche Mode", mp3: "", album: "violator", image: DepecheModeViolatorAlbumImg },
      { id: "5", artistId: "16", songName: "Waiting for the Night", artistName: "Depeche Mode", mp3: "", album: "violator", image: DepecheModeViolatorAlbumImg },
      { id: "6", artistId: "16", songName: "Enjoy the Silence", artistName: "Depeche Mode", mp3: enjoyTheSilenceMp3, album: "violator", image: DepecheModeViolatorAlbumImg },
      { id: "7", artistId: "16", songName: "Policy of Truth", artistName: "Depeche Mode", mp3: "", album: "violator", image: DepecheModeViolatorAlbumImg },
      { id: "8", artistId: "16", songName: "Blue Dress", artistName: "Depeche Mode", mp3: "", album: "violator", image: DepecheModeViolatorAlbumImg },
      { id: "9", artistId: "16", songName: "Clean", artistName: "Depeche Mode", mp3: "", album: "violator", image: DepecheModeViolatorAlbumImg }
    ],
  },
]