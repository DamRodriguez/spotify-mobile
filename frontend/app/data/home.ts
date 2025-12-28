import { BasicHorizontalListData } from "@/components/other/BasicHorizontalList";
import { HorizontalListTitleAndTextData } from "@/components/other/HorizontalListTitleAndText";
import likesImg from "@/assets/images/home/recent-music/likes.png"
import { HomeListSection } from "@/types/homeListSection";
import { ImageSourcePropType } from "react-native";
import { ListDinamicPageDataType } from "@/app/(tabs)/home/listDinamicPage/[type]/[id]";

export const recentMusicData = [
  {
    id: 1,
    image: likesImg,
    text: "Tus me gusta"
  },
  {
    id: 2,
    image: "",
    text: "Prueba2"
  },
  {
    id: 3,
    image: "",
    text: "Prueba3"
  },
  {
    id: 4,
    image: "",
    text: "Prueba4"
  },
  {
    id: 5,
    image: "",
    text: "Prueba5"
  },
  {
    id: 6,
    image: "",
    text: "Prueba6"
  }
]

export const yourPlaylistsItems: HorizontalListTitleAndTextData[] = [
  {
    sectionType: "playlist",
    id: 1,
    image: "",
    title: "Depeche Mode",
    subtitle: "username"
  },
  {
    sectionType: "playlist",
    id: 2,
    image: "",
    title: "The Cure",
    subtitle: "username"
  },
  {
    sectionType: "playlist",
    id: 3,
    image: "",
    title: "Three Days Grace",
    subtitle: "username"
  },
  {
    sectionType: "playlist",
    id: 4,
    image: "",
    title: "Crystal Castles",
    subtitle: "username"
  },
  {
    sectionType: "playlist",
    id: 5,
    image: "",
    title: "HIM",
    subtitle: "username"
  }
]

export const backToYourMusicItems: BasicHorizontalListData[] = [
  {
    sectionType: "back-to-your-music",
    id: 1,
    image: "",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt tempore, numquam eligendi dolorum repellendus cupiditate rerum ad id exercitationem nisi quae blanditiis non dicta illo dolores facilis? Sequi, pariatur in!",
  },
  {
    sectionType: "back-to-your-music",
    id: 2,
    image: "",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt tempore, numquam eligendi dolorum repellendus cupiditate rerum ad id exercitationem nisi quae blanditiis non dicta illo dolores facilis? Sequi, pariatur in!",
  },
  {
    sectionType: "back-to-your-music",
    id: 3,
    image: "",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt tempore, numquam eligendi dolorum repellendus cupiditate rerum ad id exercitationem nisi quae blanditiis non dicta illo dolores facilis? Sequi, pariatur in!",
  },
  {
    sectionType: "back-to-your-music",
    id: 4,
    image: "",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt tempore, numquam eligendi dolorum repellendus cupiditate rerum ad id exercitationem nisi quae blanditiis non dicta illo dolores facilis? Sequi, pariatur in!",
  },
  {
    sectionType: "back-to-your-music",
    id: 5,
    image: "",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt tempore, numquam eligendi dolorum repellendus cupiditate rerum ad id exercitationem nisi quae blanditiis non dicta illo dolores facilis? Sequi, pariatur in!",
  }
]

export const dailyReleasesItems: BasicHorizontalListData[] = [
  {
    sectionType: "daily-releases",
    id: 1,
    image: "",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt tempore, numquam eligendi dolorum repellendus cupiditate rerum ad id exercitationem nisi quae blanditiis non dicta illo dolores facilis? Sequi, pariatur in!",
  },
  {
    sectionType: "daily-releases",
    id: 2,
    image: "",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt tempore, numquam eligendi dolorum repellendus cupiditate rerum ad id exercitationem nisi quae blanditiis non dicta illo dolores facilis? Sequi, pariatur in!",
  },
  {
    sectionType: "daily-releases",
    id: 3,
    image: "",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt tempore, numquam eligendi dolorum repellendus cupiditate rerum ad id exercitationem nisi quae blanditiis non dicta illo dolores facilis? Sequi, pariatur in!",
  },
  {
    sectionType: "daily-releases",
    id: 4,
    image: "",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt tempore, numquam eligendi dolorum repellendus cupiditate rerum ad id exercitationem nisi quae blanditiis non dicta illo dolores facilis? Sequi, pariatur in!",
  },
  {
    sectionType: "daily-releases",
    id: 5,
    image: "",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt tempore, numquam eligendi dolorum repellendus cupiditate rerum ad id exercitationem nisi quae blanditiis non dicta illo dolores facilis? Sequi, pariatur in!",
  }
]

