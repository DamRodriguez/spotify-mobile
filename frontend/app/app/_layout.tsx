import { colors } from '@/themes/colors';
import { Slot } from 'expo-router';
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';

const TabsStack = () => {
  return (
    <Provider store={store}>
      <GestureHandlerRootView
        style={{
          flex: 1,
          backgroundColor: colors.background
        }}
      >
        <PaperProvider>
          <StatusBar style="light" />
          <Slot />
        </PaperProvider>
      </GestureHandlerRootView>
    </Provider >
  );
};

export default TabsStack;