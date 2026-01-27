import SongItem, { SongItemData } from "@/components/music/SongItem";
import ListFooterSpinner from "@/components/other/ListFooterSpinner";
import ThemedView from "@/components/themed/ThemedView";
import { flashListDefaults } from "@/config/flashListDefaults";
import { FlashList } from "@shopify/flash-list";

type SongsListProps = {
  topSections: React.ReactElement;
  onEndReached: () => void;
  isLoadingMore: boolean;
  data: SongItemData[];
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
        renderItem={({ item }) => (
          <SongItem data={item} />
        )}
      />
    </ThemedView>
  );
};



export default SongsList;
