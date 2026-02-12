import { ArtistDinamicScreenDataType } from "@/app/(player-group)/(tabs)/home/artist-dinamic-screen/[id]";
import dmCoverImage from "@/assets/images/bgArtistTest.png"
import DepecheModeViolatorAlbumImg from "@/assets/images/albums/depeche-mode/violator.png"
import DepecheModeMusicForTheMassesAlbumImg from "@/assets/images/albums/depeche-mode/music-for-the-masses.png"
import DepecheModeSomeGreatRewardAlbumImg from "@/assets/images/albums/depeche-mode/some-great-reward.png"
import DepecheModeConstructionTimeAgainAlbumImg from "@/assets/images/albums/depeche-mode/construction-time-again.png"
import DepecheModeSpeakSpellAlbumImg from "@/assets/images/albums/depeche-mode/speak-spell.png"

export const artistDinamicScreenData: ArtistDinamicScreenDataType[] = [
  {
    id: "1",
    coverImage: dmCoverImage,
    artistName: "Depeche Mode",
    monthlyListeners: 10232990,
    isFollowing: true,
    songs: [
      { id: "1", songName: "Enjoy the Silence", artistName: "Depeche Mode", mp3: "", image: DepecheModeViolatorAlbumImg, duration: 130, color: "#5c1212", reproductions: 920091098 },
      { id: "2", songName: "Personal Jesus", artistName: "Depeche Mode", mp3: "", image: DepecheModeViolatorAlbumImg, duration: 130, color: "#8e4227", reproductions: 810100239 },
      { id: "3", songName: "Policy of Truth", artistName: "Depeche Mode", mp3: "", image: DepecheModeViolatorAlbumImg, duration: 130, color: "#4a6a85", reproductions: 600123130 },
      { id: "4", songName: "Never Let Me Down Again", artistName: "Depeche Mode", mp3: "", image: DepecheModeMusicForTheMassesAlbumImg, duration: 130, color: "#752371", reproductions: 590091000 },
      { id: "5", songName: "Strangelove", artistName: "Depeche Mode", mp3: "", image: DepecheModeMusicForTheMassesAlbumImg, duration: 130, color: "#e46a6a", reproductions: 412010999 },
      { id: "6", songName: "People Are People", artistName: "Depeche Mode", mp3: "", image: DepecheModeSomeGreatRewardAlbumImg, duration: 130, color: "#6b47c4", reproductions: 400129001 },
      { id: "7", songName: "Master and Servant", artistName: "Depeche Mode", mp3: "", image: DepecheModeSomeGreatRewardAlbumImg, duration: 130, color: "#298893", reproductions: 330999110 },
      { id: "8", songName: "Everything Counts", artistName: "Depeche Mode", mp3: "", image: DepecheModeConstructionTimeAgainAlbumImg, duration: 130, color: "#7d360f", reproductions: 290123001 },
      { id: "9", songName: "Just Can't Get Enough", artistName: "Depeche Mode", mp3: "", image: DepecheModeSpeakSpellAlbumImg, duration: 130, color: "#761818", reproductions: 200900111 },
      { id: "10", songName: "Blasphemous Rumours", artistName: "Depeche Mode", mp3: "", image: DepecheModeSomeGreatRewardAlbumImg, duration: 130, color: "#7e8d2c", reproductions: 90123100 },
    ],
  }
]