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
import { getListImages } from "@/utils/getPlaylistImages";
import CrystalCastlesAlbumImg from "@/assets/images/albums/crystal-castles/crystal-castles.png"
import HimRazorbladeRomanceAlbumImg from "@/assets/images/albums/him/razorblade-romance.png"
import DepecheModeVideoImage from "@/assets/images/other/depeche-mode-temporal.png"
import nuevoLanzamientoImg from "@/assets/images/daily-releases/nuevo-lanzamiento.png"
import discImage from "@/assets/images/other/disc.png"
import TheCureVideoImage from "@/assets/images/artists/the-cure.png"
import { getSongColorByArtist } from "@/utils/getAlbumColors";

const listDinamicScreenItems: ListDinamicScreenDataType[] = [
  {
    sectionType: "playlist",
    id: "1",
    frontImage: "",
    title: "Depeche Mode",
    songsDuration: 40,
    headerColor: "#446874",
    videoImage: DepecheModeVideoImage,
    songs: [
      { id: "1", songName: "Enjoy the Silence", artistName: "Depeche Mode", mp3: "", image: DepecheModeViolatorAlbumImg, duration: 130, album: "violator" },
      { id: "2", songName: "Personal Jesus", artistName: "Depeche Mode", mp3: "", image: DepecheModeViolatorAlbumImg, duration: 130, album: "violator" },
      { id: "3", songName: "Policy of Truth", artistName: "Depeche Mode", mp3: "", image: DepecheModeViolatorAlbumImg, duration: 130, album: "violator" },

      { id: "4", songName: "Never Let Me Down Again", artistName: "Depeche Mode", mp3: "", image: DepecheModeMusicForTheMassesAlbumImg, duration: 130, album: "music-for-the-masses" },
      { id: "5", songName: "Strangelove", artistName: "Depeche Mode", mp3: "", image: DepecheModeMusicForTheMassesAlbumImg, duration: 130, album: "music-for-the-masses" },

      { id: "6", songName: "People Are People", artistName: "Depeche Mode", mp3: "", image: DepecheModeSomeGreatRewardAlbumImg, duration: 130, album: "some-great-reward" },
      { id: "7", songName: "Master and Servant", artistName: "Depeche Mode", mp3: "", image: DepecheModeSomeGreatRewardAlbumImg, duration: 130, album: "some-great-reward" },

      { id: "8", songName: "Everything Counts", artistName: "Depeche Mode", mp3: "", image: DepecheModeConstructionTimeAgainAlbumImg, duration: 130, album: "construction-time-again" },

      { id: "9", songName: "Just Can't Get Enough", artistName: "Depeche Mode", mp3: "", image: DepecheModeSpeakSpellAlbumImg, duration: 130, album: "speak-spell" },

      { id: "10", songName: "Blasphemous Rumours", artistName: "Depeche Mode", mp3: "", image: DepecheModeSomeGreatRewardAlbumImg, duration: 130, album: "some-great-reward" },
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
      { id: "1", songName: "Just Like Heaven", artistName: "The Cure", mp3: "", image: TheCureKissMeAlbumImg, duration: 130, album: "kiss-me-kiss-me-kiss-me" },

      { id: "2", songName: "Boys Don't Cry", artistName: "The Cure", mp3: "", image: TheCureBoysDontCryAlbumImg, duration: 130, album: "boys-dont-cry" },

      { id: "3", songName: "Friday I'm in Love", artistName: "The Cure", mp3: "", image: TheCureFridayImInLoveAlbumImg, duration: 130, album: "wish" },

      { id: "4", songName: "Lovesong", artistName: "The Cure", mp3: "", image: TheCureDesintegrationAlbumImg, duration: 130, album: "disintegration" },
      { id: "5", songName: "Pictures of You", artistName: "The Cure", mp3: "", image: TheCureDesintegrationAlbumImg, duration: 130, album: "disintegration" },

      { id: "6", songName: "Close to Me", artistName: "The Cure", mp3: "", image: TheCureTheHeadOnTheDoorAlbumImg, duration: 130, album: "the-head-on-the-door" },
      { id: "7", songName: "In Between Days", artistName: "The Cure", mp3: "", image: TheCureTheHeadOnTheDoorAlbumImg, duration: 130, album: "the-head-on-the-door" },

      { id: "8", songName: "A Forest", artistName: "The Cure", mp3: "", image: TheCureSeventeenSecondsAlbumImg, duration: 130, album: "seventeen-seconds" },

      { id: "9", songName: "The Lovecats", artistName: "The Cure", mp3: "", image: TheCureJapaneseWhispersAlbumImg, duration: 130, album: "japanese-whispers" },

      { id: "10", songName: "Lullaby", artistName: "The Cure", mp3: "", image: TheCureDesintegrationAlbumImg, duration: 130, album: "disintegration" },
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
      { id: "1", songName: "Animal I Have Become", artistName: "Three Days Grace", mp3: "", image: ThreeDaysGraceOneXAlbumImg, duration: 130, album: "one-x" },
      { id: "2", songName: "Never Too Late", artistName: "Three Days Grace", mp3: "", image: "", duration: 130, album: "one-x" },
      { id: "3", songName: "Pain", artistName: "Three Days Grace", mp3: "", image: "", duration: 130, album: "one-x" },
      { id: "4", songName: "Riot", artistName: "Three Days Grace", mp3: "", image: "", duration: 130, album: "one-x" },
      { id: "5", songName: "I Hate Everything About You", artistName: "Three Days Grace", mp3: "", image: "", duration: 130, album: "one-x" },
      { id: "6", songName: "Break", artistName: "Three Days Grace", mp3: "", image: "", duration: 130, album: "one-x" },
      { id: "7", songName: "The Good Life", artistName: "Three Days Grace", mp3: "", image: "", duration: 130, album: "one-x" },
      { id: "8", songName: "World So Cold", artistName: "Three Days Grace", mp3: "", image: "", duration: 130, album: "one-x" },
      { id: "9", songName: "Painkiller", artistName: "Three Days Grace", mp3: "", image: "", duration: 130, album: "one-x" },
      { id: "10", songName: "Just Like You", artistName: "Three Days Grace", mp3: "", image: "", duration: 130, album: "one-x" },
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
      { id: "1", songName: "Crimewave", artistName: "Crystal Castles", mp3: "", image: CrystalCastlesAlbumImg, duration: 130, album: "crystal-castles" },
      { id: "2", songName: "Not In Love", artistName: "Crystal Castles", mp3: "", image: "", duration: 130, album: "crystal-castles-ii" },
      { id: "3", songName: "Celestica", artistName: "Crystal Castles", mp3: "", image: "", duration: 130, album: "crystal-castles-ii" },
      { id: "4", songName: "Baptism", artistName: "Crystal Castles", mp3: "", image: "", duration: 130, album: "crystal-castles-ii" },
      { id: "5", songName: "Vanished", artistName: "Crystal Castles", mp3: "", image: "", duration: 130, album: "crystal-castles" },
      { id: "6", songName: "Alice Practice", artistName: "Crystal Castles", mp3: "", image: "", duration: 130, album: "crystal-castles" },
      { id: "7", songName: "Untrust Us", artistName: "Crystal Castles", mp3: "", image: "", duration: 130, album: "crystal-castles" },
      { id: "8", songName: "Suffocation", artistName: "Crystal Castles", mp3: "", image: "", duration: 130, album: "crystal-castles-ii" },
      { id: "9", songName: "Plague", artistName: "Crystal Castles", mp3: "", image: "", duration: 130, album: "iii" },
      { id: "10", songName: "Doe Deer", artistName: "Crystal Castles", mp3: "", image: "", duration: 130, album: "crystal-castles-ii" },
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
      { id: "1", songName: "Join Me in Death", artistName: "HIM", mp3: "", image: "", duration: 130, album: "razorblade-romance" },
      { id: "2", songName: "Wings of a Butterfly", artistName: "HIM", mp3: "", image: "", duration: 130, album: "dark-light" },
      { id: "3", songName: "The Funeral of Hearts", artistName: "HIM", mp3: "", image: "", duration: 130, album: "love-metal" },
      { id: "4", songName: "Buried Alive by Love", artistName: "HIM", mp3: "", image: "", duration: 130, album: "love-metal" },
      { id: "5", songName: "Right Here in My Arms", artistName: "HIM", mp3: "", image: "", duration: 130, album: "razorblade-romance" },
      { id: "6", songName: "Killing Loneliness", artistName: "HIM", mp3: "", image: "", duration: 130, album: "dark-light" },
      { id: "7", songName: "Poison Girl", artistName: "HIM", mp3: "", image: HimRazorbladeRomanceAlbumImg, duration: 130, album: "razorblade-romance" },
      { id: "8", songName: "Gone With the Sin", artistName: "HIM", mp3: "", image: "", duration: 130, album: "razorblade-romance" },
      { id: "9", songName: "Your Sweet Six Six Six", artistName: "HIM", mp3: "", image: "", duration: 130, album: "greatest-lovesongs-vol-666" },
      { id: "10", songName: "Heartkiller", artistName: "HIM", mp3: "", image: "", duration: 130, album: "screamworks" },
    ],
  },
  {
    sectionType: "daily-releases",
    id: "6",
    frontImage: nuevoLanzamientoImg,
    title: "Nuevo lanzamiento del día: sonidos frescos que mezclan ritmos actuales con una producción moderna. Ideal para descubrir algo distinto en pocos minutos.",
    abbreviatedTitle: "Sonidos frescos",
    songsDuration: 40,
    videoImage: nuevoLanzamientoImg,
    songs: [
      { id: "1", songName: "Blinding Lights", artistName: "The Weeknd", mp3: "", image: "", duration: 130, album: "after-hours" },
      { id: "2", songName: "Do I Wanna Know?", artistName: "Arctic Monkeys", mp3: "", image: "", duration: 130, album: "am" },
      { id: "3", songName: "Levitating", artistName: "Dua Lipa", mp3: "", image: "", duration: 130, album: "future-nostalgia" },
      { id: "4", songName: "Take On Me", artistName: "a-ha", mp3: "", image: "", duration: 130, album: "hunting-high-and-low" },
      { id: "5", songName: "Smells Like Teen Spirit", artistName: "Nirvana", mp3: "", image: "", duration: 130, album: "nevermind" },
      { id: "6", songName: "Billie Jean", artistName: "Michael Jackson", mp3: "", image: "", duration: 130, album: "thriller" },
      { id: "7", songName: "Instant Crush", artistName: "Daft Punk", mp3: "", image: "", duration: 130, album: "random-access-memories" },
      { id: "8", songName: "Somebody Told Me", artistName: "The Killers", mp3: "", image: "", duration: 130, album: "hot-fuss" },
      { id: "9", songName: "Lose Yourself", artistName: "Eminem", mp3: "", image: "", duration: 130, album: "8-mile" },
      { id: "10", songName: "Fix You", artistName: "Coldplay", mp3: "", image: "", duration: 130, album: "x-y" },
    ],
  },
  {
    sectionType: "daily-releases",
    id: "7",
    frontImage: "",
    title: "Estreno reciente que ya empieza a sonar fuerte. Una propuesta dinámica, perfecta para sumar a tu playlist diaria.",
    abbreviatedTitle: "Propuesta dinámica",
    songsDuration: 38,
    videoImage: "",
    songs: [
      { id: "1", songName: "As It Was", artistName: "Harry Styles", mp3: "", image: "", duration: 130, album: "harrys-house" },
      { id: "2", songName: "Bad Habits", artistName: "Ed Sheeran", mp3: "", image: "", duration: 130, album: "equals" },
      { id: "3", songName: "Heat Waves", artistName: "Glass Animals", mp3: "", image: "", duration: 130, album: "dreamland" },
      { id: "4", songName: "Stay", artistName: "The Kid LAROI, Justin Bieber", mp3: "", image: "", duration: 130, album: "f-ck-love-3" },
      { id: "5", songName: "Save Your Tears", artistName: "The Weeknd", mp3: "", image: "", duration: 130, album: "after-hours" },
      { id: "6", songName: "Peaches", artistName: "Justin Bieber", mp3: "", image: "", duration: 130, album: "justice" },
      { id: "7", songName: "Dance Monkey", artistName: "Tones and I", mp3: "", image: "", duration: 130, album: "the-kids-are-coming" },
      { id: "8", songName: "Shivers", artistName: "Ed Sheeran", mp3: "", image: "", duration: 130, album: "equals" },
      { id: "9", songName: "Sunroof", artistName: "Nicky Youre", mp3: "", image: "", duration: 130, album: "sunroof" },
      { id: "10", songName: "Golden", artistName: "Harry Styles", mp3: "", image: "", duration: 130, album: "fine-line" },
    ],
  },
  {
    sectionType: "daily-releases",
    id: "8",
    frontImage: "",
    title: "Una novedad que combina energía y melodía, pensada para acompañarte durante el día con un estilo actual y envolvente.",
    abbreviatedTitle: "Energía y melodía",
    songsDuration: 42,
    videoImage: "",
    songs: [
      { id: "1", songName: "Midnight City", artistName: "M83", mp3: "", image: "", duration: 130, album: "hurry-up-were-dreaming" },
      { id: "2", songName: "Electric Feel", artistName: "MGMT", mp3: "", image: "", duration: 130, album: "oracular-spectacular" },
      { id: "3", songName: "Kids", artistName: "MGMT", mp3: "", image: "", duration: 130, album: "oracular-spectacular" },
      { id: "4", songName: "R U Mine?", artistName: "Arctic Monkeys", mp3: "", image: "", duration: 130, album: "am" },
      { id: "5", songName: "Take Me Out", artistName: "Franz Ferdinand", mp3: "", image: "", duration: 130, album: "franz-ferdinand" },
      { id: "6", songName: "Feel Good Inc.", artistName: "Gorillaz", mp3: "", image: "", duration: 130, album: "demon-days" },
      { id: "7", songName: "The Less I Know the Better", artistName: "Tame Impala", mp3: "", image: "", duration: 130, album: "currents" },
      { id: "8", songName: "Sweater Weather", artistName: "The Neighbourhood", mp3: "", image: "", duration: 130, album: "i-love-you" },
      { id: "9", songName: "Stolen Dance", artistName: "Milky Chance", mp3: "", image: "", duration: 130, album: "sadnecessary" },
      { id: "10", songName: "Lisztomania", artistName: "Phoenix", mp3: "", image: "", duration: 130, album: "wolfgang-amadeus-phoenix" },
    ],
  },
  {
    sectionType: "daily-releases",
    id: "9",
    frontImage: "",
    title: "Lanzamiento recién salido: ritmo pegadizo, producción cuidada y un sonido que destaca entre las novedades de hoy.",
    abbreviatedTitle: "Ritmo pegadizo",
    songsDuration: 36,
    videoImage: "",
    songs: [
      { id: "1", songName: "Dance The Night", artistName: "Dua Lipa", mp3: "", image: "", duration: 130, album: "barbie-the-album" },
      { id: "2", songName: "Flowers", artistName: "Miley Cyrus", mp3: "", image: "", duration: 130, album: "endless-summer-vacation" },
      { id: "3", songName: "Anti-Hero", artistName: "Taylor Swift", mp3: "", image: "", duration: 130, album: "midnights" },
      { id: "4", songName: "Unholy", artistName: "Sam Smith", mp3: "", image: "", duration: 130, album: "gloria" },
      { id: "5", songName: "Calm Down", artistName: "Rema", mp3: "", image: "", duration: 130, album: "rave-and-roses" },
      { id: "6", songName: "Killin' Me Good", artistName: "Jihyo", mp3: "", image: "", duration: 130, album: "zone" },
      { id: "7", songName: "Paint The Town Red", artistName: "Doja Cat", mp3: "", image: "", duration: 130, album: "scarlet" },
      { id: "8", songName: "Eyes Closed", artistName: "Imagine Dragons", mp3: "", image: "", duration: 130, album: "loom" },
      { id: "9", songName: "Cupid", artistName: "FIFTY FIFTY", mp3: "", image: "", duration: 130, album: "the-beginning-cupid" },
      { id: "10", songName: "Rush", artistName: "Troye Sivan", mp3: "", image: "", duration: 130, album: "something-to-give-each-other" },
    ],
  },
  {
    sectionType: "daily-releases",
    id: "10",
    frontImage: "",
    title: "Descubrí este estreno diario con una vibra moderna y fresca, ideal para quienes buscan algo nuevo sin perder identidad.",
    abbreviatedTitle: "Vibra moderna",
    songsDuration: 39,
    videoImage: "",
    songs: [
      { id: "1", songName: "Space Song", artistName: "Beach House", mp3: "", image: "", duration: 130, album: "depression-cherry" },
      { id: "2", songName: "Cherry Wine", artistName: "Hozier", mp3: "", image: "", duration: 130, album: "hozier" },
      { id: "3", songName: "Let It Happen", artistName: "Tame Impala", mp3: "", image: "", duration: 130, album: "currents" },
      { id: "4", songName: "Holocene", artistName: "Bon Iver", mp3: "", image: "", duration: 130, album: "bon-iver" },
      { id: "5", songName: "Youth", artistName: "Glass Animals", mp3: "", image: "", duration: 130, album: "how-to-be-a-human-being" },
      { id: "6", songName: "Cigarettes & Alcohol", artistName: "Oasis", mp3: "", image: "", duration: 130, album: "definitely-maybe" },
      { id: "7", songName: "Motion Picture Soundtrack", artistName: "Radiohead", mp3: "", image: "", duration: 130, album: "kid-a" },
      { id: "8", songName: "Dreams", artistName: "Fleetwood Mac", mp3: "", image: "", duration: 130, album: "rumours" },
      { id: "9", songName: "Slow Dancing in a Burning Room", artistName: "John Mayer", mp3: "", image: "", duration: 130, album: "continuum" },
      { id: "10", songName: "Yellow", artistName: "Coldplay", mp3: "", image: "", duration: 130, album: "parachutes" },
    ],
  },
  {
    sectionType: "back-to-your-music",
    id: "11",
    frontImage: discImage,
    title: "Volvé a escuchar esos temas que no podés dejar atrás. Canciones que ya conocés y siempre suenan bien, sin importar el momento.",
    abbreviatedTitle: "Tus clásicos",
    songsDuration: 40,
    videoImage: "",
    songs: [
      { id: "1", songName: "Wonderwall", artistName: "Oasis", mp3: "", image: "", duration: 130, album: "whats-the-story-morning-glory" },
      { id: "2", songName: "Yellow", artistName: "Coldplay", mp3: "", image: "", duration: 130, album: "parachutes" },
      { id: "3", songName: "Creep", artistName: "Radiohead", mp3: "", image: "", duration: 130, album: "pablo-honey" },
      { id: "4", songName: "With or Without You", artistName: "U2", mp3: "", image: "", duration: 130, album: "the-joshua-tree" },
      { id: "5", songName: "Fix You", artistName: "Coldplay", mp3: "", image: "", duration: 130, album: "x-y" },
      { id: "6", songName: "Zombie", artistName: "The Cranberries", mp3: "", image: "", duration: 130, album: "no-need-to-argue" },
      { id: "7", songName: "High and Dry", artistName: "Radiohead", mp3: "", image: "", duration: 130, album: "the-bends" },
      { id: "8", songName: "Iris", artistName: "Goo Goo Dolls", mp3: "", image: "", duration: 130, album: "dizzy-up-the-girl" },
      { id: "9", songName: "Don't Look Back in Anger", artistName: "Oasis", mp3: "", image: "", duration: 130, album: "whats-the-story-morning-glory" },
      { id: "10", songName: "Everybody's Got to Learn Sometime", artistName: "The Korgis", mp3: "", image: "", duration: 130, album: "dumb-waiters" },
    ],
  },
  {
    sectionType: "back-to-your-music",
    id: "12",
    frontImage: discImage,
    title: "Tu música de siempre, esa que acompañó distintos momentos y que hoy vuelve a sonar como la primera vez.",
    abbreviatedTitle: "Tu música de siempre",
    songsDuration: 38,
    videoImage: "",
    songs: [
      { id: "1", songName: "Clocks", artistName: "Coldplay", mp3: "", image: "", duration: 130, album: "a-rush-of-blood-to-the-head" },
      { id: "2", songName: "Somebody That I Used to Know", artistName: "Gotye", mp3: "", image: "", duration: 130, album: "making-mirrors" },
      { id: "3", songName: "Chasing Cars", artistName: "Snow Patrol", mp3: "", image: "", duration: 130, album: "eyes-open" },
      { id: "4", songName: "Use Somebody", artistName: "Kings of Leon", mp3: "", image: "", duration: 130, album: "only-by-the-night" },
      { id: "5", songName: "The Scientist", artistName: "Coldplay", mp3: "", image: "", duration: 130, album: "a-rush-of-blood-to-the-head" },
      { id: "6", songName: "Viva La Vida", artistName: "Coldplay", mp3: "", image: "", duration: 130, album: "viva-la-vida" },
      { id: "7", songName: "Somewhere Only We Know", artistName: "Keane", mp3: "", image: "", duration: 130, album: "hopes-and-fears" },
      { id: "8", songName: "Boulevard of Broken Dreams", artistName: "Green Day", mp3: "", image: "", duration: 130, album: "american-idiot" },
      { id: "9", songName: "Fix You (Live)", artistName: "Coldplay", mp3: "", image: "", duration: 130, album: "x-y" },
      { id: "10", songName: "How to Save a Life", artistName: "The Fray", mp3: "", image: "", duration: 130, album: "how-to-save-a-life" },
    ],
  },
  {
    sectionType: "back-to-your-music",
    id: "13",
    frontImage: discImage,
    title: "Reviví tus favoritos y retomá esas canciones que marcaron etapas. Perfectas para escuchar sin pensarlo demasiado.",
    abbreviatedTitle: "Para volver",
    songsDuration: 42,
    videoImage: "",
    songs: [
      { id: "1", songName: "Mr. Brightside", artistName: "The Killers", mp3: "", image: "", duration: 130, album: "hot-fuss" },
      { id: "2", songName: "Seven Nation Army", artistName: "The White Stripes", mp3: "", image: "", duration: 130, album: "elephant" },
      { id: "3", songName: "Take Me Out", artistName: "Franz Ferdinand", mp3: "", image: "", duration: 130, album: "franz-ferdinand" },
      { id: "4", songName: "Do I Wanna Know?", artistName: "Arctic Monkeys", mp3: "", image: "", duration: 130, album: "am" },
      { id: "5", songName: "R U Mine?", artistName: "Arctic Monkeys", mp3: "", image: "", duration: 130, album: "am" },
      { id: "6", songName: "Feel Good Inc.", artistName: "Gorillaz", mp3: "", image: "", duration: 130, album: "demon-days" },
      { id: "7", songName: "Kids", artistName: "MGMT", mp3: "", image: "", duration: 130, album: "oracular-spectacular" },
      { id: "8", songName: "Electric Feel", artistName: "MGMT", mp3: "", image: "", duration: 130, album: "oracular-spectacular" },
      { id: "9", songName: "Lisztomania", artistName: "Phoenix", mp3: "", image: "", duration: 130, album: "wolfgang-amadeus-phoenix" },
      { id: "10", songName: "Stolen Dance", artistName: "Milky Chance", mp3: "", image: "", duration: 130, album: "sadnecessary" },
    ],
  },
  {
    sectionType: "back-to-your-music",
    id: "14",
    frontImage: discImage,
    title: "Un viaje directo a tu historial musical: temas que escuchaste, repetiste y siguen teniendo algo especial.",
    abbreviatedTitle: "Viaje musical",
    songsDuration: 36,
    videoImage: "",
    songs: [
      { id: "1", songName: "Counting Stars", artistName: "OneRepublic", mp3: "", image: "", duration: 130, album: "native" },
      { id: "2", songName: "Demons", artistName: "Imagine Dragons", mp3: "", image: "", duration: 130, album: "night-visions" },
      { id: "3", songName: "Radioactive", artistName: "Imagine Dragons", mp3: "", image: "", duration: 130, album: "night-visions" },
      { id: "4", songName: "Pompeii", artistName: "Bastille", mp3: "", image: "", duration: 130, album: "bad-blood" },
      { id: "5", songName: "Royals", artistName: "Lorde", mp3: "", image: "", duration: 130, album: "pure-heroine" },
      { id: "6", songName: "Take Me To Church", artistName: "Hozier", mp3: "", image: "", duration: 130, album: "hozier" },
      { id: "7", songName: "Budapest", artistName: "George Ezra", mp3: "", image: "", duration: 130, album: "wanted-on-voyage" },
      { id: "8", songName: "Ho Hey", artistName: "The Lumineers", mp3: "", image: "", duration: 130, album: "the-lumineers" },
      { id: "9", songName: "Riptide", artistName: "Vance Joy", mp3: "", image: "", duration: 130, album: "dream-your-life-away" },
      { id: "10", songName: "Home", artistName: "Edward Sharpe & The Magnetic Zeros", mp3: "", image: "", duration: 130, album: "up-from-below" },
    ],
  },
  {
    sectionType: "back-to-your-music",
    id: "15",
    frontImage: discImage,
    title: "Volvé a tu zona de confort musical con canciones que ya son parte de tu día a día.",
    abbreviatedTitle: "Zona de confort",
    songsDuration: 41,
    videoImage: "",
    songs: [
      { id: "1", songName: "Dreams", artistName: "Fleetwood Mac", mp3: "", image: "", duration: 130, album: "rumours" },
      { id: "2", songName: "Go Your Own Way", artistName: "Fleetwood Mac", mp3: "", image: "", duration: 130, album: "rumours" },
      { id: "3", songName: "Fast Car", artistName: "Tracy Chapman", mp3: "", image: "", duration: 130, album: "tracy-chapman" },
      { id: "4", songName: "Landslide", artistName: "Fleetwood Mac", mp3: "", image: "", duration: 130, album: "fleetwood-mac" },
      { id: "5", songName: "Africa", artistName: "Toto", mp3: "", image: "", duration: 130, album: "toto-iv" },
      { id: "6", songName: "Don't Stop Believin'", artistName: "Journey", mp3: "", image: "", duration: 130, album: "escape" },
      { id: "7", songName: "Take It Easy", artistName: "Eagles", mp3: "", image: "", duration: 130, album: "eagles" },
      { id: "8", songName: "Hotel California", artistName: "Eagles", mp3: "", image: "", duration: 130, album: "hotel-california" },
      { id: "9", songName: "Africa (Live)", artistName: "Toto", mp3: "", image: "", duration: 130, album: "toto-iv" },
      { id: "10", songName: "Everybody Wants to Rule the World", artistName: "Tears for Fears", mp3: "", image: "", duration: 130, album: "songs-from-the-big-chair" },
    ],
  },
];

export const listDinamicScreenData: ListDinamicScreenDataType[] =
  listDinamicScreenItems.map(item => ({
    ...item,
    frontImage: item.sectionType === "playlist" ? getListImages(item.title, listDinamicScreenItems) : item.frontImage,
    songs: item.songs.map(song => ({
      ...song,
      color: getSongColorByArtist(song.artistName, song.album || "")
    }))
  }));