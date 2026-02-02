import OptimizedImage from "@/components/image/OptimizedImage";
import PlayerDataAndButtons from "@/components/player/PlayerDataAndButtons";
import PlayerHeader from "@/components/player/PlayerHeader";
import ThemedScrollView from "@/components/themed/ThemedScrollView";
import useSongItem from "@/features/redux/song-item/useSongItem";
import { colors } from "@/themes/colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const PlayerScreen = () => {
  const insets = useSafeAreaInsets();
  const { songItemData } = useSongItem();

  return (
    <ThemedScrollView
      style={{
        flex: 1,
        backgroundColor: songItemData.color || colors.neutral[500],
        paddingTop: insets.top + 16,
        paddingHorizontal: 16,
        paddingBottom: insets.bottom,
        gap: 50
      }}
    >
      <PlayerHeader
        fromWhere="playlist"
        artistName={songItemData.artistName}
      />
      <OptimizedImage
        source={songItemData.image}
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
