import { Lora_400Regular, Lora_700Bold, useFonts as useFontsLora } from "@expo-google-fonts/lora";
import { NotoSans_400Regular, NotoSans_500Medium, NotoSans_700Bold, useFonts as useFontsNotoSans } from "@expo-google-fonts/noto-sans";

/**
 * Carga las fuentes y devuelve si se cargaron correctamente.
 * No debe llamarse más de una vez.
 * @returns { { loaded: boolean; error: Error | null } } Un objeto con el estado de carga: loaded indica si se cargó correctamente, error contiene el error si falló.
 */
const useLoadFonts = () => {
  const [notoSansFontsLoaded, notoSansError] = useFontsNotoSans({
    NotoSans_400Regular,
    NotoSans_500Medium,
    NotoSans_700Bold,
  });

  const [loraFontsLoaded, loraSansError] = useFontsLora({
    Lora_400Regular,
    Lora_700Bold,
  });

  return { loaded: notoSansFontsLoaded && loraFontsLoaded, error: notoSansError || loraSansError };
};

export default useLoadFonts;
