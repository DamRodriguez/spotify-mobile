import type { StyleProp, ViewStyle } from "react-native";
import { ActivityIndicator } from "react-native-paper";

type ListFooterSpinnerProps = {
  isLoadingMore?: boolean;
  style?: StyleProp<ViewStyle>;
  withOutMargin?: boolean;
};

const ListFooterSpinner = (props: ListFooterSpinnerProps) => {
  if (!props.isLoadingMore) return null;
  return (
    <ActivityIndicator
      style={[{ margin: props.withOutMargin ? 0 : 20 }, props.style]}
      color="#fff"
      size={25}
    />
  );
};

export default ListFooterSpinner;
