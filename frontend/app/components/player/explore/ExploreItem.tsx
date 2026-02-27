import OptimizedImage from "@/components/image/OptimizedImage";
import ItemWrapper from "@/components/other/ItemWrapper";
import ThemedText from "@/components/themed/ThemedText";
import ThemedView from "@/components/themed/ThemedView";
import { colors } from "@/themes/colors";
import { fontSize } from "@/themes/fontSize";
import { ImageSourcePropType, StyleSheet } from "react-native";

type ExploreItemImage = string | ImageSourcePropType;

export type ExploreItemsData = {
  songs: { image: ExploreItemImage };
  similarBand: { image: ExploreItemImage };
  similarSong: { image: ExploreItemImage };
};

export type ExploreItemType =
  | "songs"
  | "similarBand"
  | "similarSong";

export type ExploreItemData = {
  type: ExploreItemType;
  image: ExploreItemImage;
};

type ExploreItemProps = {
  data: ExploreItemData;
  artistName: string;
  songName: string;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 170,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  overlay: {
    position: "absolute",
    bottom: 0,
    padding: 10,
  },
  title: {
    color: colors.neutral[1000],
    fontSize: fontSize.b3,
    fontWeight: "700",
    textShadowColor: "rgba(0,0,0,0.4)",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 5,
  },
});

const ExploreItem = (props: ExploreItemProps) => {
  const data = props.data;

  const renderTitle = () => {
    switch (data.type) {
      case "songs":
        return `Canciones de ${props.artistName}`;
      case "similarBand":
        return `Similar a ${props.artistName}`;
      case "similarSong":
        return `Similar a ${props.songName}`;
    }
  };

  return (
    <ItemWrapper style={styles.container}>
      <OptimizedImage
        source={data.image}
        style={styles.image}
      />
      <ThemedView style={styles.overlay}>
        <ThemedText
          numberOfLines={2}
          style={styles.title}
        >
          {renderTitle()}
        </ThemedText>
      </ThemedView>
    </ItemWrapper>
  );
};

export default ExploreItem;