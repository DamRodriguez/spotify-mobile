import { useEffect, useRef } from "react";
import { Animated } from "react-native";
import IconButton from "@/components/buttons/IconButton";
import { BackIcon } from "@/components/icons/common";
import ThemedText from "@/components/themed/ThemedText";
import { colors } from "@/themes/colors";
import { fontSize } from "@/themes/fontSize";
import { useRouter } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type ListDinamicPageHeaderProps = {
  title: string;
  showTitle: boolean;
};

const ListDinamicPageHeader = ({
  title,
  showTitle,
}: ListDinamicPageHeaderProps) => {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  const opacityAnim = useRef(new Animated.Value(0)).current;
  const bgAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(opacityAnim, {
        toValue: showTitle ? 1 : 0,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(bgAnim, {
        toValue: showTitle ? 1 : 0,
        duration: 200,
        useNativeDriver: false,
      }),
    ]).start();
  }, [showTitle, bgAnim, opacityAnim]);

  const backgroundColor = bgAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["transparent", colors.softSlate],
  });

  return (
    <Animated.View
      style={{
        paddingTop: insets.top,
        padding: 16,
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        backgroundColor,
        elevation: 999,
      }}
    >
      <IconButton
        onPress={() => {
          router.back();
        }}
        icon={<BackIcon />}
      />

      <Animated.View
        style={{
          opacity: opacityAnim,
        }}
      >
        <ThemedText
          style={{
            color: colors.neutral[1000],
            fontSize: fontSize.h6,
            fontWeight: 700,
          }}
          numberOfLines={1}
        >
          {title}
        </ThemedText>
      </Animated.View>
    </Animated.View>
  );
};

export default ListDinamicPageHeader;
