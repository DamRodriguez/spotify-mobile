export const fontFamily = {
  NotoSans_400Regular: "NotoSans_400Regular",
  NotoSans_500Medium: "NotoSans_500Medium",
  NotoSans_700Bold: "NotoSans_700Bold",
  PlusJakartaSans_500Medium: "PlusJakartaSans_500Medium",
  PlusJakartaSans_600SemiBold: "PlusJakartaSans_600SemiBold",
  PlusJakartaSans_700Bold: "PlusJakartaSans_700Bold"
} as const satisfies Record<string, string>;

export type FontFamilyType = typeof fontFamily[keyof typeof fontFamily];
