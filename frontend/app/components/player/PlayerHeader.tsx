import ThemedView from "@/components/themed/ThemedView";
import { DownArrowIcon } from "../icons/player";
import { useRouter } from "expo-router";
import ItemWrapper from "../other/ItemWrapper";
import ThemedText from "../themed/ThemedText";
import { VerticalDotsIcon } from "../icons/common";
import { colors } from "@/themes/colors";
import { fontSize } from "@/themes/fontSize";

type PlayerHeaderProps = {
  fromWhere: string;
  artistName: string;
}

const PlayerHeader = (props: PlayerHeaderProps) => {
  const router = useRouter();

  return (
    <ThemedView
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 10
      }}
    >
      <ItemWrapper
        onPress={() => router.back()}
      >
        <DownArrowIcon />
      </ItemWrapper>

      <ThemedView
        style={{
          alignItems: "center",
          flex: 1,
          gap: 4
        }}
      >
        <ThemedText
          numberOfLines={1}
          style={{
            fontSize: fontSize.b3,
            textTransform: "uppercase",
            color: colors.opaqueWhite
          }}
        >
          Reproduciendo desde {props.fromWhere}
        </ThemedText>
        <ThemedText
          numberOfLines={1}
          style={{
            fontSize: fontSize.b3,
            fontWeight: 600,
            color: colors.neutral[1000]
          }}
        >
          {props.artistName}
        </ThemedText>
      </ThemedView>

      <ItemWrapper
        onPress={() => { }}
      >
        <VerticalDotsIcon color={colors.neutral[900]} size={24} />
      </ItemWrapper>
    </ThemedView>
  );
};

export default PlayerHeader;