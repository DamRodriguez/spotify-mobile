import OptimizedImage from "@/components/image/OptimizedImage";
import BorderGradient from "@/components/other/BorderGradient";
import PlayerDataAndButtons from "@/components/player/PlayerDataAndButtons";
import PlayerHeader from "@/components/player/PlayerHeader";
import ThemedScrollView from "@/components/themed/ThemedScrollView";
import { sizes } from "@/constants/sizes";
import useSongItem from "@/features/redux/song-item/useSongItem";
import { colors } from "@/themes/colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const PlayerScreen = () => {
  const insets = useSafeAreaInsets();
  const { songData } = useSongItem();

  return (
    <ThemedScrollView
      style={{
        flex: 1,
        backgroundColor: songData.color || colors.neutral[500],
        paddingTop: insets.top + 16,
        paddingHorizontal: sizes.mainPadding,
        paddingBottom: insets.bottom,
        gap: 50
      }}
    >
      <BorderGradient
        direction="bottom"
        heightFull
        shadowDistance={400}
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
          backgroundColor: "#fff"
        }}
      />
      <PlayerDataAndButtons />
    </ThemedScrollView>
  );
}

export default PlayerScreen;
