import { PlayerSongData } from "@/app/(app)/(player-group)/player";
import DepecheModeSongsImg from "@/assets/images/other/depeche-mode-temporal.png"
import DepecheModeSimilarBandImg from "@/assets/images/artists/depeche-mode.png"
import DepecheModeAboutImg from "@/assets/images/artists/depeche-mode2.png"

export const playerSongData: PlayerSongData[] = [
  {
    id: "16",
    exploreImages: {
      songs: DepecheModeSongsImg,
      similarBand: DepecheModeSimilarBandImg,
      similarSong: ""
    },
    aboutArtist: {
      image: DepecheModeAboutImg,
      monthlyListeners: 10232990,
      textInformation: "Depeche Mode es una banda británica de música electrónica formada en 1980 por Vince Clarke, Andrew Fletcher, Martin Gore y David Gahan."
    }
  },
]