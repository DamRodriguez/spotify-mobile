import ItemWrapper from "@/components/other/ItemWrapper";
import SmallTitle from "@/components/other/SmallTitle";
import ThemedText from "@/components/themed/ThemedText";
import ThemedView from "@/components/themed/ThemedView";
import { colors } from "@/themes/colors";
import { fontSize } from "@/themes/fontSize";
import AlbumItem, { AlbumItemData } from "./AlbumItem";
import TextButton from "@/components/buttons/TextButton";
import { ROUTES } from "@/navigation/routes";
import { useRouter } from "expo-router";

type PopularReleasesSectionProps = {
  albums: AlbumItemData[],
  artistId: string;
}

const PopularReleasesSection = (props: PopularReleasesSectionProps) => {
  const router = useRouter();
  const handleSeeDiscographyPress = () => {
    router.push(ROUTES.MAIN.HOME.artistDinamicScreen.albums(props.artistId));
  }

  return (
    <ThemedView style={{ gap: 20 }}>
      <ThemedView
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 5,
        }}
      >
        <SmallTitle title="Lanzamientos populares" />
        <ItemWrapper onPress={handleSeeDiscographyPress}>
          <ThemedText
            style={{
              color: colors.softWhite,
              fontSize: fontSize.b3,
              fontWeight: 600
            }}>
            Mostrar todo
          </ThemedText>
        </ItemWrapper>
      </ThemedView>

      <ThemedView style={{ gap: 15 }}>
        <ThemedView style={{ gap: 15 }}>
          {props.albums.slice(0, 4).map((album, index) => {
            return (
              <AlbumItem
                key={index}
                data={{
                  id: album.id,
                  image: album.image,
                  title: album.title,
                  releaseDate: album.releaseDate,
                  type: album.type
                }}
              />
            )
          })}
        </ThemedView>

        <TextButton
          onPress={handleSeeDiscographyPress}
          text="Ver discografía"
        />
      </ThemedView>
    </ThemedView>
  );
};

export default PopularReleasesSection;