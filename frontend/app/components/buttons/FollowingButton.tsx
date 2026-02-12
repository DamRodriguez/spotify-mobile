import ItemWrapper from "@/components/other/ItemWrapper";
import ThemedText from "../themed/ThemedText";
import { colors } from "@/themes/colors";
import { fontSize } from "@/themes/fontSize";
import { useState } from "react";

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

type FollowingButtonProps = {
  artistId: string;
  isFollowing: boolean;
};

const AnimatedItemWrapper = Animated.createAnimatedComponent(ItemWrapper);

const FollowingButton = ({ artistId, isFollowing: initialValue }: FollowingButtonProps) => {
  const [isFollowing, setIsFollowing] = useState(initialValue);

  const scale = useSharedValue(1);

  const handleOnPressButton = () => {
    setIsFollowing((prev) => !prev);

    scale.value = withTiming(1.05, { duration: 120 }, () => {
      scale.value = withTiming(1, { duration: 120 });
    });
  };

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

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
