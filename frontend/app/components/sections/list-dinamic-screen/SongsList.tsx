import SongItem, { SongItemData } from "@/components/music/SongItem";
import ListFooterSpinner from "@/components/other/ListFooterSpinner";
import ThemedView from "@/components/themed/ThemedView";
import { flashListDefaults } from "@/config/flashListDefaults";
import { sizes } from "@/constants/sizes";
import { HomeListSectionType } from "@/types/homeListSection";
import { FlashList, FlashListRef } from "@shopify/flash-list";
import { useRef } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type SongsListProps = {
  topSections: React.ReactElement;
  onEndReached: () => void;
  isLoadingMore: boolean;
  data: SongItemData[];
  onScroll: (event: any) => void;
  sectionId: string;
  sectionType: HomeListSectionType;
};

const SongsList = (props: SongsListProps) => {
  const insets = useSafeAreaInsets();
  const listRef = useRef<FlashListRef<SongItemData>>(null);

  const handleOnLoad = () => {
    if (props.sectionType !== "album") {
      listRef.current?.scrollToOffset({
        offset: 150,
        animated: false
      });
    }
  }

  return (
    <ThemedView style={{ flex: 1 }}>
      <FlashList
        ref={listRef}
        {...flashListDefaults}
        onEndReached={props.onEndReached}
        ListHeaderComponent={props.topSections}
        onLoad={handleOnLoad}
        onScroll={props.onScroll}
        data={props.data}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <ThemedView style={{ height: 15 }} />}
        contentContainerStyle={{
          paddingTop: props.sectionType === "album" ? insets.top : insets.top + 70,
          paddingBottom: 200,
          paddingHorizontal: sizes.mainPadding,
        }}
        ListFooterComponent={<ListFooterSpinner isLoadingMore={props.isLoadingMore} />}
        ListEmptyComponent={<></>}
        renderItem={({ item }) => (
          <SongItem
            data={item}
            sectionId={props.sectionId}
            sectionType={props.sectionType}
          />
        )}
      />
    </ThemedView>
  );
};



export default SongsList;
