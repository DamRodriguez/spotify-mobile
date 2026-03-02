import { FlashList } from "@shopify/flash-list";
import CommonContainer from "../CommonContainer";
import SmallTitle from "../SmallTitle";
import RelatedMusicVideoItem from "./RelatedMusicVideoItem";
import { flashListDefaults } from "@/config/flashListDefaults";
import ThemedView from "@/components/themed/ThemedView";
import { PlayerSongData } from "@/app/(app)/(player-group)/player";

type RelatedMusicVideosSectionProps = {
  data: PlayerSongData["relatedMusicVideo"];
  artistName: string;
}

const RelatedMusicVideosSection = (props: RelatedMusicVideosSectionProps) => {
  const ITEM_WIDTH = 230;
  const SEPARATOR_WIDTH = 15;
  return (
    <CommonContainer
      style={{
        padding: 20,
        gap: 15
      }}
    >
      <SmallTitle title="Videos musicales relacionados" />
      <FlashList
        {...flashListDefaults}
        data={props.data}
        horizontal
        showsHorizontalScrollIndicator={false}
        decelerationRate="normal"
        snapToInterval={ITEM_WIDTH + SEPARATOR_WIDTH}
        snapToAlignment="start"
        disableIntervalMomentum
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => (
          <ThemedView style={{ width: SEPARATOR_WIDTH }} />
        )}
        renderItem={({ item }) => (
          <RelatedMusicVideoItem
            data={item}
            artistName={props.artistName}
          />
        )}
      />
    </CommonContainer>
  );
};

export default RelatedMusicVideosSection;