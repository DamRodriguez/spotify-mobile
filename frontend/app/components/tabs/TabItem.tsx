import { useCallback, useEffect, Dispatch, SetStateAction } from "react";
import { TouchableOpacity } from "react-native";
import ThemedText from "@/components/themed/ThemedText";
import { buttons } from "@/constants/buttons";
import { colors } from "@/themes/colors";
import { fontSize } from "@/themes/fontSize";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import ThemedView from "@/components/themed/ThemedView";

type TabItemProps = {
  index: number;
  name: string;
  title: string;
  icon: React.ReactNode;
  isFocused: boolean;
  onPress: (name: string) => void;
  isCreateModalOpen: boolean;
  setIsCreateModalOpen: Dispatch<SetStateAction<boolean>>;
};

const TabItem = ({
  index,
  name,
  title,
  icon,
  isFocused,
  onPress,
  isCreateModalOpen,
  setIsCreateModalOpen
}: TabItemProps) => {

  const isCreateTab = index === 3;

  const rotation = useSharedValue(0);
  const translateY = useSharedValue(0);
  const scale = useSharedValue(1);
  const textOpacity = useSharedValue(1);

  const handlePress = useCallback(() => {
    if (isCreateTab) {
      setIsCreateModalOpen(prev => !prev);
      return;
    }

    if (isCreateModalOpen) {
      setIsCreateModalOpen(false);
    }

    onPress(name);
  }, [isCreateTab, name, onPress, isCreateModalOpen, setIsCreateModalOpen]);

  useEffect(() => {
    if (!isCreateTab) return;

    rotation.value = withTiming(isCreateModalOpen ? 45 : 0, { duration: 250 });
    translateY.value = withTiming(isCreateModalOpen ? 9 : 0, { duration: 250 });
    scale.value = withTiming(isCreateModalOpen ? 1.15 : 1, { duration: 250 });
    textOpacity.value = withTiming(isCreateModalOpen ? 0 : 1, { duration: 200 });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCreateModalOpen]);

  const animatedIconStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateY: translateY.value },
        { scale: scale.value },
        { rotate: `${rotation.value}deg` },
      ],
    };
  });

  const animatedTextStyle = useAnimatedStyle(() => {
    return {
      opacity: textOpacity.value,
    };
  });

  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={buttons.opacity}
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ThemedView
        style={{
          width: 35,
          height: 35,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {isCreateTab ? (
          <Animated.View
            style={[
              {
                width: "100%",
                height: "100%",
                borderRadius: 99,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: isCreateModalOpen
                  ? colors.neutral[1000]
                  : "transparent",
              },
              animatedIconStyle,
            ]}
          >
            {icon}
          </Animated.View>
        ) : (
          <>
            {icon}
          </>
        )}
      </ThemedView>

      <Animated.View style={animatedTextStyle}>
        <ThemedText
          style={{
            fontSize: fontSize.b4,
            fontWeight: "500",
            color: isFocused && !isCreateModalOpen
              ? colors.neutral[1000]
              : colors.softWhite,
          }}
        >
          {title}
        </ThemedText>
      </Animated.View>
    </TouchableOpacity>
  );
};

export default TabItem;