import ItemWrapper from '@/components/other/ItemWrapper';
import ThemedText from '@/components/themed/ThemedText';
import ThemedView from '@/components/themed/ThemedView';
import { colors } from '@/themes/colors';
import { fontSize } from '@/themes/fontSize';

export type CreateModalItemData = {
  icon: React.FC;
  title: string;
  subtitle: string;
  onPress: () => void;
}

type CreateModalItemProps = {
  data: CreateModalItemData;
}

const CreateModalItem = (props: CreateModalItemProps) => {
  const data = props.data;
  const Icon = data.icon;

  return (
    <ItemWrapper
      onPress={data.onPress}
      style={{
        flexDirection: "row",
        alignItems: "center",
        gap: 15,
      }}
    >
      <ThemedView
        style={{
          width: 65,
          height: 65,
          borderRadius: 999,
          backgroundColor: colors.opaqueGray,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Icon />
      </ThemedView>
      <ThemedView
        style={{
          gap: 5,
          flexShrink: 1
        }}
      >
        <ThemedText
          style={{
            color: colors.neutral[1000],
            fontWeight: 800,
            fontSize: fontSize.b1
          }}
        >
          {data.title}
        </ThemedText>
        <ThemedText
          style={{
            color: colors.opaqueWhite,
            fontSize: fontSize.b3,
          }}
        >
          {data.subtitle}
        </ThemedText>
      </ThemedView>
    </ItemWrapper>
  );
};

export default CreateModalItem;