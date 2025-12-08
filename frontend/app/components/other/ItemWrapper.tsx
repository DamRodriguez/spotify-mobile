import { useRouter } from "expo-router";
import { type ReactNode, useCallback } from "react";
import { type StyleProp, TouchableOpacity, type ViewStyle } from "react-native";
import { buttons } from "@/constants/buttons";

type ItemWrapperProps = {
  onPress?: () => void;
  routerLink?: string;
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
};

const ItemWrapper = ({ onPress, routerLink, children, style, disabled }: ItemWrapperProps) => {
  const router = useRouter();

  const onItemPress = useCallback(() => {
    onPress?.();
    if (routerLink) router.push(routerLink);
  }, [onPress, routerLink, router]);

  return (
    <TouchableOpacity
      onPress={onItemPress}
      activeOpacity={buttons.opacity}
      disabled={disabled}
      style={[
        style,
      ]}
    >
      {children}
    </TouchableOpacity>
  );
};

export default ItemWrapper;
