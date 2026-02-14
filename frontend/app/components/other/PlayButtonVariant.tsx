import { useSafeAreaInsets } from "react-native-safe-area-context";
import ThemedView from "../themed/ThemedView";
import PlayButton from "../buttons/PlayButton";

type PlayButtonVariantProps = {
  isPlayButtonSticky: boolean;
  handlePlayButtonPress: () => void;
  sectionId: string;
}

const PlayButtonVariant = (props: PlayButtonVariantProps) => {
  const insets = useSafeAreaInsets();

  return (
    <>
      {props.isPlayButtonSticky && (
        <ThemedView
          style={{
            position: "absolute",
            top: insets.top + 30,
            right: 16,
            zIndex: 9999,
          }}
        >
          <PlayButton
            onPress={props.handlePlayButtonPress}
            sectionId={props.sectionId}
          />
        </ThemedView>
      )}
    </>
  );
};

export default PlayButtonVariant;