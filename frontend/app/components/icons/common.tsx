import Svg, { Path } from "react-native-svg";

export const CloseIcon = ({ size = 30, color = "#fff" }: { size?: number, width?: string, height?: string, color?: string }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <Path d="M19 5L5 19M5 5L19 19" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
};