import type { ReactNode } from "react";
import { ScrollView, type StyleProp, type ViewStyle } from "react-native";

type ThemedScrollViewProps = {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
};

const ThemedScrollView = ({ children, style }: ThemedScrollViewProps) => {
  return (
    <ScrollView
      overScrollMode="never"
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={[{ flexGrow: 1 }, style]}
    >
      {children}
    </ScrollView>
  );
};

export default ThemedScrollView;
