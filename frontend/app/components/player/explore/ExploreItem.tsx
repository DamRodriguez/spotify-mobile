import { PlayerSongData } from "@/app/(app)/(player-group)/player";
import OptimizedImage from "@/components/image/OptimizedImage";
import BorderGradient from "@/components/other/BorderGradient";
import ItemWrapper from "@/components/other/ItemWrapper";
import ThemedText from "@/components/themed/ThemedText";
import ThemedView from "@/components/themed/ThemedView";
import { colors } from "@/themes/colors";
import { fontSize } from "@/themes/fontSize";
import { StyleSheet } from "react-native";

type ExploreItemProps = {
  type: keyof PlayerSongData["exploreImages"];
  image: PlayerSongData["exploreImages"][keyof PlayerSongData["exploreImages"]];
  artistName: string;
  songName: string;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 170,
    overflow: "hidden",
    borderRadius: 10,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  overlay: {
    position: "absolute",
    bottom: 0,
    padding: 10,
  },
  title: {
    color: colors.neutral[1000],
    fontSize: fontSize.b3,
    fontWeight: 800,
  },
});

const ExploreItem = (props: ExploreItemProps) => {

  const renderTitle = () => {
    switch (props.type) {
      case "songs":
        return `Canciones de ${props.artistName}`;
      case "similarBand":
        return `Similar a ${props.artistName}`;
      case "similarSong":
        return `Similar a ${props.songName}`;
    }
  };

  return (
    <ItemWrapper style={styles.container}>
      <OptimizedImage
        source={props.image}
        style={styles.image}
      />
      <BorderGradient
        direction="bottom"
        heightFull
        shadowDistance={100}
        shadowColor="rgba(0,0,0,0.6)"
      />
      <ThemedView style={styles.overlay}>
        <ThemedText
          numberOfLines={2}
          style={styles.title}
        >
          {renderTitle()}
        </ThemedText>
      </ThemedView>
    </ItemWrapper>
  );
};

export default ExploreItem;