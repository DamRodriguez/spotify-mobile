import type { ReactNode } from "react";
import { type StyleProp, View, type ViewStyle } from "react-native";

type ThemedViewProps = {
  children?: ReactNode;
  id?: string;
  style?: StyleProp<ViewStyle>;
  onLayout?: (event: any) => void;
};

const ThemedView = ({ children, id, style, onLayout }: ThemedViewProps) => {
  return (
    <View
      id={id}
      style={style}
      onLayout={onLayout}
    >
      {children}
    </View>
  );
};

export default ThemedView;
