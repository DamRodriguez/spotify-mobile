import ThemedView from "@/components/themed/ThemedView";
import { ComputerIcon, RowReproductionIcon, ShareIcon } from "../icons/player";
import ItemWrapper from "../other/ItemWrapper";

const InteractiveButtonsSection = () => {
  return (
    <ThemedView
      style={{
        flexDirection: "row",
        justifyContent: "space-between"
      }}
    >
      <ItemWrapper
        onPress={() => { }}
      >
        <ComputerIcon />
      </ItemWrapper>
      <ThemedView
        style={{
          flexDirection: "row",
          gap: 30
        }}
      >
        <ItemWrapper
          onPress={() => { }}
        >
          <ShareIcon />
        </ItemWrapper>
        <ItemWrapper
          onPress={() => { }}
        >
          <RowReproductionIcon />
        </ItemWrapper>
      </ThemedView>
    </ThemedView>
  );
};

export default InteractiveButtonsSection;