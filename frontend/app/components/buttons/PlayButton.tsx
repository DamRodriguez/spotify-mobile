import { colors } from "@/themes/colors";
import ItemWrapper from "../other/ItemWrapper";
import ThemedView from "../themed/ThemedView";
import useSongItem from "@/features/redux/song-item/useSongItem";
import { PauseIcon, PlayIcon } from "../icons/common";

type PlayButtonProps = {
  onPress: () => void;
  sectionId: string;
}

const PlayButton = (props: PlayButtonProps) => {
  const { songData } = useSongItem();
  const isThisListPlaying = songData.isPlaying && songData.sectionId === props.sectionId;

  return (
    <ItemWrapper
      onPress={props.onPress}
      style={{
        backgroundColor: colors.mainGreen,
        borderRadius: 999,
        padding: 10,
        elevation: 20
      }}
    >
      {isThisListPlaying ? (
        <PauseIcon size={32} color={colors.neutral[100]} />
      ) : (
        <ThemedView style={{ left: 2 }}>
          <PlayIcon />
        </ThemedView>
      )}
    </ItemWrapper>
  );
};

export default PlayButton;