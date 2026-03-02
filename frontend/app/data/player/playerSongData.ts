import { PlayerSongData } from "@/app/(app)/(player-group)/player";
import DepecheModeSongsImg from "@/assets/images/other/depeche-mode-temporal.png"
import DepecheModeSimilarBandImg from "@/assets/images/artists/depeche-mode.png"
import DepecheModeAboutImg from "@/assets/images/artists/depeche-mode2.png"
import DepecheModeBerlinImg from "@/assets/images/artists/music/dm-berlin.png"
import DepecheModeHeavenImg from "@/assets/images/artists/music/dm-heaven.png"
import DepecheModeMexicoImg from "@/assets/images/artists/music/dm-mexico.png"

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
    },
    relatedMusicVideo: [
      {
        id: "1",
        image: DepecheModeBerlinImg,
        songName: "Should Be Higher - Live in Berlin",
        songDuration: 540
      },
      {
        id: "2",
        image: DepecheModeHeavenImg,
        songName: "Heaven - Live Studio Session",
        songDuration: 430
      },
      {
        id: "3",
        image: DepecheModeMexicoImg,
        songName: "Ghosts Again - Love in Mexico City",
        songDuration: 320
      }
    ]
  },
]