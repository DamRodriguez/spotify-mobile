import type { ReactNode } from "react";
import { type StyleProp, View, type ViewStyle } from "react-native";

type ThemedViewProps = {
  children?: ReactNode;
  id?: string;
  style?: StyleProp<ViewStyle>;
};

const ThemedView = ({ children, id, style }: ThemedViewProps) => {
  return (
    <View
      id={id}
      style={style}
    >
      {children}
    </View>
  );
};

export default ThemedView;
