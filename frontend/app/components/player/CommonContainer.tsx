import { colors } from "@/themes/colors";
import ThemedView from "@/components/themed/ThemedView";
import React from "react";
import { StyleProp, ViewStyle } from "react-native";

type CommonContainerProps = {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

const CommonContainer = (props: CommonContainerProps) => {
  return (
    <ThemedView
      style={[{
        backgroundColor: colors.mediumGray,
        padding: 20,
        borderRadius: 10,
      }, props.style]}
    >
      {props.children}
    </ThemedView>
  );
};

export default CommonContainer;