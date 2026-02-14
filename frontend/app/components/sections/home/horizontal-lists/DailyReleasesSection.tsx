import { dailyReleasesItems } from '@/data/home';
import HorizontalBaseListWithTitle from '@/components/lists/HorizontalBaseListWithTitle';
import ItemWrapper from '@/components/other/ItemWrapper';
import OptimizedImage from '@/components/image/OptimizedImage';
import ThemedText from '@/components/themed/ThemedText';
import { ROUTES } from '@/navigation/routes';
import { colors } from '@/themes/colors';
import { fontSize } from '@/themes/fontSize';
import { ImageSourcePropType, StyleSheet } from 'react-native';
import { HomeListSectionType } from '@/types/homeListSection';

const styles = StyleSheet.create({
  itemContainer: {
    width: 140,
    gap: 10
  },
  itemImage: {
    borderRadius: 6,
    width: 140,
    height: 140
  },
  itemText: {
    color: colors.opaqueWhite,
    fontSize: fontSize.b2
  }
});

export type HorizontalDailyReleasesListData = {
  id: string;
  image: string | ImageSourcePropType;
  description: string;
}

const DailyReleasesSection = () => {
  const sectionType: HomeListSectionType = "daily-releases";

  return (
    <HorizontalBaseListWithTitle
      title="Viernes de lanzamientos"
      data={dailyReleasesItems}
      renderItem={({ item, index }) => (
        <ItemWrapper
          key={index}
          style={styles.itemContainer}
          routerLink={`${ROUTES.MAIN.HOME.listDinamicScreen}/${sectionType}/${item.id}`}
        >
          <OptimizedImage
            source={item.image}
            style={styles.itemImage}
          />
          <ThemedText
            numberOfLines={2}
            style={styles.itemText}
          >
            {item.description}
          </ThemedText>
        </ItemWrapper>
      )}
    />
  )
};

export default DailyReleasesSection;