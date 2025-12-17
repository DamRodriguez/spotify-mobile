import OptimizedImage from '@/components/image/OptimizedImage';
import ItemWrapper from '@/components/other/ItemWrapper';
import ListFooterSpinner from '@/components/other/ListFooterSpinner';
import ThemedText from '@/components/themed/ThemedText';
import ThemedView from '@/components/themed/ThemedView';
import { flashListDefaults } from '@/config/flashListDefaults';
import { colors } from '@/themes/colors';
import { fontSize } from '@/themes/fontSize';
import { FlashList } from '@shopify/flash-list';
import { ImageSourcePropType, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    gap: 10
  },
  title: {
    color: colors.neutral[1000],
    fontSize: fontSize.h6,
    fontWeight: 600
  },
  itemContainer: {
    width: 140,
    gap: 10
  },
  itemImage: {
    backgroundColor: "#fff",
    borderRadius: 6,
    width: 140,
    height: 140
  },
  itemTitle: {
    color: colors.neutral[1000],
    fontSize: fontSize.b1
  },
  itemSubtitle: {
    color: colors.quaternary[300],
    fontSize: fontSize.b2
  },
  itemTextContainer: {
    gap: 4
  }
});

export type HorizontalListTitleAndTextData = {
  id: number;
  image: string | ImageSourcePropType;
  title: string;
  subtitle: string;
}

type HorizontalListTitleAndTextProps = {
  title: string;
  data: HorizontalListTitleAndTextData[];
}

const HorizontalListTitleAndText = (props: HorizontalListTitleAndTextProps) => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText
        style={styles.title}
      >
        {props.title}
      </ThemedText>

      <FlashList
        {...flashListDefaults}
        data={props.data}
        horizontal
        onEndReached={() => { }}
        keyExtractor={(_, index) => String(index)}
        ItemSeparatorComponent={() => <ThemedView style={{ width: 15 }} />}
        contentContainerStyle={{

        }}
        ListFooterComponent={
          <ListFooterSpinner isLoadingMore={false} />
        }
        ListEmptyComponent={<></>}
        renderItem={({ item, index }) => (
          <ItemWrapper
            key={index}
            style={styles.itemContainer}
          >
            <OptimizedImage
              source={item.image}
              style={styles.itemImage}
            />
            <ThemedView style={styles.itemTextContainer}>
              <ThemedText
                numberOfLines={1}
                style={styles.itemTitle}
              >
                {item.title}
              </ThemedText>
              <ThemedText
                numberOfLines={1}
                style={styles.itemSubtitle}
              >
                {item.subtitle}
              </ThemedText>
            </ThemedView>
          </ItemWrapper>
        )}
      />
    </ThemedView>
  );
};

export default HorizontalListTitleAndText;