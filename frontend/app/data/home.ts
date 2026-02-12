import likesImg from "@/assets/images/home/recent-music/likes.png"
import { getListImages } from "@/utils/getPlaylistImages";
import nuevoLanzamientoImg from "@/assets/images/daily-releases/nuevo-lanzamiento.png"
import propuestaDinamicaImg from "@/assets/images/daily-releases/propuesta-dinamica.png"
import energiaMelodiaImg from "@/assets/images/daily-releases/energia-melodia.png"
import DepecheModeViolatorAlbumImg from "@/assets/images/albums/depeche-mode/violator.png"
import ThisIsRammsteinImg from "@/assets/images/recent-music/this-is-rammstein.png"
import PlaceboImg from "@/assets/images/recent-music/placebo.png"
import TheCureDesintegrationAlbumImg from "@/assets/images/albums/the-cure/desintegration.png"
import ThreeDaysGraceOneXAlbumImg from "@/assets/images/albums/three-days-grace/one-x.png"
import { HorizontalPlaylistData } from "@/components/sections/home/horizontal-lists/YourPlaylistsSection";
import { HorizontalDailyReleasesListData } from "@/components/sections/home/horizontal-lists/DailyReleasesSection";
import { HorizontalBackToYourMusicListData } from "@/components/sections/home/horizontal-lists/BackToYourMusicSection";
import { HorizontalFavoriteArtistsListData } from "@/components/sections/home/horizontal-lists/YourFavoriteArtistsSection";
import LacunaCoilArtistImg from "@/assets/images/artists/lacuna-coil.png"
import DepecheModeArtistImg from "@/assets/images/artists/depeche-mode.png"
import BabasonicosArtistImg from "@/assets/images/artists/babasonicos.png"
import { listDinamicScreenData } from "./listDinamicScreen";

export const recentMusicData = [
  {
    id: 1,
    image: likesImg,
    text: "Tus me gusta"
  },
  {
    id: 2,
    image: DepecheModeViolatorAlbumImg,
    text: "Depeche Mode - Violator"
  },
  {
    id: 3,
    image: ThisIsRammsteinImg,
    text: "This is Rammstein"
  },
  {
    id: 4,
    image: PlaceboImg,
    text: "Placebo"
  },
  {
    id: 5,
    image: TheCureDesintegrationAlbumImg,
    text: "The Cure - Desintegration"
  },
  {
    id: 6,
    image: ThreeDaysGraceOneXAlbumImg,
    text: "Three Days Grace"
  }
]

export const yourPlaylistsItemsBase: HorizontalPlaylistData[] = [
  {
    id: "1",
    image: "",
    artistName: "Depeche Mode",
  },
  {
    id: "2",
    image: "",
    artistName: "The Cure",
  },
  {
    id: "3",
    image: "",
    artistName: "Three Days Grace",
  },
  {
    id: "4",
    image: "",
    artistName: "Crystal Castles",
  },
  {
    id: "5",
    image: "",
    artistName: "HIM",
  }
]

export const yourPlaylistsItems: HorizontalPlaylistData[] =
  yourPlaylistsItemsBase.map(item => ({
    ...item,
    image: getListImages(item.artistName, listDinamicScreenData),
  }));

export const dailyReleasesItems: HorizontalDailyReleasesListData[] = [
  {
    id: "1",
    image: nuevoLanzamientoImg,
    description: "Nuevo lanzamiento del día: sonidos frescos que mezclan ritmos actuales con una producción moderna. Ideal para descubrir algo distinto en pocos minutos.",
  },
  {
    id: "2",
    image: propuestaDinamicaImg,
    description: "Estreno reciente que ya empieza a sonar fuerte. Una propuesta dinámica, perfecta para sumar a tu playlist diaria.",
  },
  {
    id: "3",
    image: energiaMelodiaImg,
    description: "Una novedad que combina energía y melodía, pensada para acompañarte durante el día con un estilo actual y envolvente.",
  },
  {
    id: "4",
    image: "",
    description: "Lanzamiento recién salido: ritmo pegadizo, producción cuidada y un sonido que destaca entre las novedades de hoy.",
  },
  {
    id: "5",
    image: "",
    description: "Descubrí este estreno diario con una vibra moderna y fresca, ideal para quienes buscan algo nuevo sin perder identidad.",
  }
];

export const backToYourMusicItems: HorizontalBackToYourMusicListData[] = [
  {
    id: "1",
    image: "",
    description: "Volvé a escuchar esos temas que no podés dejar atrás. Canciones que ya conocés y siempre suenan bien, sin importar el momento.",
  },
  {
    id: "2",
    image: "",
    description: "Tu música de siempre, esa que acompañó distintos momentos y que hoy vuelve a sonar como la primera vez.",
  },
  {
    id: "3",
    image: "",
    description: "Reviví tus favoritos y retomá esas canciones que marcaron etapas. Perfectas para escuchar sin pensarlo demasiado.",
  },
  {
    id: "4",
    image: "",
    description: "Un viaje directo a tu historial musical: temas que escuchaste, repetiste y siguen teniendo algo especial.",
  },
  {
    id: "5",
    image: "",
    description: "Volvé a tu zona de confort musical con canciones que ya son parte de tu día a día.",
  },
];

export const favoriteArtistsItems: HorizontalFavoriteArtistsListData[] = [
  {
    id: "1",
    image: DepecheModeArtistImg,
    artistName: "Depeche Mode"
  },
  {
    id: "2",
    image: LacunaCoilArtistImg,
    artistName: "Lacuna Coil"
  },
  {
    id: "3",
    image: BabasonicosArtistImg,
    artistName: "Babasonicos"
  },
  {
    id: "4",
    image: "",
    artistName: "Rammstein"
  },
  {
    id: "5",
    image: "",
    artistName: "Lady Gaga"
  },
];

