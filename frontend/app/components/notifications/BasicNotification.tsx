import { StyleProp, TextStyle, ViewStyle } from "react-native";
import ThemedView from "@/components/themed/ThemedView";
import ThemedText from "@/components/themed/ThemedText";
import { fontSize } from "@/themes/fontSize";

export type BasicNotificationProps = {
  type: "error" | "success" | "warning" | "info";
  text: string;
}

const basicNotificationItems: Record<
  BasicNotificationProps["type"],
  {
    textStyle: StyleProp<TextStyle>;
    bgStyle: StyleProp<ViewStyle>;
  }
> = {
  error: {
    textStyle: {
      color: "#fff",
    },
    bgStyle: {
      backgroundColor: "#ff0000",
    },
  },
  success: {
    textStyle: {
      color: "#fff",
    },
    bgStyle: {
      backgroundColor: "#00ff11",
    },
  },
  warning: {
    textStyle: {
      color: "#fff",
    },
    bgStyle: {
      backgroundColor: "#ffae00",
    },
  },
  info: {
    textStyle: {
      color: "#000",
    },
    bgStyle: {
      backgroundColor: "#fff",
    },
  },
};

export const BasicNotification = ({ type, text }: BasicNotificationProps) => {
  const basicNotificationItem = basicNotificationItems[type];

  return (
    <ThemedView
      style={[{
        borderRadius: 6,
        padding: 16,
        elevation: 5
      }, basicNotificationItem.bgStyle]}
    >
      <ThemedText
        style={{
          fontSize: fontSize.b2,
        }}
      >
        {text}
      </ThemedText>
    </ThemedView>
  );
};

const showBasicNotification = (type: BasicNotificationProps["type"], text: BasicNotificationProps["text"]) => {
  return (
    <BasicNotification type={type} text={text} />
  )
}


export default showBasicNotification;