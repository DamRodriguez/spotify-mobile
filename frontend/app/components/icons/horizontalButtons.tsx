import { colors } from "@/themes/colors";
import Svg, { Path } from "react-native-svg";

export const PlusIcon = ({ size = 25, color = colors.neutral[1000] }: { size?: number, width?: string, height?: string, color?: string }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path fill={color} d="M12 5.25a.75.75 0 0 1 .75.75v5.25H18a.75.75 0 0 1 0 1.5h-5.25V18a.75.75 0 0 1-1.5 0v-5.25H6a.75.75 0 0 1 0-1.5h5.25V6a.75.75 0 0 1 .75-.75" />
    </Svg>
  );
};

export const MixIcon = ({ size = 20, color = colors.neutral[1000] }: { size?: number, width?: string, height?: string, color?: string }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 15 15">
      <Path fill={color} fillRule="evenodd" d="M5 1.5a.5.5 0 0 0-1 0V7c0 .017 0 .033.002.05a2.5 2.5 0 0 0 0 4.9A.506.506 0 0 0 4 12v1.5a.5.5 0 0 0 1 0V12c0-.017 0-.033-.002-.05a2.5 2.5 0 0 0 0-4.9A.507.507 0 0 0 5 7V1.5Zm6 0a.5.5 0 0 0-1 0V3c0 .017 0 .033.002.05a2.5 2.5 0 0 0 0 4.9A.507.507 0 0 0 10 8v5.5a.5.5 0 0 0 1 0V8c0-.017 0-.033-.002-.05a2.5 2.5 0 0 0 0-4.9A.507.507 0 0 0 11 3V1.5ZM4.5 8a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3ZM9 5.5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0Z" clipRule="evenodd" />
    </Svg>
  );
};

export const EditIcon = ({ size = 20, color = colors.neutral[1000] }: { size?: number, width?: string, height?: string, color?: string }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 17h18M3 12h18M3 7h18" />
    </Svg>
  );
};

export const OrderIcon = ({ size = 20, color = colors.neutral[1000] }: { size?: number, width?: string, height?: string, color?: string }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path fill={color} d="M13 3v8h5.586l-2-2L18 7.586L22.414 12L18 16.414L16.586 15l2-2H13v8h-2v-8H5.414l2 2L6 16.414L1.586 12L6 7.586L7.414 9l-2 2H11V3h2Z" />
    </Svg>
  );
};

export const PencilIcon = ({ size = 20, color = colors.neutral[1000] }: { size?: number, width?: string, height?: string, color?: string }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m16.862 4.487l1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8l.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
    </Svg>
  );
};