import { sizes } from "@/constants/sizes";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { colors } from "@/themes/colors";
import DraggableScrollSheet from "@/components/bottom-sheet/DraggableScrollSheet";
import ThemedView from "@/components/themed/ThemedView";
import CreateModalItem, { CreateModalItemData } from "./CreateModalItem";
import { CollaborativeIcon, FusionIcon, JamIcon, MusicIcon } from "@/components/icons/createModalItem";

type CreateModalProps = {
  isVisible: boolean;
  onClose: () => void;
}

const CreateModal = (props: CreateModalProps) => {
  const insets = useSafeAreaInsets();

  const modalItems: CreateModalItemData[] = [
    {
      icon: MusicIcon,
      title: "Playlist",
      subtitle: "Crea una playlist con canciones o episodios",
      onPress: () => { },
    },
    {
      icon: CollaborativeIcon,
      title: "Playlist colaborativa",
      subtitle: "Crea una playlist con tus personas favoritas",
      onPress: () => { },
    },
    {
      icon: FusionIcon,
      title: "Fusión",
      subtitle: "Combina los gustos de tus personas favoritas en una playlist",
      onPress: () => { },
    },
    {
      icon: JamIcon,
      title: "Jam",
      subtitle: "Escuchen en conjunto, estén donde estén",
      onPress: () => { },
    }
  ]

  return (
    <DraggableScrollSheet
      visible={props.isVisible}
      onClose={props.onClose}
      containerStyle={{
        position: "absolute",
        bottom: insets.bottom + sizes.tabsHeight,
        left: 0,
        right: 0,
        backgroundColor: colors.mediumGray,
        borderRadius: 20,
        width: "100%",
        padding: 20
      }}
    >
      <ThemedView
        style={{
          gap: 25
        }}
      >
        {modalItems.map((item, index) => {
          return (
            <CreateModalItem key={index} data={item} />
          )
        })}
      </ThemedView>
    </DraggableScrollSheet>
  );
};

export default CreateModal;