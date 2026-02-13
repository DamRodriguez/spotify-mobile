import ThemedView from "@/components/themed/ThemedView";
import ThemedText from "@/components/themed/ThemedText";
import { fontSize } from "@/themes/fontSize";
import { colors } from "@/themes/colors";
import ItemWrapper from "../other/ItemWrapper";
import { BackIcon, HideIcon, MixIcon, NextIcon, RepeatIcon } from "../icons/player";
import { PlusIcon } from "../icons/floatSong";
import DurationSlider from "../sliders/DurationSlider";
import useSongItem from "@/features/redux/song-item/useSongItem";
import { PlayIcon } from "../icons/common";

const PlayerDataAndButtons = () => {
  const { songItemData } = useSongItem();

  return (
    <ThemedView
      style={{
        gap: 20
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
              fontWeight: 600,
              color: colors.neutral[1000]
            }}
          >
            {songItemData.songName}
          </ThemedText>
          <ThemedText
            numberOfLines={1}
            style={{
              fontSize: fontSize.h8,
              color: colors.opaqueWhite,
            }}
          >
            {songItemData.artistName}
          </ThemedText>
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
            <PlusIcon size={45} />
          </ItemWrapper>
        </ThemedView>
      </ThemedView>

      <DurationSlider
        value={0}
        onValueChange={() => { }}
        max={songItemData.duration}
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
            onPress={() => { }}
            style={{
              backgroundColor: colors.neutral[1000],
              borderRadius: 999,
              width: 65,
              height: 65,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <ThemedView style={{ left: 2 }}>
              <PlayIcon size={35} />
            </ThemedView>
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
      </ThemedView >

    </ThemedView >
  );
};

export default PlayerDataAndButtons;