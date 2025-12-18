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