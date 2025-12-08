import ThemedView from '@/components/themed/ThemedView';
import { colors } from '@/themes/colors';
import { Slot } from 'expo-router';
import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background
  },
});

const TabsStack = () => {
  const insets = useSafeAreaInsets();

  return (
    <ThemedView
      style={[
        {
          paddingTop: insets.top,
        },
        styles.container,
      ]}
    >
      <Slot />
    </ThemedView>
  );
};

export default TabsStack;