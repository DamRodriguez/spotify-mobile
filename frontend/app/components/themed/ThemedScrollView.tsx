import type { ReactNode } from "react";
import { NativeScrollEvent, NativeSyntheticEvent, ScrollView, type StyleProp, type ViewStyle } from "react-native";

type ThemedScrollViewProps = {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
  contentContainerStyle?: StyleProp<ViewStyle>;
  onScroll?: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
};

const ThemedScrollView = ({ children, contentContainerStyle, style, onScroll }: ThemedScrollViewProps) => {
  return (
    <ScrollView
      overScrollMode="never"
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
      nestedScrollEnabled
      contentContainerStyle={[{}, contentContainerStyle]}
      style={style}
      onScroll={onScroll}
      scrollEventThrottle={16}
    >
      {children}
    </ScrollView>
  );
};

export default ThemedScrollView;
