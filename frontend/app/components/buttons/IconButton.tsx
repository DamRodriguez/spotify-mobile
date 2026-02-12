import type { ReactNode } from "react";
import { StyleProp, TouchableOpacity, ViewStyle } from "react-native";
import { buttons } from "@/constants/buttons";

interface IconButtonProps {
  icon: ReactNode;
  bgColor?: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}

const IconButton = ({ icon, bgColor = "", onPress, style }: IconButtonProps) => {
  return (
    <TouchableOpacity
      onPress={() => {
        onPress?.();
      }}
      activeOpacity={buttons.opacity}
      style={[{
        backgroundColor: bgColor,
        width: 50,
        height: 50,
        borderRadius: 999,
        alignItems: "center",
        justifyContent: "center",
      }, style]}
    >
      {icon}
    </TouchableOpacity>
  );
};

export default IconButton;
