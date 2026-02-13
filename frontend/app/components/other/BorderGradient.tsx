import { LinearGradient } from "expo-linear-gradient";
import { Dimensions, StyleProp, ViewStyle } from "react-native";

type BorderGradientDirections = "left" | "right" | "top" | "bottom";

type BorderGradientProps = {
  direction: BorderGradientDirections;
  shadowDistance?: number;
  shadowSize?: number;
  shadowColor?: string;
  style?: StyleProp<ViewStyle>;
  heightFull?: boolean;
  widthFull?: boolean;
}

const BorderGradient = (props: BorderGradientProps) => {
  const sizes = Dimensions.get("window");

  const getSize = () => {
    if (props.shadowSize) return props.shadowSize;
    if (props.heightFull) return sizes.height;
    if (props.widthFull) return sizes.width;
  };

  const shadowConfig = {
    color: props.shadowColor ?? "rgba(0,0,0,0.5)",
    distance: props.shadowDistance ?? 100,
    size: getSize(),
  }

  const verticalDirection = props.direction === "top" || props.direction === "bottom";

  const isReverse = props.direction === "right" || props.direction === "bottom";

  const colors = isReverse
    ? ["transparent", shadowConfig.color] as const
    : [shadowConfig.color, "transparent"] as const;

  const getContainerStyle = (direction: BorderGradientDirections) => {
    switch (direction) {
      case "left":
        return {
          left: 0,
          top: 0,
          width: shadowConfig.distance,
          height: shadowConfig.size
        };
      case "right":
        return {
          right: 0,
          top: 0,
          width: shadowConfig.distance,
          height: shadowConfig.size
        };
      case "bottom":
        return {
          bottom: 0,
          left: 0,
          height: shadowConfig.distance,
          width: shadowConfig.size
        };
      case "top":
        return {
          top: 0,
          left: 0,
          height: shadowConfig.distance,
          width: shadowConfig.size
        };
    }
  };

  return (
    <LinearGradient
      colors={colors}
      start={{ x: 0, y: 0 }}
      end={{ x: verticalDirection ? 0 : 1, y: verticalDirection ? 1 : 0 }}
      style={[{ position: "absolute" }, getContainerStyle(props.direction)]}
    />
  );
};

export default BorderGradient;