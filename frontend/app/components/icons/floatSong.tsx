import { colors } from "@/themes/colors";
import Svg, { G, Path } from "react-native-svg";

export const ComputerIcon = ({ size = 26, color = colors.neutral[1000] }: { size?: number, width?: string, height?: string, color?: string }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 14 14" fill={color}>
      <G fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round">
        <Path d="M.5 6.5v4a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1m2.5 7h3m-1.5 0v-2" />
        <Path d="M7.5 3.5V3a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5H9" />
        <Path d="M11.375 4.875a.125.125 0 1 1 0-.25m0 .25a.125.125 0 1 0 0-.25M10.5 7h3" />
      </G>
    </Svg>
  );
};

export const PlusIcon = ({ size = 26, color = colors.neutral[1000] }: { size?: number, width?: string, height?: string, color?: string }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path fill={color} d="M12 21a9 9 0 1 1 9-9a9 9 0 0 1-9 9Zm0-16.5a7.5 7.5 0 1 0 7.5 7.5A7.5 7.5 0 0 0 12 4.5Z" />
      <Path fill={color} d="M12 16.75a.76.76 0 0 1-.75-.75V8a.75.75 0 0 1 1.5 0v8a.76.76 0 0 1-.75.75Z" />
      <Path fill={color} d="M16 12.75H8a.75.75 0 0 1 0-1.5h8a.75.75 0 0 1 0 1.5Z" />
    </Svg>
  );
};