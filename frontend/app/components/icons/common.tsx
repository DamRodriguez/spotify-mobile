import { colors } from "@/themes/colors";
import Svg, { Path } from "react-native-svg";

export const CloseIcon = ({ size = 25, color = "#fff" }: { size?: number, width?: string, height?: string, color?: string }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <Path d="M19 5L5 19M5 5L19 19" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
};

export const BackIcon = ({ size = 30, color = "#fff" }: { size?: number, width?: string, height?: string, color?: string }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 1024 1024">
      <Path fill={color} d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z" />
      <Path fill={color} d="m237.248 512l265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z" />
    </Svg>
  );
};

export const VerticalDotsIcon = ({ size = 23, color = colors.softGray }: { size?: number, width?: string, height?: string, color?: string }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path fill={color} stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M11 12a1 1 0 1 0 2 0a1 1 0 1 0-2 0m0 7a1 1 0 1 0 2 0a1 1 0 1 0-2 0m0-14a1 1 0 1 0 2 0a1 1 0 1 0-2 0" />
    </Svg>
  );
};

export const SearchIcon = ({ size = 23, color = colors.neutral[1000] }: { size?: number, width?: string, height?: string, color?: string }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10a7 7 0 1 0 14 0a7 7 0 1 0-14 0m18 11l-6-6" />
    </Svg>
  );
};

export const PlayIcon = ({ size = 32, color = colors.neutral[100] }: { size?: number, width?: string, height?: string, color?: string }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20">
      <Path fill={color} d="m4 4l12 6l-12 6z" />
    </Svg>
  );
};

export const PauseIcon = ({ size = 30, color = colors.neutral[1000] }: { size?: number, width?: string, height?: string, color?: string }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20">
      <Path fill={color} d="M5 4h3v12H5V4zm7 0h3v12h-3V4z" />
    </Svg>
  );
};

