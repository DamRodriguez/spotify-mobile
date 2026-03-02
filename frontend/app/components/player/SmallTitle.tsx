import { fontSize } from '@/themes/fontSize';
import ThemedText from '../themed/ThemedText';
import { colors } from '@/themes/colors';

type SmallTitleProps = {
  title: string;
}

const SmallTitle = (props: SmallTitleProps) => {
  return (
    <ThemedText
      style={{
        fontSize: fontSize.b1,
        fontWeight: 800,
        color: colors.neutral[1000]
      }}
    >
      {props.title}
    </ThemedText>
  );
};

export default SmallTitle;