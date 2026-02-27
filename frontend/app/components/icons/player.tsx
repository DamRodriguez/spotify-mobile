import { colors } from "@/themes/colors";
import Svg, { G, Path, Rect } from "react-native-svg";

export const DownArrowIcon = ({ size = 24, color = colors.neutral[900] }: { size?: number, width?: string, height?: string, color?: string }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 14 14">
      <Path fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" d="M.5 3.85L6.65 10a.48.48 0 0 0 .7 0l6.15-6.15" />
    </Svg>
  )
};

export const HideIcon = ({ size = 35, color = "#fff" }: { size?: number, width?: string, height?: string, color?: string }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <Path d="M19 5L5 19M5 5L19 19" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
};

export const MixIcon = ({ size = 30, color = "#fff" }: { size?: number, width?: string, height?: string, color?: string }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <G fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
        <Path d="m18 4l3 3l-3 3m0 10l3-3l-3-3" />
        <Path d="M3 7h3a5 5 0 0 1 5 5a5 5 0 0 0 5 5h5m0-10h-5a4.978 4.978 0 0 0-3 1m-4 8a4.984 4.984 0 0 1-3 1H3" />
      </G>
    </Svg>
  );
};

export const BackIcon = ({ size = 32, color = "#fff" }: { size?: number, width?: string, height?: string, color?: string }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 384 512">
      <Path fill={color} d="M363 36.8c-12.9-7-28.7-6.3-41 1.8L64 208.1V64c0-17.7-14.3-32-32-32S0 46.3 0 64v384c0 17.7 14.3 32 32 32s32-14.3 32-32V303.9l258 169.6c12.3 8.1 28 8.8 41 1.8s21-20.5 21-35.2v-368c0-14.7-8.1-28.2-21-35.2z" />
    </Svg>
  );
};

export const NextIcon = ({ size = 32, color = "#fff" }: { size?: number, width?: string, height?: string, color?: string }) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 384 512"
      style={{ transform: [{ scaleX: -1 }] }}
    >
      <Path
        fill={color}
        d="M363 36.8c-12.9-7-28.7-6.3-41 1.8L64 208.1V64c0-17.7-14.3-32-32-32S0 46.3 0 64v384c0 17.7 14.3 32 32 32s32-14.3 32-32V303.9l258 169.6c12.3 8.1 28 8.8 41 1.8s21-20.5 21-35.2v-368c0-14.7-8.1-28.2-21-35.2z"
      />
    </Svg>
  );
};

export const RepeatIcon = ({ size = 28, color = "#fff" }: { size?: number, width?: string, height?: string, color?: string }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 16 16">
      <Path fill={color} d="M5.38 2c-1.28 0-2.06 0-2.7.224a4 4 0 0 0-2.45 2.45c-.225.642-.225 1.42-.224 2.7v2.12c0 1.93 1.57 3.5 3.5 3.5a.5.5 0 0 0 0-1a2.5 2.5 0 0 1-2.5-2.5v-2c0-1.44.007-2.03.168-2.49a3 3 0 0 1 1.84-1.84c.461-.161 1.05-.168 2.49-.168h5c1.44 0 2.03.007 2.49.168c.862.302 1.54.979 1.84 1.84c.161.461.168 1.05.168 2.49s-.007 2.03-.168 2.49a3 3 0 0 1-1.84 1.84c-.461.161-1.05.168-2.49.168h-2.79l2.15-2.15a.5.5 0 0 0-.707-.707l-3 3a.5.5 0 0 0 0 .707l3 3a.5.5 0 0 0 .707-.707l-2.15-2.15h2.91c1.28 0 2.06 0 2.7-.224a4 4 0 0 0 2.45-2.45c.225-.642.225-1.42.224-2.7v-.234c0-1.28 0-2.06-.224-2.7a4 4 0 0 0-2.45-2.45c-.642-.225-1.42-.225-2.7-.224h-5.23z" />
    </Svg>
  );
};

export const ComputerIcon = ({ size = 25, color = colors.neutral[1000] }: { size?: number, width?: string, height?: string, color?: string }) => {
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

export const ShareIcon = ({ size = 25, color = colors.neutral[1000] }: { size?: number, width?: string, height?: string, color?: string }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path fill={color} fillRule="evenodd" d="M20.25 6a2.75 2.75 0 1 0-5.33.956L8.606 10.23a2.75 2.75 0 1 0-.01 3.55l6.208 3.679a2.75 2.75 0 1 0 .687-1.336l-6.27-3.716a2.8 2.8 0 0 0 .001-.806l6.6-3.423A2.75 2.75 0 0 0 20.25 6M17.5 4.75a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5m-11 6a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5m11 6a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5" clipRule="evenodd" />
    </Svg>
  );
};

export const RowReproductionIcon = ({ size = 25, color = colors.neutral[1000] }: { size?: number, width?: string, height?: string, color?: string }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 32 32">
      <Rect x="6" y="8" rx="3" width="20" height="6" stroke={color} strokeWidth="2" fill="none" />
      <Rect x="4" y="20" width="24" height="2" fill={color} />
      <Rect x="4" y="26" width="24" height="2" fill={color} />
    </Svg>
  );
};