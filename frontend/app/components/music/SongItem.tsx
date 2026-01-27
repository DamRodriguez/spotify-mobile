import { colors } from "@/themes/colors";
import { VerticalDotsIcon } from "../icons/common";
import OptimizedImage from "../image/OptimizedImage";
import ItemWrapper from "../other/ItemWrapper";
import ThemedText from "../themed/ThemedText";
import ThemedView from "../themed/ThemedView";
import { fontSize } from "@/themes/fontSize";
import { ImageSourcePropType, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10
  },
  itemSubContainer: {
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
  },
  itemImage: {
    width: 55,
    height: 55,
    borderRadius: 4,
  },
  itemTitle: {
    color: colors.neutral[1000],
    fontSize: fontSize.b1
  },
  itemSubtitle: {
    color: colors.quaternary[300],
    fontSize: fontSize.b2
  },
  itemTextsContainer: {
    gap: 4
  },
});

export type SongItemData = {
  id: string;
  title: string;
  subtitle: string;
  mp3: string;
  image: string | ImageSourcePropType;
}

type SongItemProps = {
  data: SongItemData;
}

const SongItem = (props: SongItemProps) => {
  const data = props.data;

  return (
    <ItemWrapper
      key={data.id}
      style={styles.itemContainer}
    >
      <ThemedView style={styles.itemSubContainer}>
        <OptimizedImage
          source={data.image}
          style={styles.itemImage}
        />
        <ThemedView style={styles.itemTextsContainer}>
          <ThemedText
            numberOfLines={1}
            style={styles.itemTitle}
          >
            {data.title}
          </ThemedText>
          <ThemedText
            numberOfLines={1}
            style={styles.itemSubtitle}
          >
            {data.subtitle}
          </ThemedText>
        </ThemedView>
      </ThemedView>

      <ItemWrapper>
        <VerticalDotsIcon />
      </ItemWrapper>
    </ItemWrapper>
  );
};

export default SongItem;