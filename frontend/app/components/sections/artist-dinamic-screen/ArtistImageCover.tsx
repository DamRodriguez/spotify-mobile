import OptimizedImage from "@/components/image/OptimizedImage";
import { colors } from "@/themes/colors";
import { Dimensions, ImageSourcePropType } from "react-native";
import Animated, {
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

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
    <>
      <OptimizedImage
        source={artistCoverImage}
        style={{
          width: sizes.width,
          position: "absolute",
          height
        }}
      />
      <Animated.View
        style={[
          {
            width: sizes.width,
            position: "absolute",
            backgroundColor: colors.background,
            height
          },
          fadeStyle,
        ]}
      />
    </>
  );
};

export default ArtistImageCover;
