import { NotoSans_400Regular, NotoSans_500Medium, NotoSans_700Bold, useFonts as useFontsNotoSans } from "@expo-google-fonts/noto-sans";
import {
  PlusJakartaSans_400Regular,
  PlusJakartaSans_500Medium,
  PlusJakartaSans_600SemiBold,
  PlusJakartaSans_700Bold,
  useFonts as useFontsPlusJakartaSans,
} from '@expo-google-fonts/plus-jakarta-sans';

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

  const [plusJakartaSansFontsLoaded, setPlusJakartaSansFontsLoaded] = useFontsPlusJakartaSans({
    PlusJakartaSans_400Regular,
    PlusJakartaSans_500Medium,
    PlusJakartaSans_600SemiBold,
    PlusJakartaSans_700Bold,
  })

  return { loaded: notoSansFontsLoaded && plusJakartaSansFontsLoaded, error: notoSansError || setPlusJakartaSansFontsLoaded };
};

export default useLoadFonts;
