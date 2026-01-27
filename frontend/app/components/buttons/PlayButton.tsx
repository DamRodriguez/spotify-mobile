import { colors } from "@/themes/colors";
import { PlayIcon } from "../icons/common";
import ItemWrapper from "../other/ItemWrapper";
import ThemedView from "../themed/ThemedView";

type PlayButtonProps = {
  onPress: () => void;
}

const PlayButton = (props: PlayButtonProps) => {
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
      <ThemedView style={{ left: 2 }}>
        <PlayIcon />
      </ThemedView>
    </ItemWrapper>
  );
};

export default PlayButton;