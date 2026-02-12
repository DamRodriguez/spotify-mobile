import OptimizedImage from '@/components/image/OptimizedImage';
import ItemWrapper from '@/components/other/ItemWrapper';
import ThemedText from '@/components/themed/ThemedText';
import ThemedView from '@/components/themed/ThemedView';
import { ROUTES } from '@/navigation/routes';
import { colors } from '@/themes/colors';
import { fontSize } from '@/themes/fontSize';
import { ImageSourcePropType, StyleSheet } from 'react-native';
import { yourPlaylistsItems } from '@/data/home';
import HorizontalBaseListWithTitle from '@/components/lists/HorizontalBaseListWithTitle';
import { HomeListSectionType } from '@/types/homeListSection';

const styles = StyleSheet.create({
  itemContainer: {
    width: 140,
    gap: 10
  },
  itemImage: {
    backgroundColor: "#fff",
    borderRadius: 6,
    width: 140,
    height: 140,
    flexWrap: "wrap",
    overflow: "hidden"
  },
  itemTitle: {
    color: colors.neutral[1000],
    fontSize: fontSize.b1,
    fontWeight: 500
  },
  itemSubtitle: {
    color: colors.quaternary[300],
    fontSize: fontSize.b2
  },
  itemTextContainer: {
    gap: 4
  },
  arrayImage: {
    width: 70,
    height: 70
  }
});

export type HorizontalPlaylistData = {
  id: string;
  image: string | ImageSourcePropType | ImageSourcePropType[];
  artistName: string;
}

const YourPlaylistsSection = () => {
  const username = "username";
  const sectionType: HomeListSectionType = "playlist";

  return (
    <HorizontalBaseListWithTitle
      title="Tus playlists"
      data={yourPlaylistsItems}
      renderItem={({ item, index }) => (
        <ItemWrapper
          key={index}
          style={styles.itemContainer}
          routerLink={`${ROUTES.MAIN.HOME.listDinamicScreen}/${sectionType}/${item.id}`}
        >
          {item.image instanceof Array ? (
            <ThemedView
              style={styles.itemImage}
            >
              {item.image.map((image, index) => (
                <OptimizedImage
                  key={index}
                  source={image}
                  style={styles.arrayImage}
                />
              ))}
            </ThemedView>
          ) : (
            <OptimizedImage
              source={item.image}
              style={styles.itemImage}
            />
          )}
          <ThemedView style={styles.itemTextContainer}>
            <ThemedText
              numberOfLines={1}
              style={styles.itemTitle}
            >
              {item.artistName}
            </ThemedText>
            <ThemedText
              numberOfLines={1}
              style={styles.itemSubtitle}
            >
              {username}
            </ThemedText>
          </ThemedView>
        </ItemWrapper>
      )}
    />
  );
};

export default YourPlaylistsSection;