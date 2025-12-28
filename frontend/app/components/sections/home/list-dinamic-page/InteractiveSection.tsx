import { useEffect, useRef } from "react";
import { Animated, Easing } from "react-native";
import PlayButton from "@/components/buttons/PlayButton";
import { VerticalDotsIcon } from "@/components/icons/common";
import { DownloadIcon, MixIcon, ShareIcon } from "@/components/icons/listDinamicPage";
import OptimizedImage from "@/components/image/OptimizedImage";
import ItemWrapper from "@/components/other/ItemWrapper";
import ThemedView from "@/components/themed/ThemedView";
import { colors } from "@/themes/colors";
import { Portal } from "react-native-paper";

type InteractiveSectionProps = {
  isPlayButtonSticky: boolean;
};

const InteractiveSection = (props: InteractiveSectionProps) => {
  const PlayButtonContainer = props.isPlayButtonSticky ? Portal : ThemedView;

  const opacity = useRef(new Animated.Value(1)).current;
  const translateY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: props.isPlayButtonSticky ? 1 : 1,
        duration: 180,
        useNativeDriver: true,
      }),
      Animated.timing(translateY, {
        toValue: props.isPlayButtonSticky ? -8 : 0,
        duration: 180,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }),
    ]).start();
  }, [props.isPlayButtonSticky]);

  return (
    <ThemedView style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
      <ThemedView style={{ flexDirection: "row", alignItems: "center", gap: 25 }}>
        <ItemWrapper
          onPress={() => { }}
          style={{
            borderWidth: 2,
            borderColor: colors.softGray,
            borderRadius: 10,
            padding: 3,
          }}
        >
          <OptimizedImage
            source={""}
            style={{
              height: 40,
              width: 30,
              borderRadius: 6,
            }}
          />
        </ItemWrapper>

        <ItemWrapper onPress={() => { }}>
          <DownloadIcon />
        </ItemWrapper>

        <ItemWrapper onPress={() => { }}>
          <ShareIcon />
        </ItemWrapper>

        <ItemWrapper onPress={() => { }}>
          <VerticalDotsIcon size={32} />
        </ItemWrapper>
      </ThemedView>

      <ThemedView style={{ flexDirection: "row", alignItems: "center", gap: 15 }}>
        <ItemWrapper
          onPress={() => { }}
          style={{
            position: "absolute",
            right: 70
          }}
        >
          <MixIcon />
        </ItemWrapper>

        <PlayButtonContainer>
          <Animated.View
            style={{
              position: props.isPlayButtonSticky ? "absolute" : "relative",
              right: props.isPlayButtonSticky ? 16 : 0,
              top: props.isPlayButtonSticky ? 90 : 0,
              zIndex: 9999,
              opacity,
              transform: [{ translateY }],
            }}
          >
            <PlayButton />
          </Animated.View>
        </PlayButtonContainer>
      </ThemedView>
    </ThemedView>
  );
};

export default InteractiveSection;
