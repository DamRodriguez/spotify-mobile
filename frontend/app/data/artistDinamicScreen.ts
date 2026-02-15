import { ArtistDinamicScreenDataType } from "@/app/(app)/(player-group)/(tabs)/home/artist-dinamic-screen/[id]";
import dmCoverImage from "@/assets/images/artists/depeche-mode.png"
import DepecheModeViolatorAlbumImg from "@/assets/images/albums/depeche-mode/violator.png"
import DepecheModeMusicForTheMassesAlbumImg from "@/assets/images/albums/depeche-mode/music-for-the-masses.png"
import DepecheModeSomeGreatRewardAlbumImg from "@/assets/images/albums/depeche-mode/some-great-reward.png"
import DepecheModeConstructionTimeAgainAlbumImg from "@/assets/images/albums/depeche-mode/construction-time-again.png"
import DepecheModeSpeakSpellAlbumImg from "@/assets/images/albums/depeche-mode/speak-spell.png"
import DepecheModeVideoImage from "@/assets/images/other/depeche-mode-temporal.png"
import LadyGagaArtistImg from "@/assets/images/artists/lady-gaga.png"
import LadyGagaTheFameAlbumImg from "@/assets/images/albums/lady-gaga/the-fame.png"
import LadyGagaBornThisWayAlbumImg from "@/assets/images/albums/lady-gaga/born-this-way.png"
import LadyGagaChromaticaAlbumImg from "@/assets/images/albums/lady-gaga/chromatica.png"
import { getSongColorByArtist } from "@/utils/getAlbumColors";

export const artistDinamicScreenBase: ArtistDinamicScreenDataType[] = [
  {
    id: "16",
    coverImage: dmCoverImage,
    videoImage: DepecheModeVideoImage,
    artistName: "Depeche Mode",
    monthlyListeners: 10232990,
    isFollowing: true,
    headerColor: "#524c4c",
    songs: [
      { id: "1", songName: "Enjoy the Silence", artistName: "Depeche Mode", mp3: "", image: DepecheModeViolatorAlbumImg, album: "violator", reproductions: 920091098 },
      { id: "2", songName: "Personal Jesus", artistName: "Depeche Mode", mp3: "", image: DepecheModeViolatorAlbumImg, album: "violator", reproductions: 810100239 },
      { id: "3", songName: "Policy of Truth", artistName: "Depeche Mode", mp3: "", image: DepecheModeViolatorAlbumImg, album: "violator", reproductions: 7699091 },
      { id: "4", songName: "Never Let Me Down Again", artistName: "Depeche Mode", mp3: "", image: DepecheModeMusicForTheMassesAlbumImg, album: "music-for-the-masses", reproductions: 590091000 },
      { id: "5", songName: "Strangelove", artistName: "Depeche Mode", mp3: "", image: DepecheModeMusicForTheMassesAlbumImg, album: "music-for-the-masses", reproductions: 412010999 },
      { id: "6", songName: "People Are People", artistName: "Depeche Mode", mp3: "", image: DepecheModeSomeGreatRewardAlbumImg, album: "some-great-reward", reproductions: 400129001 },
      { id: "7", songName: "Master and Servant", artistName: "Depeche Mode", mp3: "", image: DepecheModeSomeGreatRewardAlbumImg, album: "some-great-reward", reproductions: 330999110 },
      { id: "8", songName: "Everything Counts", artistName: "Depeche Mode", mp3: "", image: DepecheModeConstructionTimeAgainAlbumImg, album: "construction-time-again", reproductions: 290123001 },
      { id: "9", songName: "Just Can't Get Enough", artistName: "Depeche Mode", mp3: "", image: DepecheModeSpeakSpellAlbumImg, album: "speak-spell", reproductions: 200900111 },
      { id: "10", songName: "Blasphemous Rumours", artistName: "Depeche Mode", mp3: "", image: DepecheModeSomeGreatRewardAlbumImg, album: "some-great-reward", reproductions: 90123100 },
    ],
  },
  {
    id: "20",
    coverImage: LadyGagaArtistImg,
    videoImage: LadyGagaArtistImg,
    artistName: "Lady Gaga",
    monthlyListeners: 7890129,
    isFollowing: false,
    headerColor: "#af5a9b",
    songs: [
      { id: "1", songName: "Just Dance", artistName: "Lady Gaga", mp3: "", image: LadyGagaTheFameAlbumImg, duration: 244, album: "the-fame", reproductions: 1800000000 },
      { id: "2", songName: "Poker Face", artistName: "Lady Gaga", mp3: "", image: LadyGagaTheFameAlbumImg, duration: 238, album: "the-fame", reproductions: 3200000000 },
      { id: "3", songName: "Paparazzi", artistName: "Lady Gaga", mp3: "", image: LadyGagaTheFameAlbumImg, duration: 208, album: "the-fame", reproductions: 1400000000 },
      { id: "4", songName: "Born This Way", artistName: "Lady Gaga", mp3: "", image: LadyGagaBornThisWayAlbumImg, duration: 252, album: "born-this-way", reproductions: 1700000000 },
      { id: "5", songName: "Judas", artistName: "Lady Gaga", mp3: "", image: LadyGagaBornThisWayAlbumImg, duration: 249, album: "born-this-way", reproductions: 950000000 },
      { id: "6", songName: "The Edge of Glory", artistName: "Lady Gaga", mp3: "", image: LadyGagaBornThisWayAlbumImg, duration: 320, album: "born-this-way", reproductions: 1100000000 },
      { id: "7", songName: "Stupid Love", artistName: "Lady Gaga", mp3: "", image: LadyGagaChromaticaAlbumImg, duration: 193, album: "chromatica", reproductions: 800000000 },
      { id: "8", songName: "Rain On Me", artistName: "Lady Gaga", mp3: "", image: LadyGagaChromaticaAlbumImg, duration: 182, album: "chromatica", reproductions: 1500000000 },
      { id: "9", songName: "911", artistName: "Lady Gaga", mp3: "", image: LadyGagaChromaticaAlbumImg, duration: 173, album: "chromatica", reproductions: 500000000 },
      { id: "10", songName: "Replay", artistName: "Lady Gaga", mp3: "", image: LadyGagaChromaticaAlbumImg, duration: 187, album: "chromatica", reproductions: 420000000 },
    ],
  }
]

export const artistDinamicScreenData: ArtistDinamicScreenDataType[] =
  artistDinamicScreenBase.map(item => ({
    ...item,
    songs: item.songs.map(song => ({
      ...song,
      color: getSongColorByArtist(song.artistName, song.album || "")
    }))
  }));