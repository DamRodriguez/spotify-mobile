import { Image } from "expo-image";
import type { ImageSourcePropType, ImageStyle, StyleProp } from "react-native";

type OptimizedImageProps = {
  source: string | ImageSourcePropType;
  style?: StyleProp<ImageStyle>;
  contentFit?: "cover" | "contain" | "fill" | "scale-down";
  transitionDuration?: number;
  priority?: "low" | "normal" | "high";
  cachePolicy?: "none" | "disk" | "memory" | "memory-disk";
  blurhash?: string;
  bgTransparent?: boolean;
};

const OptimizedImage = ({
  source,
  style,
  contentFit = "cover",
  transitionDuration = 200,
  priority = "high",
  cachePolicy = "memory-disk",
  blurhash,
  bgTransparent,
}: OptimizedImageProps) => {
  return (
    <Image
      source={source}
      contentFit={contentFit}
      transition={transitionDuration}
      priority={priority}
      cachePolicy={cachePolicy}
      placeholder={blurhash ? { blurhash } : undefined}
      placeholderContentFit="cover"
      style={[{
        backgroundColor: bgTransparent ? "transparent" : "rgba(159, 159, 159, 0.34)",
      }, style]}
    />
  );
};

export default OptimizedImage;
