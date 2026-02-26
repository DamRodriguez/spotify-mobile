import ThemedView from "@/components/themed/ThemedView";
import ThemedText from "@/components/themed/ThemedText";
import { fontSize } from "@/themes/fontSize";
import { colors } from "@/themes/colors";
import ItemWrapper from "../other/ItemWrapper";
import { BackIcon, HideIcon, MixIcon, NextIcon, RepeatIcon } from "../icons/player";
import { PlusIcon } from "../icons/floatSong";
import DurationSlider from "../sliders/DurationSlider";
import useSongItem from "@/features/redux/song-item/useSongItem";
import { PauseIcon, PlayIcon } from "../icons/common";
import { useRouter } from "expo-router";
import { ROUTES } from "@/navigation/routes";
import { getAudioInstance } from "@/utils/audio/audioInstance";
import useSongProgress from "@/features/redux/song-progress/useSongProgress";

const PlayerDataAndButtons = () => {
  const { songData, togglePlay } = useSongItem();
  const player = getAudioInstance();
  const router = useRouter();
  const { state } = useSongProgress();

  const handleOnArtistPress = () => {
    router.push(ROUTES.MAIN.HOME.artistDinamicScreen.index(songData.artistId));
  }

  return (
    <ThemedView
      style={{
        gap: 15
      }}
    >
      <ThemedView
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <ThemedView
          style={{
            gap: 4,
            width: "70%"
          }}
        >
          <ThemedText
            numberOfLines={1}
            style={{
              fontSize: fontSize.h7,
              fontWeight: 700,
              color: colors.neutral[1000]
            }}
          >
            {songData.songName}
          </ThemedText>
          <ItemWrapper
            onPress={handleOnArtistPress}
            style={{
              alignSelf: "flex-start"
            }}
          >
            <ThemedText
              numberOfLines={1}
              style={{
                fontSize: fontSize.b1,
                color: colors.opaqueWhite,
              }}
            >
              {songData.artistName}
            </ThemedText>
          </ItemWrapper>
        </ThemedView>

        <ThemedView
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 15
          }}
        >
          <ItemWrapper>
            <HideIcon />
          </ItemWrapper>

          <ItemWrapper>
            <PlusIcon size={40} />
          </ItemWrapper>
        </ThemedView>
      </ThemedView>

      <DurationSlider
        value={state.position}
        max={state.duration}
        onValueChange={(val) => player.seekTo(val)}
      />

      <ThemedView
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <ItemWrapper
          onPress={() => { }}
        >
          <MixIcon />
        </ItemWrapper>

        <ThemedView
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 30
          }}
        >
          <ItemWrapper
            onPress={() => { }}
          >
            <BackIcon />
          </ItemWrapper>

          <ItemWrapper
            onPress={togglePlay}
            style={{
              backgroundColor: colors.neutral[1000],
              borderRadius: 999,
              width: 65,
              height: 65,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            {songData.isPlaying ? (
              <PauseIcon size={35} color="black" />
            ) : (
              <ThemedView style={{ left: 2 }}>
                <PlayIcon size={35} />
              </ThemedView>
            )}
          </ItemWrapper>

          <ItemWrapper
            onPress={() => { }}
          >
            <NextIcon />
          </ItemWrapper>
        </ThemedView>
        <ItemWrapper
          onPress={() => { }}
        >
          <RepeatIcon />
        </ItemWrapper>
      </ThemedView>

    </ThemedView>
  );
};

export default PlayerDataAndButtons;