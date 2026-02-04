import BackToYourMusicSection from "@/components/sections/home/horizontal-lists/BackToYourMusicSection";
import DailyReleasesSection from "@/components/sections/home/horizontal-lists/DailyReleasesSection";
import RecentMusicSection from "@/components/sections/home/RecentMusic";
import YourPlaylistsSection from "@/components/sections/home/horizontal-lists/YourPlaylistsSection";
import ThemedScrollView from "@/components/themed/ThemedScrollView";
import { sizes } from "@/constants/sizes";
import { StyleSheet } from "react-native";
import YourFavoriteArtistsSection from "@/components/sections/home/horizontal-lists/YourFavoriteArtistsSection";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: sizes.mainPadding,
    marginTop: 10,
    gap: 30,
    paddingBottom: 200
  },
});

const HomeScreen = () => {
  return (
    <ThemedScrollView style={styles.container}>
      <RecentMusicSection />
      <YourPlaylistsSection />
      <YourFavoriteArtistsSection />
      <DailyReleasesSection />
      <BackToYourMusicSection />
    </ThemedScrollView>
  );
};

export default HomeScreen;