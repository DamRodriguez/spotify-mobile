import ItemWrapper from "@/components/other/ItemWrapper";
import ThemedText from "@/components/themed/ThemedText";
import { colors } from "@/themes/colors";
import { fontSize } from "@/themes/fontSize";
import { FlashList } from "@shopify/flash-list";
import { StyleSheet } from "react-native";
import likesImg from "@/assets/images/home/recent-music/likes.png"
import OptimizedImage from "@/components/image/OptimizedImage";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.quaternary[600],
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    overflow: "hidden",
  },
  image: {
    width: 60,
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 10
  },
  text: {
    color: colors.neutral[1000],
    fontWeight: "700",
    fontSize: fontSize.b1,
    width: "55%",
  }
});

const RecentMusicSection = () => {
  const recentMusicData = [
    {
      id: 1,
      image: likesImg,
      text: "Tus me gusta"
    },
    {
      id: 2,
      image: "",
      text: "Prueba2"
    },
    {
      id: 3,
      image: "",
      text: "Prueba3"
    },
    {
      id: 4,
      image: "",
      text: "Prueba4"
    },
    {
      id: 5,
      image: "",
      text: "Prueba5"
    },
    {
      id: 6,
      image: "",
      text: "Prueba6"
    }
  ]

  return (
    <FlashList
      data={recentMusicData}
      showsVerticalScrollIndicator={false}
      keyExtractor={item => String(item.id)}
      numColumns={2}
      renderItem={({ item }) => {
        const gap = 15;
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