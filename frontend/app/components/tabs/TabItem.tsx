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
      activeOpacity={buttons.opacity}
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
      }}
    >
      <ThemedView>
        {icon}
      </ThemedView>
      <ThemedText
        style={
          {
            fontSize: fontSize.b3,
            fontWeight: 600,
            color: isFocused ? colors.neutral[1000] : colors.softWhite,
          }
        }
      >
        {title}
      </ThemedText>
    </TouchableOpacity>
  );
};

export default TabItem;
