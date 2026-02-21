import { colors } from "@/themes/colors";
import ItemWrapper from "../other/ItemWrapper";
import ThemedView from "../themed/ThemedView";
import useSongItem from "@/features/redux/song-item/useSongItem";
import { PauseIcon, PlayIcon } from "../icons/common";
import useScalePressAnimation from "@/hooks/useScalePressAnimation";
import Animated from "react-native-reanimated";

type PlayButtonProps = {
  onPress: () => void;
  sectionId: string;
}

const AnimatedItemWrapper = Animated.createAnimatedComponent(ItemWrapper);

const PlayButton = (props: PlayButtonProps) => {
  const { songData } = useSongItem();
  const isThisListPlaying = songData.isPlaying && songData.sectionId === props.sectionId;
  const { animatedStyle, animate } = useScalePressAnimation();

  const handleOnPress = () => {
    props.onPress();
    animate();
  }

  return (
    <AnimatedItemWrapper
      onPress={handleOnPress}
      style={[{
        backgroundColor: colors.mainGreen,
        borderRadius: 999,
        padding: 10,
        elevation: 20
      }, animatedStyle]}
    >
      {isThisListPlaying ? (
        <PauseIcon size={32} color={colors.neutral[100]} />
      ) : (
        <ThemedView style={{ left: 2 }}>
          <PlayIcon />
        </ThemedView>
      )}
    </AnimatedItemWrapper>
  );
};

export default PlayButton;