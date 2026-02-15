import { colors } from "@/themes/colors";
import ItemWrapper from "../other/ItemWrapper";
import ThemedText from "../themed/ThemedText";
import { fontSize } from "@/themes/fontSize";

type TextButtonProps = {
  onPress: () => void;
  text: string;
}

const TextButton = (props: TextButtonProps) => {
  return (
    <ItemWrapper
      onPress={props.onPress}
      style={{
        borderWidth: 1,
        borderColor: colors.softGray,
        paddingVertical: 8,
        paddingHorizontal: 12,
        alignSelf: "center",
        borderRadius: 999,
        alignItems: "center"
      }}
    >
      <ThemedText
        style={{
          color: colors.neutral[1000],
          fontSize: fontSize.b3,
          fontWeight: 600,
        }}
      >
        {props.text}
      </ThemedText>
    </ItemWrapper>
  );
};

export default TextButton;