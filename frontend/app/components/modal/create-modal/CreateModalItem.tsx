import ItemWrapper from '@/components/other/ItemWrapper';
import ThemedText from '@/components/themed/ThemedText';
import ThemedView from '@/components/themed/ThemedView';
import { colors } from '@/themes/colors';
import { fontSize } from '@/themes/fontSize';
import { StyleSheet } from 'react-native';

export type CreateModalItemData = {
  icon: React.FC;
  title: string;
  subtitle: string;
  onPress: () => void;
}

type CreateModalItemProps = {
  data: CreateModalItemData;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  iconWrapper: {
    width: 65,
    height: 65,
    borderRadius: 999,
    backgroundColor: colors.opaqueGray,
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    gap: 5,
    flexShrink: 1,
  },
  title: {
    color: colors.neutral[1000],
    fontWeight: "800",
    fontSize: fontSize.b1,
  },
  subtitle: {
    color: colors.opaqueWhite,
    fontSize: fontSize.b3,
  },
});

const CreateModalItem = (props: CreateModalItemProps) => {
  const data = props.data;
  const Icon = data.icon;

  return (
    <ItemWrapper
      onPress={data.onPress}
      style={styles.container}
    >
      <ThemedView style={styles.iconWrapper}>
        <Icon />
      </ThemedView>

      <ThemedView style={styles.textContainer}>
        <ThemedText style={styles.title}>
          {data.title}
        </ThemedText>

        <ThemedText style={styles.subtitle}>
          {data.subtitle}
        </ThemedText>
      </ThemedView>
    </ItemWrapper>
  );
};

export default CreateModalItem;