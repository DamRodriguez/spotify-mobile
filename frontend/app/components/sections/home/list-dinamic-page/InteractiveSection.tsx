import { PlayIcon, VerticalDotsIcon } from "@/components/icons/common";
import { DownloadIcon, MixIcon, ShareIcon } from "@/components/icons/listDinamicPage";
import OptimizedImage from "@/components/image/OptimizedImage";
import ItemWrapper from "@/components/other/ItemWrapper";
import ThemedView from "@/components/themed/ThemedView";
import { colors } from "@/themes/colors";

const InteractiveSection = () => {
  return (
    <ThemedView style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
      <ThemedView style={{ flexDirection: "row", alignItems: "center", gap: 25 }}>
        <ItemWrapper
          onPress={() => { }}
          style={{
            borderWidth: 2,
            borderColor: colors.softGray,
            borderRadius: 10,
            padding: 3
          }}
        >
          <OptimizedImage
            source={""}
            style={{
              height: 40,
              width: 30,
              borderRadius: 6
            }}
          />
        </ItemWrapper>

        <ItemWrapper
          onPress={() => { }}
        >
          <DownloadIcon />
        </ItemWrapper>

        <ItemWrapper
          onPress={() => { }}
        >
          <ShareIcon />
        </ItemWrapper>

        <ItemWrapper
          onPress={() => { }}
        >
          <VerticalDotsIcon size={32} />
        </ItemWrapper>
      </ThemedView>

      <ThemedView style={{ flexDirection: "row", alignItems: "center", gap: 15 }}>
        <ItemWrapper
          onPress={() => { }}
        >
          <MixIcon />
        </ItemWrapper>

        <ItemWrapper
          onPress={() => { }}
          style={{
            backgroundColor: colors.mainGreen,
            borderRadius: 999,
            padding: 10,
          }}
        >
          <ThemedView style={{ left: 2 }}>
            <PlayIcon />
          </ThemedView>
        </ItemWrapper>
      </ThemedView>

    </ThemedView>
  );
};

export default InteractiveSection;