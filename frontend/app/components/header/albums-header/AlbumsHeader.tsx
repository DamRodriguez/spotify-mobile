import BorderGradient from "@/components/other/BorderGradient";
import ThemedText from "@/components/themed/ThemedText";
import ThemedView from "@/components/themed/ThemedView";
import { colors } from "@/themes/colors";
import { useRouter } from "expo-router";
import { Dimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { BackIcon } from "@/components/icons/common";
import IconButton from "@/components/buttons/IconButton";
import { fontSize } from "@/themes/fontSize";

const AlbumsHeader = () => {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const sizes = Dimensions.get("window");

  return (
    <ThemedView
      style={{
        paddingTop: insets.top,
        paddingHorizontal: 16,
        paddingBottom: 8,
        flexDirection: "row",
        alignItems: "center",
        gap: 50,
        zIndex: 10,
        backgroundColor: colors.softGray
      }}
    >
      <BorderGradient
        direction="bottom"
        shadowSize={sizes.width}
        style={{ elevation: 20 }}
      />
      <IconButton
        onPress={() => router.back()}
        icon={<BackIcon />}
        bgColor="transparent"
      />
      <ThemedText
        numberOfLines={1}
        style={{
          color: colors.neutral[1000],
          fontSize: fontSize.h7,
          fontWeight: "700",
        }}
      >
        Lanzamientos
      </ThemedText>
    </ThemedView>
  );
};

export default AlbumsHeader;