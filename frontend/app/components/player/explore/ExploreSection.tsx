import ThemedText from "@/components/themed/ThemedText";
import ThemedView from "@/components/themed/ThemedView";
import { colors } from "@/themes/colors";
import { fontSize } from "@/themes/fontSize";
import ExploreItem, { ExploreItemsData } from "./ExploreItem";
import CommonContainer from "../CommonContainer";

type ExploreSectionProps = {
  artistName: string;
  songName: string;
}

const ExploreSection = (props: ExploreSectionProps) => {
  const exploreItems: ExploreItemsData = {
    songs: { image: "" },
    similarBand: { image: "" },
    similarSong: { image: "" }
  }

  return (
    <CommonContainer
      style={{ gap: 10 }}
    >
      <ThemedText
        style={{
          fontSize: fontSize.b1,
          fontWeight: 800,
          color: colors.neutral[1000]
        }}
      >
        Explora {props.artistName}
      </ThemedText>
      <ThemedView
        style={{
          flexDirection: "row",
          gap: 15
        }}
      >
        {(Object.keys(exploreItems) as (keyof ExploreItemsData)[]).map((key) => {
          return (
            <ExploreItem
              key={key}
              data={{ type: key, image: exploreItems[key].image }}
              artistName={props.artistName}
              songName={props.songName}
            />
          );
        })}
      </ThemedView>
    </CommonContainer>
  );
};

export default ExploreSection;