import ItemWrapper from "@/components/other/ItemWrapper";
import ThemedText from "../themed/ThemedText";
import { colors } from "@/themes/colors";
import { fontSize } from "@/themes/fontSize";
import { useState } from "react";
import Animated, {
} from "react-native-reanimated";
import useScalePressAnimation from "@/hooks/useScalePressAnimation";
import useNotification from "@/features/redux/notification/useNotification";
import { StyleProp, ViewStyle } from "react-native";

type FollowingButtonProps = {
  artistName: string;
  isFollowing: boolean;
  containerStyle?: StyleProp<ViewStyle>
};

const AnimatedItemWrapper = Animated.createAnimatedComponent(ItemWrapper);

const FollowingButton = ({ artistName, isFollowing: initialValue, containerStyle }: FollowingButtonProps) => {
  const [isFollowing, setIsFollowing] = useState(initialValue);
  const { animatedStyle, animate } = useScalePressAnimation();
  const { showNotification } = useNotification();

  const handleOnPressButton = () => {
    animate();
    setIsFollowing((prev) => !prev);
    showNotification(
      "info",
      isFollowing ?
        `Entendido, ya no estás siguiendo a ${artistName}.`
        :
        `Entendido, estás siguiendo a ${artistName}.`
    )
  };

  return (
    <AnimatedItemWrapper
      onPress={handleOnPressButton}
      style={[
        {
          borderColor: isFollowing
            ? colors.neutral[1000]
            : colors.softGray,
          borderWidth: 1,
          paddingVertical: 6,
          paddingHorizontal: 12,
          borderRadius: 6,
        },
        animatedStyle,
        containerStyle
      ]}
    >
      <ThemedText
        style={{
          color: colors.neutral[1000],
          fontWeight: "600",
          fontSize: fontSize.b2,
        }}
      >
        {isFollowing ? "Siguiendo" : "Seguir"}
      </ThemedText>
    </AnimatedItemWrapper>
  );
};

export default FollowingButton;
