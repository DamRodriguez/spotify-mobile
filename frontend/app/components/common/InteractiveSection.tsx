import PlayButton from "@/components/buttons/PlayButton";
import { VerticalDotsIcon } from "@/components/icons/common";
import { DownloadIcon, MixIcon, ShareIcon } from "@/components/icons/listDinamicPage";
import OptimizedImage from "@/components/image/OptimizedImage";
import ItemWrapper from "@/components/other/ItemWrapper";
import ThemedView from "@/components/themed/ThemedView";
import { colors } from "@/themes/colors";
import FollowingButton from "../buttons/FollowingButton";
import { ImageSourcePropType } from "react-native";

type InteractiveSectionProps = {
  sectionId: string;
  videoImage: string | ImageSourcePropType;
  isPlayButtonSticky?: boolean;
  onVideoButtonPress: () => void;
  onDownloadButtonPress: () => void;
  onShareButtonPress: () => void;
  onOptionsButtonPress: () => void;
  onRemixButtonPress: () => void;
  onPlayButtonPress: () => void;
  followingButtonVariantProps?: {
    artistId: string;
    isFollowing: boolean;
  }
};

const InteractiveSection = (props: InteractiveSectionProps) => {
  return (
    <ThemedView style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
      <ThemedView style={{ flexDirection: "row", alignItems: "center", gap: 25 }}>
        <ItemWrapper
          onPress={() => { }}
          style={{
            borderWidth: 2,
            borderColor: colors.softGray,
            borderRadius: 10,
            padding: 3,
          }}
        >
          <OptimizedImage
            source={props.videoImage}
            style={{
              height: 35,
              width: 25,
              borderRadius: 6,
            }}
          />
        </ItemWrapper>

        {!props.followingButtonVariantProps && (
          <>
            <ItemWrapper onPress={() => { }}>
              <DownloadIcon />
            </ItemWrapper>

            <ItemWrapper onPress={() => { }}>
              <ShareIcon />
            </ItemWrapper>
          </>
        )}

        {props.followingButtonVariantProps && (
          <FollowingButton
            artistId={props.followingButtonVariantProps.artistId}
            isFollowing={props.followingButtonVariantProps.isFollowing}
          />
        )}

        <ItemWrapper onPress={() => { }}>
          <VerticalDotsIcon size={32} />
        </ItemWrapper>
      </ThemedView>

      <ThemedView style={{ flexDirection: "row", alignItems: "center", gap: 15 }}>
        <ItemWrapper onPress={() => { }}>
          <MixIcon />
        </ItemWrapper>

        <ThemedView
          style={{
            pointerEvents: props.isPlayButtonSticky ? "none" : "auto",
          }}
        >
          <PlayButton
            onPress={props.onPlayButtonPress}
            sectionId={props.sectionId}
          />
        </ThemedView>
      </ThemedView>
    </ThemedView>
  );
};

export default InteractiveSection;
