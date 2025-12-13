import DailyReleasesSection from "@/components/sections/home/DailyReleasesSection";
import RecentMusicSection from "@/components/sections/home/RecentMusic";
import ThemedView from "@/components/themed/ThemedView";
import { sizes } from "@/constants/sizes";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: sizes.mainPadding,
    flex: 1,
    marginTop: 20,
  },
});

const HomeScreen = () => {
  return (
    <ThemedView style={styles.container}>
      <RecentMusicSection />
      {/* <DailyReleasesSection /> */}
    </ThemedView>
  );
};

export default HomeScreen;