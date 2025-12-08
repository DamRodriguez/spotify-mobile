export const fontSize = {
  h1: 58,
  h1_2: 52,
  h2: 48,
  h3: 40,
  h4: 34,
  h5: 28,
  h6: 24,
  h7: 20,
  b1: 16,
  b2: 14,
  b3: 12,
  b4: 10,
  b5: 8,
  b6: 6,
  b7: 6,
} as const satisfies Record<string, number>;

export type FontSizeType = typeof fontSize[keyof typeof fontSize];
