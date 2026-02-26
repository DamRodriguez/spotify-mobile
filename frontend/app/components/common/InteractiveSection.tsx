import PlayButton from "@/components/buttons/PlayButton";
import { VerticalDotsIcon } from "@/components/icons/common";
import { DownloadIcon, MixIcon, ShareIcon } from "@/components/icons/listDinamicPage";
import OptimizedImage from "@/components/image/OptimizedImage";
import ItemWrapper from "@/components/other/ItemWrapper";
import ThemedView from "@/components/themed/ThemedView";
import { colors } from "@/themes/colors";
import FollowingButton from "../buttons/FollowingButton";
import { ImageSourcePropType, StyleProp, ViewStyle } from "react-native";

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
    artistName: string;
    isFollowing: boolean;
  }
  style?: StyleProp<ViewStyle>;
};

const InteractiveSection = (props: InteractiveSectionProps) => {
  return (
    <ThemedView style={[{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }, props.style]}>
      <ThemedView style={{ flexDirection: "row", alignItems: "center", gap: 25 }}>
        <ItemWrapper
          onPress={() => { }}
          style={{
            borderWidth: 2,
            borderColor: colors.opaqueWhite,
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
            artistName={props.followingButtonVariantProps.artistName}
            isFollowing={props.followingButtonVariantProps.isFollowing}
          />
        )}

        <ItemWrapper onPress={() => { }}>
          <VerticalDotsIcon size={28} />
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
