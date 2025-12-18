import IconButton from "@/components/buttons/IconButton";
import { BackIcon } from "@/components/icons/common";
import ThemedView from "@/components/themed/ThemedView";
import { useRouter } from "expo-router";

const ListDinamicPageHeader = () => {
  const router = useRouter();

  return (
    <ThemedView
      style={{
        padding: 16,
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <IconButton
        onPress={() => { router.back(); }}
        icon={<BackIcon />}
      />
    </ThemedView>
  );
};

export default ListDinamicPageHeader;