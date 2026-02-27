import BackToYourMusicSection from "@/components/sections/home/horizontal-lists/BackToYourMusicSection";
import DailyReleasesSection from "@/components/sections/home/horizontal-lists/DailyReleasesSection";
import RecentMusicSection from "@/components/sections/home/RecentMusic";
import YourPlaylistsSection from "@/components/sections/home/horizontal-lists/YourPlaylistsSection";
import ThemedScrollView from "@/components/themed/ThemedScrollView";
import { sizes } from "@/constants/sizes";
import YourFavoriteArtistsSection from "@/components/sections/home/horizontal-lists/YourFavoriteArtistsSection";
import { colors } from "@/themes/colors";

const HomeScreen = () => {
  return (
    <ThemedScrollView
      contentContainerStyle={{
        paddingHorizontal: sizes.mainPadding,
        gap: 30,
        paddingBottom: 200,
        backgroundColor: colors.background
      }}
    >
      <RecentMusicSection />
      <YourPlaylistsSection />
      <YourFavoriteArtistsSection />
      <DailyReleasesSection />
      <BackToYourMusicSection />
    </ThemedScrollView>
  );
};

export default HomeScreen;