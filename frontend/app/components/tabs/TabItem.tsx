import { type ReactNode, useCallback } from "react";
import { TouchableOpacity } from "react-native";
import ThemedText from "@/components/themed/ThemedText";
import { buttons } from "@/constants/buttons";
import { colors } from "@/themes/colors";
import { fontSize } from "@/themes/fontSize";
import ThemedView from "../themed/ThemedView";

type TabItemProps = {
  name: string;
  title: string;
  icon: ReactNode;
  isFocused: boolean;
  onPress: (name: string) => void;
  translateDuration: number;
};

const TabItem = ({
  name,
  title,
  icon,
  isFocused,
  onPress,
}: TabItemProps) => {

  const handlePress = useCallback(() => {
    onPress(name);
  }, [name, onPress]);

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={
        {
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          gap: 10
        }
      }
      activeOpacity={buttons.opacity}
    >
      <ThemedView>
        {icon}
      </ThemedView>
      <ThemedText
        style={
          {
            fontSize: fontSize.b3,
            fontWeight: 700,
            color: isFocused ? colors.neutral[1000] : colors.softGray,
          }
        }
      >
        {title}
      </ThemedText>
    </TouchableOpacity>
  );
};

export default TabItem;
