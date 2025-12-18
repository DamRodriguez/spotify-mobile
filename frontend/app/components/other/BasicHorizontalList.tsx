import OptimizedImage from '@/components/image/OptimizedImage';
import ItemWrapper from '@/components/other/ItemWrapper';
import ListFooterSpinner from '@/components/other/ListFooterSpinner';
import ThemedText from '@/components/themed/ThemedText';
import ThemedView from '@/components/themed/ThemedView';
import { flashListDefaults } from '@/config/flashListDefaults';
import { ROUTES } from '@/navigation/routes';
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
  itemText: {
    color: colors.quaternary[300],
    fontSize: fontSize.b2
  }
});

export type BasicHorizontalListData = {
  id: number;
  image: string | ImageSourcePropType;
  text: string;
}

type BasicHorizontalListProps = {
  title: string;
  data: BasicHorizontalListData[];
}

const BasicHorizontalList = (props: BasicHorizontalListProps) => {
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
        ListFooterComponent={<ListFooterSpinner isLoadingMore={false} />}
        ListEmptyComponent={<></>}
        renderItem={({ item, index }) => (
          <ItemWrapper
            key={index}
            style={styles.itemContainer}
            routerLink={`${ROUTES.MAIN.HOME.listDinamicPage}/${item.id}`}
          >
            <OptimizedImage
              source={item.image}
              style={styles.itemImage}
            />
            <ThemedText
              numberOfLines={2}
              style={styles.itemText}
            >
              {item.text}
            </ThemedText>
          </ItemWrapper>
        )}
      />
    </ThemedView>
  );
};

export default BasicHorizontalList;