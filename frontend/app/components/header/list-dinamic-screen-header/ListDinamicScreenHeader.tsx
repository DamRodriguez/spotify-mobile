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
import { Dimensions, StyleProp, ViewStyle } from "react-native";
import BorderGradient from "@/components/other/BorderGradient";

type ListDinamicScreenHeaderProps = {
  title: string;
  showTitle: boolean;
  headerColor: string;
  containerStyle?: StyleProp<ViewStyle>;
  iconBgColor?: string;
  absolute?: boolean;
};

const ListDinamicScreenHeader = ({
  title,
  showTitle,
  headerColor,
  containerStyle,
  iconBgColor,
  absolute
}: ListDinamicScreenHeaderProps) => {
  const sizes = Dimensions.get("window");
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
          zIndex: 10,
        },
        headerStyle,
        containerStyle,
        absolute && {
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
        }
      ]}
    >
      <BorderGradient
        direction="bottom"
        shadowSize={sizes.width}
        style={{ elevation: 20 }}
        hideShadow={!showTitle}
      />
      <IconButton
        onPress={() => router.back()}
        icon={<BackIcon />}
        bgColor={iconBgColor ?? showTitle ? "transparent" : colors.opaqueBlack}
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
    </Animated.View >
  );
};

export default ListDinamicScreenHeader;
