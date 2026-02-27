import OptimizedImage from "@/components/image/OptimizedImage";
import BorderGradient from "@/components/other/BorderGradient";
import ExploreSection from "@/components/player/explore/ExploreSection";
import InteractiveButtonsSection from "@/components/player/InteractiveButtonsSection";
import PlayerDataAndButtons from "@/components/player/PlayerDataAndButtons";
import PlayerHeader from "@/components/player/PlayerHeader";
import ThemedScrollView from "@/components/themed/ThemedScrollView";
import ThemedView from "@/components/themed/ThemedView";
import { sizes } from "@/constants/sizes";
import useSongItem from "@/features/redux/song-item/useSongItem";
import { colors } from "@/themes/colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const PlayerScreen = () => {
  const insets = useSafeAreaInsets();
  const { songData } = useSongItem();

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
        shadowDistance={1000}
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
          albumImg={songData.image}
        />
      </ThemedView>
    </ThemedScrollView>
  );
}

export default PlayerScreen;
