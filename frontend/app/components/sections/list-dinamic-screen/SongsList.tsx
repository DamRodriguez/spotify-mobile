import SongItem, { SongItemData } from "@/components/music/SongItem";
import ListFooterSpinner from "@/components/other/ListFooterSpinner";
import ThemedView from "@/components/themed/ThemedView";
import { flashListDefaults } from "@/config/flashListDefaults";
import { sizes } from "@/constants/sizes";
import { FlashList } from "@shopify/flash-list";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type SongsListProps = {
  topSections: React.ReactElement;
  onEndReached: () => void;
  isLoadingMore: boolean;
  data: SongItemData[];
  onScroll: (event: any) => void;
  sectionId: string;
};

const SongsList = (props: SongsListProps) => {
  const insets = useSafeAreaInsets();

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
          paddingTop: insets.top + 70,
          paddingBottom: 200,
          paddingHorizontal: sizes.mainPadding,
        }}
        ListFooterComponent={<ListFooterSpinner isLoadingMore={props.isLoadingMore} />}
        ListEmptyComponent={<></>}
        renderItem={({ item }) => (
          <SongItem data={item} sectionId={props.sectionId} />
        )}
      />
    </ThemedView>
  );
};



export default SongsList;
