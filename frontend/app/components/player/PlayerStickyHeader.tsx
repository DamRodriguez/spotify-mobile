import { sizes } from "@/constants/sizes";
import { useEffect } from "react";
import { StyleProp, ViewStyle } from "react-native";
import Animated, { interpolateColor, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import ThemedText from "../themed/ThemedText";
import { colors } from "@/themes/colors";
import { fontSize } from "@/themes/fontSize";
import DurationBar from "../layout/float-song/DurationBar";
import ThemedView from "../themed/ThemedView";
import { PlusIcon } from "../icons/floatSong";
import TogglePlayButton from "../music/TogglePlayButton";

type PlayerStickyHeaderProps = {
  isVisible: boolean;
  headerColor?: string;
  containerStyle?: StyleProp<ViewStyle>;
  songName: string;
  artistName: string;
}

const PlayerStickyHeader = (props: PlayerStickyHeaderProps) => {
  const insets = useSafeAreaInsets();
  const progress = useSharedValue<number>(0);

  useEffect(() => {
    progress.value = withTiming(props.isVisible ? 1 : 0, {
      duration: 200,
    });
  }, [props.isVisible, progress]);

  const headerStyle = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(
      progress.value,
      [0, 1],
      ["transparent", props.headerColor ?? colors.softGray]
    ),
  }));

  const opacityStyle = useAnimatedStyle(() => ({
    opacity: progress.value,
  }));

  return (
    <Animated.View
      style={[
        {
          paddingTop: insets.top,
          flexDirection: "row",
          alignItems: "center",
          zIndex: 10,
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          pointerEvents: props.isVisible ? "auto" : "none"
        },
        headerStyle,
        props.containerStyle,
      ]}
    >
      <Animated.View
        style={[
          {
            flex: 1,
          },
          opacityStyle,
        ]}
      >
        <ThemedView
          style={{
            paddingHorizontal: sizes.mainPadding,
            paddingVertical: 14,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <ThemedView style={{ gap: 4 }}>
            <ThemedText
              style={{
                color: colors.neutral[1000],
                fontSize: fontSize.b1,
                fontWeight: 500
              }}
            >
              {props.songName}
            </ThemedText>
            <ThemedText
              style={{
                color: colors.opaqueWhite,
                fontSize: fontSize.b2,
              }}
            >
              {props.artistName}
            </ThemedText>
          </ThemedView>
          <ThemedView
            style={{
              flexDirection: "row",
              gap: 15
            }}
          >
            <PlusIcon size={30} />
            <TogglePlayButton size={30} />
          </ThemedView>
        </ThemedView>
        <DurationBar />
      </Animated.View>
    </Animated.View>
  );
};

export default PlayerStickyHeader;