import { useSafeAreaInsets } from "react-native-safe-area-context";
import { fontSize } from "@/themes/fontSize";
import { colors } from "@/themes/colors";
import ThemedView from "@/components/themed/ThemedView";
import OptimizedImage from "@/components/image/OptimizedImage";
import ThemedText from "@/components/themed/ThemedText";
import DurationBar from "./DurationBar";
import { ComputerIcon, PlusIcon } from "@/components/icons/floatSong";
import ItemWrapper from "@/components/other/ItemWrapper";
import useSongItem from "@/features/redux/song-item/useSongItem";
import { useRouter } from "expo-router";
import { ROUTES } from "@/navigation/routes";
import { sizes } from "@/constants/sizes";
import TogglePlayButton from "@/components/music/TogglePlayButton";

const FloatSong = () => {
  const insets = useSafeAreaInsets();
  const { songData } = useSongItem();
  const router = useRouter();
  if (!songData.id) return null;

  return (
    <ItemWrapper
      onPress={() => { router.push(ROUTES.PLAYER.index) }}
      style={{
        position: "absolute",
        bottom: insets.bottom + sizes.tabsHeight,
        left: 16,
        right: 16,
        borderRadius: 6,
        overflow: "hidden",
        elevation: 20
      }}
    >
      <ThemedView
        style={{
          backgroundColor: songData.color || colors.neutral[500],
          flexDirection: "row",
          padding: 8,
          gap: 10,
        }}
      >
        <OptimizedImage
          source={songData.image}
          style={{
            width: 40,
            height: 40,
            borderRadius: 3
          }}
        />
        <ThemedView
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            gap: 15
          }}
        >
          <ThemedView
            style={{
              gap: 4,
              flex: 1,
              justifyContent: "center"
            }}
          >
            <ThemedText
              numberOfLines={1}
              style={{
                fontWeight: 600,
                fontSize: fontSize.b2,
                color: colors.neutral[1000]
              }}
            >
              {songData.songName}
            </ThemedText>
            <ThemedText
              numberOfLines={1}
              style={{
                fontSize: fontSize.b3,
                color: colors.opaqueWhite
              }}
            >
              {songData.artistName}
            </ThemedText>
          </ThemedView>

          <ThemedView
            style={{
              flexDirection: "row",
              gap: 15,
              alignItems: "center"
            }}
          >
            <ItemWrapper
              onPress={() => { }}
            >
              <ComputerIcon />
            </ItemWrapper>

            <ItemWrapper
              onPress={() => { }}
            >
              <PlusIcon />
            </ItemWrapper>

            <TogglePlayButton />
          </ThemedView>
        </ThemedView>

      </ThemedView>
      <DurationBar />
    </ItemWrapper >
  );
};

export default FloatSong;