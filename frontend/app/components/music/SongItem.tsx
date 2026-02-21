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
import { HomeListSectionType } from "@/types/homeListSection";

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
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
  enumerateItemContainer: {
    minWidth: 20,
    alignItems: "center",
  },
  enumerateItemText: {
    color: colors.neutral[1000],
    fontSize: fontSize.b3,
  }
});

export type SongItemData = {
  id: string;
  artistName: string;
  songName: string;
  mp3: string;
  image: string | ImageSourcePropType;
  color?: string;
  reproductions?: number;
  album: string;
}

type SongItemProps = {
  data: SongItemData;
  enumerateSongs?: boolean;
  index?: number;
  sectionId: string
  sectionType: HomeListSectionType;
}

const SongItem = (props: SongItemProps) => {
  const data = props.data;
  const { setCurrentSong, songData, togglePlay } = useSongItem();
  const isSongActive = songData.id === data.id && songData.sectionId === props.sectionId;

  const handleSongItemPress = () => {
    if (isSongActive) {
      togglePlay();
    } else {
      setCurrentSong({
        ...data,
        sectionId: props.sectionId,
        sectionType: props.sectionType,
      })
    }
  }

  return (
    <ItemWrapper
      onPress={handleSongItemPress}
      style={styles.itemContainer}
    >
      <ThemedView style={styles.itemSubContainer}>
        {props.enumerateSongs && (
          <ThemedView style={styles.enumerateItemContainer}>
            <ThemedText style={styles.enumerateItemText}>
              {props.index}
            </ThemedText>
          </ThemedView>
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