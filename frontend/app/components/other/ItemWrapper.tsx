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
  onLayout?: (event: any) => void;
};

const ItemWrapper = ({ onPress, routerLink, children, style, disabled, onLayout }: ItemWrapperProps) => {
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
      onLayout={onLayout}
      style={[
        style,
      ]}
    >
      {children}
    </TouchableOpacity>
  );
};

export default ItemWrapper;
