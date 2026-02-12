import type { ReactNode } from "react";
import { NativeScrollEvent, NativeSyntheticEvent, ScrollView, type StyleProp, type ViewStyle } from "react-native";

type ThemedScrollViewProps = {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
  onScroll?: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
};

const ThemedScrollView = ({ children, style, onScroll }: ThemedScrollViewProps) => {
  return (
    <ScrollView
      overScrollMode="never"
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={[{ flexGrow: 1 }, style]}
      onScroll={onScroll}
      scrollEventThrottle={16}
    >
      {children}
    </ScrollView>
  );
};

export default ThemedScrollView;
