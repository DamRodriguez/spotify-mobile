import ThemedView from "@/components/themed/ThemedView";
import CommonContainer from "../CommonContainer";
import { PlayerSongData } from "@/app/(app)/(player-group)/player";
import ExploreItem from "@/components/player/explore/ExploreItem";
import SmallTitle from "../SmallTitle";

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
      style={{ gap: 15, padding: 20 }}
    >
      <SmallTitle title={`Explora ${props.artistName}`} />
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