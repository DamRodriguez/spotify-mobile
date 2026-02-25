import { AlbumSection, OtherSection } from "@/app/(app)/(player-group)/(drawer-group)/(tabs)/home/list-dinamic-screen/[type]/[id]";
import OptimizedImage from "@/components/image/OptimizedImage";
import ThemedText from "@/components/themed/ThemedText";
import ThemedView from "@/components/themed/ThemedView";
import { colors } from "@/themes/colors";
import { fontSize } from "@/themes/fontSize";
import spotifyImage from '@/assets/images/logos/spotify-logo.png';
import userImage from "@/assets/images/other/user.png"
import { PlusIcon } from "@/components/icons/horizontalButtons";
import ItemWrapper from "@/components/other/ItemWrapper";
import { HomeListSectionType } from "@/types/homeListSection";
import { useRouter } from "expo-router";
import { ROUTES } from "@/navigation/routes";

type UsernameSectionProps =
  {
    sectionType: "album",
    artist: {
      id: AlbumSection["id"],
      image: AlbumSection["artist"]["image"],
      name: AlbumSection["artist"]["name"]
    }
  }
  |
  {
    sectionType: OtherSection["sectionType"],
    artist?: {
      image: undefined,
      name: undefined
    }
  };

const UsernameSection = ({ sectionType, artist }: UsernameSectionProps) => {
  const router = useRouter();

  const getImageSource = (sectionType: HomeListSectionType) => {
    if (sectionType === "playlist") return userImage;
    if (sectionType === "album") return artist?.image;
    return spotifyImage;
  }

  const getText = (sectionType: HomeListSectionType) => {
    if (sectionType === "playlist") return "username";
    if (sectionType === "album") return artist?.name;
    return "Spotify";
  }

  const handleOnPress = () => {
    if (sectionType === "album") {
      router.push(ROUTES.MAIN.HOME.artistDinamicScreen.index(artist.id));
    }
    if (sectionType === "playlist") {

    }
  }

  return (
    <ItemWrapper
      onPress={handleOnPress}
      style={{ flexDirection: "row", alignItems: "center", gap: 8 }}
    >
      <ThemedView style={{ flexDirection: "row" }}>
        {sectionType === "playlist" && (
          <ThemedView style={{ alignItems: "center", justifyContent: "center" }}>
            <ThemedView
              style={{
                position: "absolute",
                left: -2,
                width: 30,
                height: 30,
                borderRadius: 99,
                backgroundColor: colors.background,
                zIndex: 1
              }}
            />
            <ThemedView
              style={{
                width: 25,
                height: 25,
                borderRadius: 99,
                backgroundColor: colors.quaternary[600],
                alignItems: "center",
                justifyContent: "center",
                zIndex: 10,
              }}
            >
              <PlusIcon size={20} />
            </ThemedView>
          </ThemedView>
        )}
        <OptimizedImage
          source={getImageSource(sectionType)}
          style={{
            width: 25,
            height: 25,
            borderRadius: 999,
            marginLeft: sectionType === "playlist" ? -5 : 0,
          }}
        />
      </ThemedView>
      <ThemedText style={{
        color: colors.neutral[1000],
        fontSize: fontSize.b2,
        fontWeight: 600
      }}>
        {getText(sectionType)}
      </ThemedText>
    </ItemWrapper>
  );
};

export default UsernameSection;