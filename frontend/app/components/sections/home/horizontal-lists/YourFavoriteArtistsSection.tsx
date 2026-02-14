import { favoriteArtistsItems } from '@/data/home';
import HorizontalBaseListWithTitle from '@/components/lists/HorizontalBaseListWithTitle';
import ItemWrapper from '@/components/other/ItemWrapper';
import OptimizedImage from '@/components/image/OptimizedImage';
import ThemedText from '@/components/themed/ThemedText';
import { colors } from '@/themes/colors';
import { fontSize } from '@/themes/fontSize';
import { ImageSourcePropType, StyleSheet } from 'react-native';
import { ROUTES } from '@/navigation/routes';

const styles = StyleSheet.create({
  itemContainer: {
    width: 140,
    gap: 10,
    alignItems: "center"
  },
  itemImage: {
    borderRadius: 999,
    width: 140,
    height: 140,
  },
  itemText: {
    color: colors.neutral[1000],
    fontSize: fontSize.b1,
    fontWeight: 500
  }
});

export type HorizontalFavoriteArtistsListData = {
  id: string;
  image: string | ImageSourcePropType;
  artistName: string;
}

const YourFavoriteArtistsSection = () => {
  return (
    <HorizontalBaseListWithTitle
      title="Tus artistas favoritos"
      data={favoriteArtistsItems}
      renderItem={({ item, index }) => (
        <ItemWrapper
          key={index}
          style={styles.itemContainer}
          routerLink={`${ROUTES.MAIN.HOME.artistDinamicScreen}/${item.id}`}
        >
          <OptimizedImage
            source={item.image}
            style={styles.itemImage}
          />
          <ThemedText
            numberOfLines={1}
            style={styles.itemText}
          >
            {item.artistName}
          </ThemedText>
        </ItemWrapper>
      )}
    />
  );
};

export default YourFavoriteArtistsSection;