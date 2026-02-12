import { useEffect } from "react";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolateColor,
} from "react-native-reanimated";
import IconButton from "@/components/buttons/IconButton";
import { BackIcon } from "@/components/icons/common";
import ThemedText from "@/components/themed/ThemedText";
import { colors } from "@/themes/colors";
import { fontSize } from "@/themes/fontSize";
import { useRouter } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StyleProp, ViewStyle } from "react-native";

type ListDinamicScreenHeaderProps = {
  title: string;
  showTitle: boolean;
  headerColor: string;
  containerStyle?: StyleProp<ViewStyle>;
  iconBgColor?: string;
};

const ListDinamicScreenHeader = ({
  title,
  showTitle,
  headerColor,
  containerStyle,
  iconBgColor,
}: ListDinamicScreenHeaderProps) => {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  const progress = useSharedValue<number>(0);

  useEffect(() => {
    progress.value = withTiming(showTitle ? 1 : 0, {
      duration: 200,
    });
  }, [showTitle, progress]);

  const headerStyle = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(
      progress.value,
      [0, 1],
      ["transparent", headerColor]
    ),
  }));

  const titleStyle = useAnimatedStyle(() => ({
    opacity: progress.value,
  }));

  return (
    <Animated.View
      style={[
        {
          paddingTop: insets.top,
          paddingHorizontal: 16,
          paddingBottom: 8,
          flexDirection: "row",
          alignItems: "center",
          gap: 50,
          elevation: 999,
          zIndex: 10,
        },
        headerStyle,
        containerStyle
      ]}
    >
      <IconButton
        onPress={() => router.back()}
        icon={<BackIcon />}
        bgColor={iconBgColor}
      />
      <Animated.View
        style={[
          {
            flex: 1,
            pointerEvents: "none",
          },
          titleStyle,
        ]}
      >
        <ThemedText
          numberOfLines={1}
          style={{
            color: colors.neutral[1000],
            fontSize: fontSize.h7,
            fontWeight: "700",
          }}
        >
          {title}
        </ThemedText>
      </Animated.View>
    </Animated.View>
  );
};

export default ListDinamicScreenHeader;
