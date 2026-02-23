import { AlbumItemType } from "@/components/sections/artist-dinamic-screen/album/AlbumItem";

export function formatAlbumType(type: AlbumItemType) {
  switch (type) {
    case "Álbum":
      return "Álbumes";
    case "Sencillo":
      return "Sencillos";
    case "EP":
      return "EP";
  }
}
