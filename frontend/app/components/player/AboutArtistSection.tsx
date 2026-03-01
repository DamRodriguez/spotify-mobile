import OptimizedImage from "../image/OptimizedImage";
import ThemedText from "@/components/themed/ThemedText";
import ThemedView from "@/components/themed/ThemedView";
import CommonContainer from "./CommonContainer";
import { colors } from "@/themes/colors";
import { PlayerSongData } from "@/app/(app)/(player-group)/player";
import { formatCompactNumber } from "@/utils/formatCompactNumber";
import { fontSize } from "@/themes/fontSize";
import ItemWrapper from "../other/ItemWrapper";
import BorderGradient from "../other/BorderGradient";
import FollowingButton from "../buttons/FollowingButton";
import { ROUTES } from "@/navigation/routes";

type AboutArtistSectionProps = {
  artistId: string;
  artistName: string;
  image: PlayerSongData["aboutArtist"]["image"];
  monthlyListeners: PlayerSongData["aboutArtist"]["monthlyListeners"];
  textInformation: PlayerSongData["aboutArtist"]["textInformation"];
}

const AboutArtistSection = (props: AboutArtistSectionProps) => {
  return (
    <ItemWrapper
      routerLink={ROUTES.MAIN.HOME.artistDinamicScreen.index(props.artistId)}
    >
      <CommonContainer>

        <OptimizedImage
          source={props.image}
          style={{
            width: "100%",
            height: 200,
          }}
        />
        <BorderGradient
          direction="top"
          heightFull
          shadowDistance={100}
          shadowColor="rgba(0,0,0,0.5)"
        />
        <ThemedView
          style={{
            position: "absolute",
            padding: 20
          }}
        >
          <ThemedText
            style={{
              fontSize: fontSize.b1,
              fontWeight: 800,
              color: colors.neutral[1000]
            }}
          >
            Acerca del artista
          </ThemedText>
        </ThemedView>
        <ThemedView
          style={{ padding: 20, gap: 15 }}
        >
          <ThemedView
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "flex-start"
            }}
          >
            <ThemedView
              style={{ gap: 5 }}
            >
              <ThemedText
                style={{
                  color: colors.neutral[1000],
                  fontWeight: 800,
                  fontSize: fontSize.h7
                }}
              >
                {props.artistName}
              </ThemedText>
              <ThemedView
                style={{
                  flexDirection: "row",
                  alignItems: "flex-end"
                }}
              >
                <ThemedText
                  style={{
                    color: colors.opaqueWhite,
                    fontSize: fontSize.b2
                  }}
                >
                  {formatCompactNumber(props.monthlyListeners)}
                </ThemedText>
                <ThemedText
                  style={{
                    color: colors.opaqueWhite,
                    fontSize: fontSize.b3
                  }}
                >
                  {" "}oyentes mensuales
                </ThemedText>
              </ThemedView>
            </ThemedView>
            <FollowingButton
              artistName={props.artistName}
              isFollowing={false}
              containerStyle={{
                borderRadius: 99
              }}
            />
          </ThemedView>
          <ThemedText
            numberOfLines={4}
            style={{
              color: colors.opaqueWhite,
              fontSize: fontSize.b2
            }}
          >
            {props.textInformation}
          </ThemedText>
        </ThemedView>
      </CommonContainer>
    </ItemWrapper>
  );
};

export default AboutArtistSection;