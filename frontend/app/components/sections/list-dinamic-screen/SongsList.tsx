import SongItem, { SongItemData } from "@/components/music/SongItem";
import ListFooterSpinner from "@/components/other/ListFooterSpinner";
import ThemedView from "@/components/themed/ThemedView";
import { flashListDefaults } from "@/config/flashListDefaults";
import { sizes } from "@/constants/sizes";
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
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <ThemedView style={{ height: 6 }} />}
        contentContainerStyle={{
          paddingBottom: 200,
          paddingHorizontal: sizes.mainPadding,
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
