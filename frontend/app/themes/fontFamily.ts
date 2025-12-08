export const fontFamily = {
  Lora_400Regular: "Lora_400Regular",
  Lora_700Bold: "Lora_700Bold",
  NotoSans_400Regular: "NotoSans_400Regular",
  NotoSans_500Medium: "NotoSans_500Medium",
  NotoSans_700Bold: "NotoSans_700Bold",
} as const satisfies Record<string, string>;

export type FontFamilyType = typeof fontFamily[keyof typeof fontFamily];
