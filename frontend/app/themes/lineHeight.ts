export const lineHeight = {
  normal: 1.2,
  150: 1.5,
} as const satisfies Record<string | number, number>;

export type LineHeightType = typeof lineHeight[keyof typeof lineHeight];
