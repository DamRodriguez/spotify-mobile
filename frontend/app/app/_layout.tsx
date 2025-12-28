import { colors } from '@/themes/colors';
import { Slot } from 'expo-router';
import { StyleSheet } from 'react-native';
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { PaperProvider } from 'react-native-paper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background
  },
});

const TabsStack = () => {

  return (
    <GestureHandlerRootView
      style={[
        styles.container,
      ]}
    >
      <PaperProvider>
        <StatusBar style="light" />
        <Slot />
      </PaperProvider>
    </GestureHandlerRootView>
  );
};

export default TabsStack;