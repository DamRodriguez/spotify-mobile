import ItemWrapper from "@/components/other/ItemWrapper";
import ThemedText from "@/components/themed/ThemedText";
import { colors } from "@/themes/colors";
import { fontSize } from "@/themes/fontSize";
import { FlashList } from "@shopify/flash-list";
import { StyleSheet } from "react-native";
import OptimizedImage from "@/components/image/OptimizedImage";
import { flashListDefaults } from "@/config/flashListDefaults";
import { recentMusicData } from "@/data/home";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.quaternary[600],
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    overflow: "hidden",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 5
  },
  text: {
    color: colors.neutral[1000],
    fontWeight: 600,
    fontSize: fontSize.b3,
    width: "55%",
  }
});

const RecentMusicSection = () => {
  return (
    <FlashList
      {...flashListDefaults}
      data={recentMusicData}
      keyExtractor={(_, index) => String(index)}
      numColumns={2}
      renderItem={({ item }) => {
        const gap = 8;
        return (
          <ItemWrapper
            style={[{
              marginRight: item.id % 2 === 0 ? 0 : gap / 2,
              marginLeft: item.id % 2 === 0 ? gap / 2 : 0,
              marginBottom: gap
            }, styles.container]}
          >
            <OptimizedImage
              source={item.image}
              style={[{

              }, styles.image]}
            />
            <ThemedText
              numberOfLines={2}
              style={[{}, styles.text]}>
              {item.text}
            </ThemedText>
          </ItemWrapper>
        )
      }}
    />
  );
};

export default RecentMusicSection;