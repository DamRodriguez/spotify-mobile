import ThemedText from "@/components/themed/ThemedText";
import ThemedView from "@/components/themed/ThemedView";
import { colors } from "@/themes/colors";
import { fontSize } from "@/themes/fontSize";
import CommonContainer from "../CommonContainer";
import { PlayerSongData } from "@/app/(app)/(player-group)/player";
import ExploreItem from "@/components/player/explore/ExploreItem";

type ExploreImageKey = keyof PlayerSongData["exploreImages"];

type ExploreSectionProps = {
  artistName: string;
  songName: string;
  images: PlayerSongData["exploreImages"]
}

const ExploreSection = (props: ExploreSectionProps) => {
  const keys = Object.keys(props.images) as ExploreImageKey[];

  return (
    <CommonContainer
      style={{ gap: 10, padding: 20 }}
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
        {keys.map((key) => (
          <ExploreItem
            key={key}
            type={key}
            image={props.images[key]}
            artistName={props.artistName}
            songName={props.songName}
          />
        ))}
      </ThemedView>
    </CommonContainer>
  );
};

export default ExploreSection;