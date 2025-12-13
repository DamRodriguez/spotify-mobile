import { colors } from '@/themes/colors';
import { Slot } from 'expo-router';
import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background
  },
});

const TabsStack = () => {
  const insets = useSafeAreaInsets();

  return (
    <GestureHandlerRootView
      style={[
        {
          paddingTop: insets.top,
        },
        styles.container,
      ]}
    >
      <StatusBar style="light" />
      <Slot />
    </GestureHandlerRootView>
  );
};

export default TabsStack;