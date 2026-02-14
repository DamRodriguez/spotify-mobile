import { useSafeAreaInsets } from "react-native-safe-area-context";
import { fontSize } from "@/themes/fontSize";
import { colors } from "@/themes/colors";
import ThemedView from "@/components/themed/ThemedView";
import OptimizedImage from "@/components/image/OptimizedImage";
import ThemedText from "@/components/themed/ThemedText";
import DurationBar from "./DurationBar";
import { ComputerIcon, PlayIcon, PlusIcon } from "@/components/icons/floatSong";
import ItemWrapper from "@/components/other/ItemWrapper";
import useSongItem from "@/features/redux/song-item/useSongItem";
import { useRouter } from "expo-router";
import { ROUTES } from "@/navigation/routes";

const FloatSong = () => {
  const insets = useSafeAreaInsets();
  const { songItemData } = useSongItem();
  const data = songItemData;
  const router = useRouter();
  if (!data.duration) return null;

  return (
    <ItemWrapper
      onPress={() => { router.push(ROUTES.PLAYER.index) }}
      style={{
        position: "absolute",
        bottom: insets.bottom + 68,
        left: 16,
        right: 16,
        borderRadius: 6,
        overflow: "hidden",
      }}
    >
      <ThemedView
        style={{
          backgroundColor: data.color || colors.neutral[500],
          flexDirection: "row",
          padding: 10,
          gap: 10,
        }}
      >
        <OptimizedImage
          source={data.image}
          style={{
            width: 40,
            height: 40,
            backgroundColor: "#fff",
            borderRadius: 3
          }}
        />
        <ThemedView
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            gap: 4
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
                fontWeight: "bold",
                fontSize: fontSize.b2,
                color: colors.neutral[1000]
              }}
            >
              {data.songName}
            </ThemedText>
            <ThemedText
              numberOfLines={1}
              style={{
                fontSize: fontSize.b3,
                color: colors.opaqueWhite
              }}
            >
              {data.artistName}
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

            <ItemWrapper
              onPress={() => { }}
            >
              <PlayIcon />
            </ItemWrapper>
          </ThemedView>
        </ThemedView>

      </ThemedView>
      <DurationBar duration={data.duration} />
    </ItemWrapper>
  );
};

export default FloatSong;