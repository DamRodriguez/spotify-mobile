import { VerticalDotsIcon } from "@/components/icons/common";
import OptimizedImage from "@/components/image/OptimizedImage";
import ItemWrapper from "@/components/other/ItemWrapper";
import ListFooterSpinner from "@/components/other/ListFooterSpinner";
import ThemedText from "@/components/themed/ThemedText";
import ThemedView from "@/components/themed/ThemedView";
import { flashListDefaults } from "@/config/flashListDefaults";
import { colors } from "@/themes/colors";
import { fontSize } from "@/themes/fontSize";
import { FlashList } from "@shopify/flash-list";
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
  itemDots: {
  }
});

export type SongItem = {
  id: string;
  title: string;
  subtitle: string;
  mp3: string;
  image: string | ImageSourcePropType;
}

type SongsListProps = {
  topSections: React.ReactElement;
  onEndReached: () => void;
  isLoadingMore: boolean;
  data: SongItem[];
  onScroll: (event: any) => void;
};

const SongsList = (props: SongsListProps) => {
  return (
    <ThemedView style={{ flex: 1 }}>
      <FlashList
        {...flashListDefaults}
        onEndReached={props.onEndReached}
        ListHeaderComponent={props.topSections}
        onScroll={props.onScroll}
        data={props.data}
        keyExtractor={(_, index) => String(index)}
        ItemSeparatorComponent={() => <ThemedView style={{ height: 15 }} />}
        contentContainerStyle={{
          paddingBottom: 140,
          paddingHorizontal: 16,
        }}
        ListFooterComponent={<ListFooterSpinner isLoadingMore={props.isLoadingMore} />}
        ListEmptyComponent={<></>}
        renderItem={({ item, index }) => (
          <ItemWrapper
            key={index}
            style={styles.itemContainer}
          >
            <ThemedView style={styles.itemSubContainer}>
              <OptimizedImage
                source={item.image}
                style={styles.itemImage}
              />
              <ThemedView style={styles.itemTextsContainer}>
                <ThemedText style={styles.itemTitle}>
                  {item.title}
                </ThemedText>
                <ThemedText style={styles.itemSubtitle}>
                  {item.subtitle}
                </ThemedText>
              </ThemedView>
            </ThemedView>

            <ItemWrapper style={styles.itemDots}>
              <VerticalDotsIcon />
            </ItemWrapper>
          </ItemWrapper>
        )}
      />
    </ThemedView>
  );
};



export default SongsList;
