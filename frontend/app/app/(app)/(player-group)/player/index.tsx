import OptimizedImage from "@/components/image/OptimizedImage";
import BorderGradient from "@/components/other/BorderGradient";
import NoContent from "@/components/other/NoContent";
import AboutArtistSection from "@/components/player/AboutArtistSection";
import ExploreSection from "@/components/player/explore/ExploreSection";
import InteractiveButtonsSection from "@/components/player/InteractiveButtonsSection";
import PlayerDataAndButtons from "@/components/player/PlayerDataAndButtons";
import PlayerHeader from "@/components/player/PlayerHeader";
import ThemedScrollView from "@/components/themed/ThemedScrollView";
import ThemedView from "@/components/themed/ThemedView";
import { sizes } from "@/constants/sizes";
import { playerSongData } from "@/data/player/playerSongData";
import useSongItem from "@/features/redux/song-item/useSongItem";
import { colors } from "@/themes/colors";
import { ImageSourcePropType } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type PlayerSongImage = string | ImageSourcePropType;

export type PlayerSongData = {
  id: string;
  exploreImages: {
    songs: PlayerSongImage;
    similarBand: PlayerSongImage;
    similarSong: PlayerSongImage;
  },
  aboutArtist: {
    image: PlayerSongImage,
    monthlyListeners: number,
    textInformation: string,
  }
}

const PlayerScreen = () => {
  const insets = useSafeAreaInsets();
  const { songData } = useSongItem();
  const playerData = playerSongData.find(
    (item) => item.id === songData.artistId,
  );
  if (!playerData) {
    return (
      <NoContent />
    );
  }

  return (
    <ThemedScrollView
      contentContainerStyle={{
        backgroundColor: songData.color || colors.neutral[500],
        paddingTop: insets.top + 16,
        paddingHorizontal: sizes.mainPadding,
        paddingBottom: insets.bottom + 50,
        gap: 40,
      }}
    >
      <BorderGradient
        direction="bottom"
        heightFull
        shadowDistance={1800}
        shadowColor={colors.background}
      />
      <PlayerHeader
        fromWhere={songData.sectionType}
        artistName={songData.artistName}
      />
      <OptimizedImage
        source={songData.image}
        style={{
          width: "100%",
          aspectRatio: 1,
          borderRadius: 6,
        }}
      />
      <PlayerDataAndButtons />
      <ThemedView
        style={{
          gap: 25
        }}
      >
        <InteractiveButtonsSection />
        <ExploreSection
          artistName={songData.artistName}
          songName={songData.songName}
          images={{
            ...playerData.exploreImages,
            similarSong: songData.image
          }}
        />
        <AboutArtistSection
          artistId={songData.artistId}
          artistName={songData.artistName}
          image={playerData.aboutArtist.image}
          monthlyListeners={playerData.aboutArtist.monthlyListeners}
          textInformation={playerData.aboutArtist.textInformation}
        />
      </ThemedView>
    </ThemedScrollView>
  );
}

export default PlayerScreen;
