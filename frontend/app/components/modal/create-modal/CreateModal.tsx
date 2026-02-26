import { sizes } from "@/constants/sizes";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { colors } from "@/themes/colors";
import DraggableScrollSheet from "@/components/bottom-sheet/DraggableScrollSheet";
import ThemedView from "@/components/themed/ThemedView";

type CreateModalProps = {
  isVisible: boolean;
  onClose: () => void;
}

const CreateModal = (props: CreateModalProps) => {
  const insets = useSafeAreaInsets();

  return (
    <DraggableScrollSheet
      visible={props.isVisible}
      onClose={props.onClose}
      containerStyle={{
        position: "absolute",
        bottom: insets.bottom + sizes.tabsHeight,
        left: 0,
        right: 0,
        backgroundColor: colors.quaternary[600],
        borderRadius: 20,
        width: "100%",
        height: 400,
      }}
    >
      <ThemedView
        style={{
        }}
      >
      </ThemedView>
    </DraggableScrollSheet>
  );
};

export default CreateModal;