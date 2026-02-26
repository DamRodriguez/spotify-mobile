import OptimizedImage from "@/components/image/OptimizedImage";
import ItemWrapper from "@/components/other/ItemWrapper";
import ThemedText from "@/components/themed/ThemedText";
import ThemedView from "@/components/themed/ThemedView";
import { ROUTES } from "@/navigation/routes";
import { colors } from "@/themes/colors";
import { fontSize } from "@/themes/fontSize";
import { ImageSourcePropType, StyleSheet } from "react-native";

export const ALBUM_TYPES = [
  "Álbum",
  "Sencillo",
  "EP",
] as const;

export type AlbumItemType = typeof ALBUM_TYPES[number];

export type AlbumItemData = {
  id: string;
  image: string | ImageSourcePropType;
  title: string;
  releaseDate: number;
  type: AlbumItemType;
}

type AlbumItemProps = {
  data: AlbumItemData;
  withoutType?: boolean;
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 4
  },
  textsContainer: {
    gap: 6
  },
  textTitle: {
    fontSize: fontSize.b1,
    color: colors.neutral[1000]
  },
  textSubtitle: {
    fontSize: fontSize.b3,
    color: colors.opaqueWhite
  }
})

const AlbumItem = (props: AlbumItemProps) => {
  const data = props.data;

  return (
    <ItemWrapper
      routerLink={ROUTES.MAIN.HOME.listDinamicScreen("album", data.id)}
      style={styles.mainContainer}
    >
      <OptimizedImage
        source={data.image}
        style={styles.image}
      />
      <ThemedView style={styles.textsContainer}>
        <ThemedText style={styles.textTitle}>
          {data.title}
        </ThemedText>
        <ThemedText style={styles.textSubtitle}>
          {data.releaseDate} {!props.withoutType && `• ${data.type}`}
        </ThemedText>
      </ThemedView>
    </ItemWrapper>
  );
};

export default AlbumItem;