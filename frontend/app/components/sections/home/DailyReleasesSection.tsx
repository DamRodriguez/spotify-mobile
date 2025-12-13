import ThemedText from '@/components/themed/ThemedText';
import ThemedView from '@/components/themed/ThemedView';
import { colors } from '@/themes/colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {

  },
  title: {
    color: colors.neutral[1000]
  }
});

const DailyReleasesSection = () => {
  return (
    <ThemedView>
      <ThemedText
        style={styles.title}
      >
        Viernes de lanzamientos
      </ThemedText>
    </ThemedView>
  );
};

export default DailyReleasesSection;