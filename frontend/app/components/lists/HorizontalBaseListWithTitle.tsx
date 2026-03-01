import ListFooterSpinner from '@/components/other/ListFooterSpinner';
import ThemedText from '@/components/themed/ThemedText';
import ThemedView from '@/components/themed/ThemedView';
import { flashListDefaults } from '@/config/flashListDefaults';
import { colors } from '@/themes/colors';
import { fontSize } from '@/themes/fontSize';
import { FlashList, ListRenderItem } from '@shopify/flash-list';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    gap: 10,
  },
  title: {
    color: colors.neutral[1000],
    fontSize: fontSize.h6,
    fontWeight: 800,
  },
});

type WithId = {
  id: string;
};

type HorizontalBaseListWithTitleProps<T extends WithId> = {
  title: string;
  data: T[];
  renderItem: ListRenderItem<T>;
};

function HorizontalBaseListWithTitle<T extends WithId>(
  props: HorizontalBaseListWithTitleProps<T>
) {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>
        {props.title}
      </ThemedText>

      <FlashList<T>
        {...flashListDefaults}
        data={props.data}
        horizontal
        onEndReached={() => { }}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => (
          <ThemedView style={{ width: 15 }} />
        )}
        ListFooterComponent={
          <ListFooterSpinner isLoadingMore={false} />
        }
        ListEmptyComponent={<></>}
        renderItem={props.renderItem}
      />
    </ThemedView>
  );
}

export default HorizontalBaseListWithTitle;
