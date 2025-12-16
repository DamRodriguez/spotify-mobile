import { RefreshControl, type RefreshControlProps } from "react-native";

type RefreshControlCustomProps = {
  onPullRefresh: (() => void) | undefined;
  isPullRefreshing?: boolean;
  enabled?: boolean;
} & Omit<RefreshControlProps, "onRefresh" | "refreshing">;

const RefreshControlCustom = ({
  onPullRefresh,
  isPullRefreshing = false,
  colors = ["#fff"],
  progressBackgroundColor = "#475557",
  enabled,
  ...rest
}: RefreshControlCustomProps) => {
  return (
    <RefreshControl
      onRefresh={onPullRefresh}
      refreshing={isPullRefreshing}
      colors={colors}
      progressBackgroundColor={progressBackgroundColor}
      enabled={enabled}
      {...rest}
    />
  );
};

export default RefreshControlCustom;
