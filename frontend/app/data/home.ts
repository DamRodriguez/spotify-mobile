import { BasicHorizontalListData } from "@/components/other/BasicHorizontalList";
import { HorizontalListTitleAndTextData } from "@/components/other/HorizontalListTitleAndText";
import likesImg from "@/assets/images/home/recent-music/likes.png"
import { listDinamicPageData } from "./listDinamicPage";
import { getListImages } from "@/utils/getPlaylistImages";
import nuevoLanzamientoImg from "@/assets/images/daily-releases/nuevo-lanzamiento.png"
import propuestaDinamicaImg from "@/assets/images/daily-releases/propuesta-dinamica.png"
import energiaMelodiaImg from "@/assets/images/daily-releases/energia-melodia.png"
import DepecheModeViolatorAlbumImg from "@/assets/images/albums/depeche-mode/violator.png"
import ThisIsRammsteinImg from "@/assets/images/recent-music/this-is-rammstein.png"
import PlaceboImg from "@/assets/images/recent-music/placebo.png"
import TheCureDesintegrationAlbumImg from "@/assets/images/albums/the-cure/desintegration.png"
import ThreeDaysGraceOneXAlbumImg from "@/assets/images/albums/three-days-grace/one-x.png"

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
    text: "The Cure"
  },
  {
    id: 6,
    image: ThreeDaysGraceOneXAlbumImg,
    text: "Three Days Grace"
  }
]

export const yourPlaylistsItemsBase: HorizontalListTitleAndTextData[] = [
  {
    sectionType: "playlist",
    id: "1",
    image: "",
    title: "Depeche Mode",
    subtitle: "username"
  },
  {
    sectionType: "playlist",
    id: "2",
    image: "",
    title: "The Cure",
    subtitle: "username"
  },
  {
    sectionType: "playlist",
    id: "3",
    image: "",
    title: "Three Days Grace",
    subtitle: "username"
  },
  {
    sectionType: "playlist",
    id: "4",
    image: "",
    title: "Crystal Castles",
    subtitle: "username"
  },
  {
    sectionType: "playlist",
    id: "5",
    image: "",
    title: "HIM",
    subtitle: "username"
  }
]

export const yourPlaylistsItems: HorizontalListTitleAndTextData[] =
  yourPlaylistsItemsBase.map(item => ({
    ...item,
    image: getListImages(item.id, listDinamicPageData),
  }));

export const dailyReleasesItems: BasicHorizontalListData[] = [
  {
    sectionType: "daily-releases",
    id: 1,
    image: nuevoLanzamientoImg,
    text: "Nuevo lanzamiento del día: sonidos frescos que mezclan ritmos actuales con una producción moderna. Ideal para descubrir algo distinto en pocos minutos.",
  },
  {
    sectionType: "daily-releases",
    id: 2,
    image: propuestaDinamicaImg,
    text: "Estreno reciente que ya empieza a sonar fuerte. Una propuesta dinámica, perfecta para sumar a tu playlist diaria.",
  },
  {
    sectionType: "daily-releases",
    id: 3,
    image: energiaMelodiaImg,
    text: "Una novedad que combina energía y melodía, pensada para acompañarte durante el día con un estilo actual y envolvente.",
  },
  {
    sectionType: "daily-releases",
    id: 4,
    image: "",
    text: "Lanzamiento recién salido: ritmo pegadizo, producción cuidada y un sonido que destaca entre las novedades de hoy.",
  },
  {
    sectionType: "daily-releases",
    id: 5,
    image: "",
    text: "Descubrí este estreno diario con una vibra moderna y fresca, ideal para quienes buscan algo nuevo sin perder identidad.",
  }
];

export const backToYourMusicItems: BasicHorizontalListData[] = [
  {
    sectionType: "back-to-your-music",
    id: 1,
    image: "",
    text: "Volvé a escuchar esos temas que no podés dejar atrás. Canciones que ya conocés y siempre suenan bien, sin importar el momento.",
  },
  {
    sectionType: "back-to-your-music",
    id: 2,
    image: "",
    text: "Tu música de siempre, esa que acompañó distintos momentos y que hoy vuelve a sonar como la primera vez.",
  },
  {
    sectionType: "back-to-your-music",
    id: 3,
    image: "",
    text: "Reviví tus favoritos y retomá esas canciones que marcaron etapas. Perfectas para escuchar sin pensarlo demasiado.",
  },
  {
    sectionType: "back-to-your-music",
    id: 4,
    image: "",
    text: "Un viaje directo a tu historial musical: temas que escuchaste, repetiste y siguen teniendo algo especial.",
  },
  {
    sectionType: "back-to-your-music",
    id: 5,
    image: "",
    text: "Volvé a tu zona de confort musical con canciones que ya son parte de tu día a día.",
  },
];



