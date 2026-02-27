import ThemedText from "@/components/themed/ThemedText";
import ThemedView from "@/components/themed/ThemedView";
import { colors } from "@/themes/colors";
import { fontSize } from "@/themes/fontSize";
import ExploreItem, { ExploreItemsData } from "./ExploreItem";
import CommonContainer from "../CommonContainer";
import { ImageSourcePropType } from "react-native";
import DepecheModeImg1 from "@/assets/images/other/depeche-mode-temporal.png"
import DepecheModeImg2 from "@/assets/images/artists/depeche-mode.png"

type ExploreSectionProps = {
  artistName: string;
  songName: string;
  albumImg: string | ImageSourcePropType;
}

const ExploreSection = (props: ExploreSectionProps) => {
  const exploreItems: ExploreItemsData = {
    songs: { image: DepecheModeImg2 },
    similarBand: { image: DepecheModeImg1 },
    similarSong: { image: props.albumImg }
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