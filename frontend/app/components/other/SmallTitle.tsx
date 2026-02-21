import ThemedText from "@/components/themed/ThemedText";
import { colors } from "@/themes/colors";
import { fontSize } from "@/themes/fontSize";

type SmallTitleProps = {
  title: string;
}

const SmallTitle = (props: SmallTitleProps) => {
  return (
    <ThemedText
      style={{
        fontSize: fontSize.h7,
        color: colors.neutral[1000],
        fontWeight: 800
      }}
    >
      {props.title}
    </ThemedText>
  );
};

export default SmallTitle;