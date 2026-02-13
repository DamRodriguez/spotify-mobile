import OptimizedImage from "@/components/image/OptimizedImage";
import { colors } from "@/themes/colors";
import { Dimensions, ImageSourcePropType } from "react-native";
import Animated, {
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import BorderGradient from "@/components/other/BorderGradient";

type ArtistImageCoverProps = {
  bgImageHeight: number;
  scrollY: SharedValue<number>;
  artistCoverImage: string | ImageSourcePropType;
};

const ArtistImageCover = ({
  bgImageHeight,
  scrollY,
  artistCoverImage,
}: ArtistImageCoverProps) => {
  const sizes = Dimensions.get("window");
  const insets = useSafeAreaInsets();
  const height = insets.top + bgImageHeight;

  const fadeStyle = useAnimatedStyle(() => ({
    opacity: interpolate(scrollY.value, [0, bgImageHeight / 1.5], [0, 1], "clamp"),
  }));

  return (
    <Animated.View
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: sizes.width,
        height,
        overflow: "hidden",
      }}
    >
      <OptimizedImage
        source={artistCoverImage}
        style={{
          width: "100%",
          height: "100%",
        }}
      />
      <BorderGradient
        direction="left"
        shadowSize={height}
      />
      <BorderGradient
        direction="right"
        shadowSize={height}
      />
      <BorderGradient
        direction="bottom"
        shadowSize={sizes.width}
        style={{ elevation: 20 }}
      />
      <Animated.View
        style={[
          {
            position: "absolute",
            top: 0,
            left: 0,
            width: sizes.width,
            height,
            backgroundColor: colors.background,
          },
          fadeStyle,
        ]}
      />
    </Animated.View>
  );

};

export default ArtistImageCover;
