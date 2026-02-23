import { ListDinamicScreenDataType } from "@/app/(app)/(player-group)/(tabs)/home/list-dinamic-screen/[type]/[id]";
import DepecheModeViolatorAlbumImg from "@/assets/images/albums/depeche-mode/violator.png"
import DepecheModeMusicForTheMassesAlbumImg from "@/assets/images/albums/depeche-mode/music-for-the-masses.png"
import DepecheModeSomeGreatRewardAlbumImg from "@/assets/images/albums/depeche-mode/some-great-reward.png"
import DepecheModeConstructionTimeAgainAlbumImg from "@/assets/images/albums/depeche-mode/construction-time-again.png"
import DepecheModeSpeakSpellAlbumImg from "@/assets/images/albums/depeche-mode/speak-spell.png"
import TheCureKissMeAlbumImg from "@/assets/images/albums/the-cure/kiss-me.png"
import TheCureBoysDontCryAlbumImg from "@/assets/images/albums/the-cure/boys-dont-cry.png"
import TheCureFridayImInLoveAlbumImg from "@/assets/images/albums/the-cure/friday-im-in-love.png"
import TheCureDesintegrationAlbumImg from "@/assets/images/albums/the-cure/desintegration.png"
import TheCureTheHeadOnTheDoorAlbumImg from "@/assets/images/albums/the-cure/the-head-on-the-door.png"
import TheCureSeventeenSecondsAlbumImg from "@/assets/images/albums/the-cure/seventeen-seconds.png"
import TheCureJapaneseWhispersAlbumImg from "@/assets/images/albums/the-cure/japanese-whispers.png"
import ThreeDaysGraceOneXAlbumImg from "@/assets/images/albums/three-days-grace/one-x.png"
import CrystalCastlesAlbumImg from "@/assets/images/albums/crystal-castles/crystal-castles.png"
import HimRazorbladeRomanceAlbumImg from "@/assets/images/albums/him/razorblade-romance.png"
import DepecheModeVideoImage from "@/assets/images/other/depeche-mode-temporal.png"
import TheCureVideoImage from "@/assets/images/artists/the-cure.png"
import enjoyTheSilenceMp3 from "@/assets/audio/depeche-mode/violator/enjoy-the-silence.mp3"
import personalJesusMp3 from "@/assets/audio/depeche-mode/violator/personal-jesus.mp3"
import neverLetMeDownAgainMp3 from "@/assets/audio/depeche-mode/music-for-the-masses/never-let-me-down-again.mp3"
import justLikeHeavenMp3 from "@/assets/audio/the-cure/kiss-me/just-like-heaven.mp3"

