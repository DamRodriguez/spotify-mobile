import BackToYourMusicSection from "@/components/sections/home/BackToYourMusicSection";
import DailyReleasesSection from "@/components/sections/home/DailyReleasesSection";
import RecentMusicSection from "@/components/sections/home/RecentMusic";
import YourPlaylistsSection from "@/components/sections/home/YourPlaylistsSection";
import ThemedScrollView from "@/components/themed/ThemedScrollView";
import { sizes } from "@/constants/sizes";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: sizes.mainPadding,
    marginTop: 10,
    gap: 40,
    paddingBottom: 50
  },
});

const HomeScreen = () => {
  return (
    <ThemedScrollView style={styles.container}>
      <RecentMusicSection />
      <YourPlaylistsSection />
      <DailyReleasesSection />
      <BackToYourMusicSection />
    </ThemedScrollView>
  );
};

export default HomeScreen;