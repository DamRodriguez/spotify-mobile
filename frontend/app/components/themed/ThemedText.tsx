import type { ReactNode } from "react";
import { LayoutChangeEvent, type StyleProp, StyleSheet, Text, type TextStyle } from "react-native";
import { type FontFamilyType } from "@/themes/fontFamily";
import { fontSize, type FontSizeType } from "@/themes/fontSize";
import { lineHeight, type LineHeightType } from "@/themes/lineHeight";

type CustomTextStyle = { fontSize?: FontSizeType; lineHeight?: LineHeightType; fontFamily?: FontFamilyType };
export type ThemedTextStyle = StyleProp<TextStyle & CustomTextStyle>;

type ThemedTextProps = {
  children: ReactNode;
  style?: ThemedTextStyle;
  onPress?: () => void;
  numberOfLines?: number;
  allowFontScaling?: boolean;
  onLayout?: (event: LayoutChangeEvent) => void;
};

const ThemedText = ({
  children,
  style,
  onPress,
  numberOfLines,
  allowFontScaling,
  onLayout
}: ThemedTextProps) => {
  const styleSheet = StyleSheet.flatten([style]);
  const finalStyle = StyleSheet.flatten({
    lineHeight: (styleSheet.fontSize ? styleSheet.fontSize : fontSize.b1) *
      (styleSheet.lineHeight ? styleSheet.lineHeight : lineHeight.normal),
  });

  return (
    <Text
      style={[style, finalStyle]}
      onPress={onPress}
      numberOfLines={numberOfLines}
      allowFontScaling={allowFontScaling}
      onLayout={onLayout}
    >
      {children}
    </Text>
  );
};

export default ThemedText;