export const listDinamicPageData: ListDinamicPageDataType[] = [
  {
    sectionType: "playlist",
    id: "1",
    frontImage: "",
    title: "Depeche Mode",
    songsDuration: 40,
    songs: [
      { id: "1", title: "Enjoy the Silence", mp3: "", image: "" },
      { id: "2", title: "Personal Jesus", mp3: "", image: "" },
      { id: "3", title: "Policy of Truth", mp3: "", image: "" },
      { id: "4", title: "Never Let Me Down Again", mp3: "", image: "" },
      { id: "5", title: "Strangelove", mp3: "", image: "" },
      { id: "6", title: "People Are People", mp3: "", image: "" },
      { id: "7", title: "Master and Servant", mp3: "", image: "" },
      { id: "8", title: "Everything Counts", mp3: "", image: "" },
      { id: "9", title: "Just Can't Get Enough", mp3: "", image: "" },
      { id: "10", title: "Blasphemous Rumours", mp3: "", image: "" },
    ],
  },
  {
    sectionType: "playlist",
    id: "2",
    frontImage: "",
    title: "The Cure",
    songsDuration: 32,
    songs: [
      { id: "1", title: "Just Like Heaven", mp3: "", image: "" },
      { id: "2", title: "Boys Don't Cry", mp3: "", image: "" },
      { id: "3", title: "Friday I'm in Love", mp3: "", image: "" },
      { id: "4", title: "Lovesong", mp3: "", image: "" },
      { id: "5", title: "Pictures of You", mp3: "", image: "" },
      { id: "6", title: "Close to Me", mp3: "", image: "" },
      { id: "7", title: "In Between Days", mp3: "", image: "" },
      { id: "8", title: "A Forest", mp3: "", image: "" },
      { id: "9", title: "The Lovecats", mp3: "", image: "" },
      { id: "10", title: "Lullaby", mp3: "", image: "" },
    ],
  },
  {
    sectionType: "playlist",
    id: "3",
    frontImage: "",
    title: "Three Days Grace",
    songsDuration: 55,
    songs: [
      { id: "1", title: "Animal I Have Become", mp3: "", image: "" },
      { id: "2", title: "Never Too Late", mp3: "", image: "" },
      { id: "3", title: "Pain", mp3: "", image: "" },
      { id: "4", title: "Riot", mp3: "", image: "" },
      { id: "5", title: "I Hate Everything About You", mp3: "", image: "" },
      { id: "6", title: "Break", mp3: "", image: "" },
      { id: "7", title: "The Good Life", mp3: "", image: "" },
      { id: "8", title: "World So Cold", mp3: "", image: "" },
      { id: "9", title: "Painkiller", mp3: "", image: "" },
      { id: "10", title: "Just Like You", mp3: "", image: "" },
    ],
  },
  {
    sectionType: "playlist",
    id: "4",
    frontImage: "",
    title: "Crystal Castles",
    songsDuration: 60,
    songs: [
      { id: "1", title: "Crimewave", mp3: "", image: "" },
      { id: "2", title: "Not In Love", mp3: "", image: "" },
      { id: "3", title: "Celestica", mp3: "", image: "" },
      { id: "4", title: "Baptism", mp3: "", image: "" },
      { id: "5", title: "Vanished", mp3: "", image: "" },
      { id: "6", title: "Alice Practice", mp3: "", image: "" },
      { id: "7", title: "Untrust Us", mp3: "", image: "" },
      { id: "8", title: "Suffocation", mp3: "", image: "" },
      { id: "9", title: "Plague", mp3: "", image: "" },
      { id: "10", title: "Doe Deer", mp3: "", image: "" },
    ],
  },
  {
    sectionType: "playlist",
    id: "5",
    frontImage: "",
    title: "HIM",
    songsDuration: 29,
    songs: [
      { id: "1", title: "Join Me in Death", mp3: "", image: "" },
      { id: "2", title: "Wings of a Butterfly", mp3: "", image: "" },
      { id: "3", title: "The Funeral of Hearts", mp3: "", image: "" },
      { id: "4", title: "Buried Alive by Love", mp3: "", image: "" },
      { id: "5", title: "Right Here in My Arms", mp3: "", image: "" },
      { id: "6", title: "Killing Loneliness", mp3: "", image: "" },
      { id: "7", title: "Poison Girl", mp3: "", image: "" },
      { id: "8", title: "Gone With the Sin", mp3: "", image: "" },
      { id: "9", title: "Your Sweet Six Six Six", mp3: "", image: "" },
      { id: "10", title: "Heartkiller", mp3: "", image: "" },
    ],
  },
];


