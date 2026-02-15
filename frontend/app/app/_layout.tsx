import { colors } from '@/themes/colors';
import { Slot } from 'expo-router';
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';

const TabsStack = () => {
  return (
    <GestureHandlerRootView
      style={{
        flex: 1,
        backgroundColor: colors.background
      }}
    >
      <Provider store={store}>
        <StatusBar style="light" />
        <PaperProvider>
          <Slot />
        </PaperProvider>
      </Provider >
    </GestureHandlerRootView>
  );
};

export default TabsStack;