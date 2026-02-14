import { ListDinamicScreenDataType } from "@/app/(player-group)/(tabs)/home/list-dinamic-screen/[type]/[id]";
import OptimizedImage from "@/components/image/OptimizedImage";
import ThemedText from "@/components/themed/ThemedText";
import ThemedView from "@/components/themed/ThemedView";
import { colors } from "@/themes/colors";
import { fontSize } from "@/themes/fontSize";
import spotifyImage from '@/assets/images/logos/spotify-logo.png';
import userImage from "@/assets/images/other/user.png"
import { PlusIcon } from "@/components/icons/horizontalButtons";
import ItemWrapper from "@/components/other/ItemWrapper";

type UsernameSectionProps = {
  sectionType: ListDinamicScreenDataType["sectionType"];
}

const UsernameSection = ({ sectionType }: UsernameSectionProps) => {
  return (
    <ItemWrapper
      onPress={() => { }}
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
          source={sectionType === "playlist" ? userImage : spotifyImage}
          style={{
            width: 25,
            height: 25,
            borderRadius: 999,
            marginLeft: -5,
          }}
        />
      </ThemedView>
      <ThemedText style={{
        color: colors.neutral[1000],
        fontSize: fontSize.b2,
        fontWeight: 600
      }}>
        {sectionType === "playlist" ? "username" : "Spotify"}
      </ThemedText>
    </ItemWrapper>
  );
};

export default UsernameSection;