import { FlashListProps } from "@shopify/flash-list";

export const flashListDefaults: Partial<FlashListProps<any>> = {
  removeClippedSubviews: true,
  scrollEventThrottle: 16,
  onEndReachedThreshold: 0.2,
  overScrollMode: "never",
  bounces: false,
  bouncesZoom: false,
  alwaysBounceVertical: false,
  showsVerticalScrollIndicator: false,
  showsHorizontalScrollIndicator: false
};
