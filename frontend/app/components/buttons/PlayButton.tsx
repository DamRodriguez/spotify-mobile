import { colors } from "@/themes/colors";
import { PlayIcon } from "../icons/common";
import ItemWrapper from "../other/ItemWrapper";
import ThemedView from "../themed/ThemedView";

const PlayButton = () => {
  return (
    <ItemWrapper
      onPress={() => { }}
      style={{
        backgroundColor: colors.mainGreen,
        borderRadius: 999,
        padding: 10,
        elevation: 10
      }}
    >
      <ThemedView style={{ left: 2 }}>
        <PlayIcon />
      </ThemedView>
    </ItemWrapper>
  );
};

export default PlayButton;