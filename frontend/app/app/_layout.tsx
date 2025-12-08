import ThemedView from '@/components/themed/ThemedView';
import { colors } from '@/themes/colors';
import { Slot } from 'expo-router';
import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const styles = StyleSheet.create({
  container: {

  },
});

const TabsStack = () => {
  const insets = useSafeAreaInsets();

  return (
    <ThemedView
      style={[styles.container, { paddingTop: insets.top, flex: 1, backgroundColor: colors.background }]}
    >
      <Slot />
    </ThemedView>
  );
};

export default TabsStack;