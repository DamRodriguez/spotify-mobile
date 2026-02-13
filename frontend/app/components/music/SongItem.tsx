import { colors } from "@/themes/colors";
import { VerticalDotsIcon } from "../icons/common";
import OptimizedImage from "../image/OptimizedImage";
import ItemWrapper from "../other/ItemWrapper";
import ThemedText from "../themed/ThemedText";
import ThemedView from "../themed/ThemedView";
import { fontSize } from "@/themes/fontSize";
import { ImageSourcePropType, StyleSheet } from "react-native";
import useSongItem from "@/features/redux/song-item/useSongItem";
import { formatWithCommas } from "@/utils/formatWithCommas";

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
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
    fontSize: fontSize.b1
  },
  itemSubtitle: {
    color: colors.opaqueWhite,
    fontSize: fontSize.b2
  },
  itemTextsContainer: {
    gap: 4,
  },
});

export type SongItemData = {
  id: string;
  artistName: string;
  songName: string;
  mp3: string;
  image: string | ImageSourcePropType;
  duration: number;
  color?: string;
  reproductions?: number;
}

type SongItemProps = {
  data: SongItemData;
  enumerateSongs?: boolean;
  index?: number;
  sectionId: string
}

const SongItem = (props: SongItemProps) => {
  const data = props.data;
  const { setSongItemData, songItemData } = useSongItem();
  const isSongActive = songItemData.id === data.id && songItemData.sectionId === props.sectionId;

  const handleSongItemPress = () => {
    if (!data.color) {
      setSongItemData({
        ...data,
        color: "",
        sectionId: props.sectionId
      })
    } else {
      setSongItemData({ ...data, sectionId: props.sectionId });
    }
  }

  return (
    <ItemWrapper
      onPress={handleSongItemPress}
      style={styles.itemContainer}
    >
      <ThemedView style={styles.itemSubContainer}>
        {props.enumerateSongs && (
          <ThemedText
            style={{
              color: colors.neutral[1000],
              fontSize: fontSize.b3,
              width: 20,
            }}
          >
            {props.index}
          </ThemedText>
        )}
        <OptimizedImage
          source={data.image}
          style={styles.itemImage}
        />
        <ThemedView style={styles.itemTextsContainer}>
          <ThemedText
            numberOfLines={1}
            style={[styles.itemTitle, {
              color: isSongActive ? colors.mainGreen : colors.neutral[1000]
            }]}
          >
            {data.songName}
          </ThemedText>
          {data.reproductions ? (
            <ThemedText
              numberOfLines={1}
              style={styles.itemSubtitle}
            >
              {formatWithCommas(data.reproductions)}
            </ThemedText>
          ) : (
            <ThemedText
              numberOfLines={1}
              style={styles.itemSubtitle}
            >
              {data.artistName}
            </ThemedText>
          )}
        </ThemedView>
      </ThemedView>

      <ItemWrapper>
        <VerticalDotsIcon />
      </ItemWrapper>
    </ItemWrapper>
  );
};

export default SongItem;