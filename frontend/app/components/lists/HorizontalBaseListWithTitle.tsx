import ListFooterSpinner from '@/components/other/ListFooterSpinner';
import ThemedText from '@/components/themed/ThemedText';
import ThemedView from '@/components/themed/ThemedView';
import { flashListDefaults } from '@/config/flashListDefaults';
import { colors } from '@/themes/colors';
import { fontSize } from '@/themes/fontSize';
import { FlashList, ListRenderItem } from '@shopify/flash-list';
import { StyleSheet } from 'react-native';
import React from 'react';

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

type HorizontalBaseListWithTitleProps<T> = {
  title: string;
  data: T[];
  renderItem: ListRenderItem<T>;
};

function HorizontalBaseListWithTitle<T>(
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
        keyExtractor={(_, index) => String(index)}
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