export const playlists: ListDinamicScreenDataType[] = [
  {
    sectionType: "playlist",
    id: "1",
    frontImage: "",
    title: "Depeche Mode",
    songsDuration: 40,
    headerColor: "#446874",
    videoImage: DepecheModeVideoImage,
    songs: [
      { id: "1", artistId: "16", songName: "Enjoy the Silence", artistName: "Depeche Mode", mp3: enjoyTheSilenceMp3, image: DepecheModeViolatorAlbumImg, album: "violator" },
      { id: "2", artistId: "16", songName: "Personal Jesus", artistName: "Depeche Mode", mp3: personalJesusMp3, image: DepecheModeViolatorAlbumImg, album: "violator" },
      { id: "3", artistId: "16", songName: "Policy of Truth", artistName: "Depeche Mode", mp3: "", image: DepecheModeViolatorAlbumImg, album: "violator" },

      { id: "4", artistId: "16", songName: "Never Let Me Down Again", artistName: "Depeche Mode", mp3: neverLetMeDownAgainMp3, image: DepecheModeMusicForTheMassesAlbumImg, album: "music-for-the-masses" },
      { id: "5", artistId: "16", songName: "Strangelove", artistName: "Depeche Mode", mp3: "", image: DepecheModeMusicForTheMassesAlbumImg, album: "music-for-the-masses" },

      { id: "6", artistId: "16", songName: "People Are People", artistName: "Depeche Mode", mp3: "", image: DepecheModeSomeGreatRewardAlbumImg, album: "some-great-reward" },
      { id: "7", artistId: "16", songName: "Master and Servant", artistName: "Depeche Mode", mp3: "", image: DepecheModeSomeGreatRewardAlbumImg, album: "some-great-reward" },

      { id: "8", artistId: "16", songName: "Everything Counts", artistName: "Depeche Mode", mp3: "", image: DepecheModeConstructionTimeAgainAlbumImg, album: "construction-time-again" },

      { id: "9", artistId: "16", songName: "Just Can't Get Enough", artistName: "Depeche Mode", mp3: "", image: DepecheModeSpeakSpellAlbumImg, album: "speak-spell" },

      { id: "10", artistId: "16", songName: "Blasphemous Rumours", artistName: "Depeche Mode", mp3: "", image: DepecheModeSomeGreatRewardAlbumImg, album: "some-great-reward" },
    ]
  },
  {
    sectionType: "playlist",
    id: "2",
    frontImage: "",
    title: "The Cure",
    songsDuration: 32,
    headerColor: "#863a3a",
    videoImage: TheCureVideoImage,
    songs: [
      { id: "1", artistId: "18", songName: "Just Like Heaven", artistName: "The Cure", mp3: justLikeHeavenMp3, image: TheCureKissMeAlbumImg, album: "kiss-me-kiss-me-kiss-me" },

      { id: "2", artistId: "18", songName: "Boys Don't Cry", artistName: "The Cure", mp3: "", image: TheCureBoysDontCryAlbumImg, album: "boys-dont-cry" },

      { id: "3", artistId: "18", songName: "Friday I'm in Love", artistName: "The Cure", mp3: "", image: TheCureFridayImInLoveAlbumImg, album: "wish" },

      { id: "4", artistId: "18", songName: "Lovesong", artistName: "The Cure", mp3: "", image: TheCureDesintegrationAlbumImg, album: "disintegration" },
      { id: "5", artistId: "18", songName: "Pictures of You", artistName: "The Cure", mp3: "", image: TheCureDesintegrationAlbumImg, album: "disintegration" },

      { id: "6", artistId: "18", songName: "Close to Me", artistName: "The Cure", mp3: "", image: TheCureTheHeadOnTheDoorAlbumImg, album: "the-head-on-the-door" },
      { id: "7", artistId: "18", songName: "In Between Days", artistName: "The Cure", mp3: "", image: TheCureTheHeadOnTheDoorAlbumImg, album: "the-head-on-the-door" },

      { id: "8", artistId: "18", songName: "A Forest", artistName: "The Cure", mp3: "", image: TheCureSeventeenSecondsAlbumImg, album: "seventeen-seconds" },

      { id: "9", artistId: "18", songName: "The Lovecats", artistName: "The Cure", mp3: "", image: TheCureJapaneseWhispersAlbumImg, album: "japanese-whispers" },

      { id: "10", artistId: "18", songName: "Lullaby", artistName: "The Cure", mp3: "", image: TheCureDesintegrationAlbumImg, album: "disintegration" },
    ]
  },
  {
    sectionType: "playlist",
    id: "3",
    frontImage: "",
    title: "Three Days Grace",
    songsDuration: 55,
    videoImage: "",
    songs: [
      { id: "1", artistId: "19", songName: "Animal I Have Become", artistName: "Three Days Grace", mp3: "", image: ThreeDaysGraceOneXAlbumImg, album: "one-x" },
      { id: "2", artistId: "19", songName: "Never Too Late", artistName: "Three Days Grace", mp3: "", image: "", album: "one-x" },
      { id: "3", artistId: "19", songName: "Pain", artistName: "Three Days Grace", mp3: "", image: "", album: "one-x" },
      { id: "4", artistId: "19", songName: "Riot", artistName: "Three Days Grace", mp3: "", image: "", album: "one-x" },
      { id: "5", artistId: "19", songName: "I Hate Everything About You", artistName: "Three Days Grace", mp3: "", image: "", album: "one-x" },
      { id: "6", artistId: "19", songName: "Break", artistName: "Three Days Grace", mp3: "", image: "", album: "one-x" },
      { id: "7", artistId: "19", songName: "The Good Life", artistName: "Three Days Grace", mp3: "", image: "", album: "one-x" },
      { id: "8", artistId: "19", songName: "World So Cold", artistName: "Three Days Grace", mp3: "", image: "", album: "one-x" },
      { id: "9", artistId: "19", songName: "Painkiller", artistName: "Three Days Grace", mp3: "", image: "", album: "one-x" },
      { id: "10", artistId: "19", songName: "Just Like You", artistName: "Three Days Grace", mp3: "", image: "", album: "one-x" },
    ]
  },
  {
    sectionType: "playlist",
    id: "4",
    frontImage: "",
    title: "Crystal Castles",
    songsDuration: 60,
    videoImage: "",
    songs: [
      { id: "1", artistId: "20", songName: "Crimewave", artistName: "Crystal Castles", mp3: "", image: CrystalCastlesAlbumImg, album: "crystal-castles" },
      { id: "2", artistId: "20", songName: "Not In Love", artistName: "Crystal Castles", mp3: "", image: "", album: "crystal-castles-ii" },
      { id: "3", artistId: "20", songName: "Celestica", artistName: "Crystal Castles", mp3: "", image: "", album: "crystal-castles-ii" },
      { id: "4", artistId: "20", songName: "Baptism", artistName: "Crystal Castles", mp3: "", image: "", album: "crystal-castles-ii" },
      { id: "5", artistId: "20", songName: "Vanished", artistName: "Crystal Castles", mp3: "", image: "", album: "crystal-castles" },
      { id: "6", artistId: "20", songName: "Alice Practice", artistName: "Crystal Castles", mp3: "", image: "", album: "crystal-castles" },
      { id: "7", artistId: "20", songName: "Untrust Us", artistName: "Crystal Castles", mp3: "", image: "", album: "crystal-castles" },
      { id: "8", artistId: "20", songName: "Suffocation", artistName: "Crystal Castles", mp3: "", image: "", album: "crystal-castles-ii" },
      { id: "9", artistId: "20", songName: "Plague", artistName: "Crystal Castles", mp3: "", image: "", album: "iii" },
      { id: "10", artistId: "20", songName: "Doe Deer", artistName: "Crystal Castles", mp3: "", image: "", album: "crystal-castles-ii" },
    ],
  },
  {
    sectionType: "playlist",
    id: "5",
    frontImage: "",
    title: "HIM",
    songsDuration: 29,
    videoImage: "",
    songs: [
      { id: "1", artistId: "21", songName: "Join Me in Death", artistName: "HIM", mp3: "", image: "", album: "razorblade-romance" },
      { id: "2", artistId: "21", songName: "Wings of a Butterfly", artistName: "HIM", mp3: "", image: "", album: "dark-light" },
      { id: "3", artistId: "21", songName: "The Funeral of Hearts", artistName: "HIM", mp3: "", image: "", album: "love-metal" },
      { id: "4", artistId: "21", songName: "Buried Alive by Love", artistName: "HIM", mp3: "", image: "", album: "love-metal" },
      { id: "5", artistId: "21", songName: "Right Here in My Arms", artistName: "HIM", mp3: "", image: "", album: "razorblade-romance" },
      { id: "6", artistId: "21", songName: "Killing Loneliness", artistName: "HIM", mp3: "", image: "", album: "dark-light" },
      { id: "7", artistId: "21", songName: "Poison Girl", artistName: "HIM", mp3: "", image: HimRazorbladeRomanceAlbumImg, album: "razorblade-romance" },
      { id: "8", artistId: "21", songName: "Gone With the Sin", artistName: "HIM", mp3: "", image: "", album: "razorblade-romance" },
      { id: "9", artistId: "21", songName: "Your Sweet Six Six Six", artistName: "HIM", mp3: "", image: "", album: "greatest-lovesongs-vol-666" },
      { id: "10", artistId: "21", songName: "Heartkiller", artistName: "HIM", mp3: "", image: "", album: "screamworks" },
    ],
  },
]