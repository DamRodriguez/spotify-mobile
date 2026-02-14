import ThemedView from "@/components/themed/ThemedView";
// import useSongItem from "@/features/redux/song-item/useSongItem";
import { colors } from "@/themes/colors";

const DurationBar = () => {
  // const { songData } = useSongItem();

  return (
    <ThemedView
      style={{
        width: "100%",
        height: 2,
        backgroundColor: colors.neutral[700],
        borderRadius: 999,
        overflow: "hidden",
        position: "absolute",
        bottom: 0,
        elevation: 20,
      }}
    >
      <ThemedView
        style={{
          height: "100%",
          backgroundColor: colors.neutral[1000],
        }}
      />
    </ThemedView>
  );
};

export default DurationBar;
