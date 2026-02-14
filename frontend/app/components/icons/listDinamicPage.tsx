import { colors } from "@/themes/colors";
import Svg, { Circle, G, Path } from "react-native-svg";

export const WorldIcon = ({ size = 20, color = colors.softGray }: { size?: number, width?: string, height?: string, color?: string }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <G fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
        <Path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0m.6-3h16.8M3.6 15h16.8" />
        <Path d="M11.5 3a17 17 0 0 0 0 18m1-18a17 17 0 0 1 0 18" />
      </G>
    </Svg>
  );
};

export const DownloadIcon = ({ size = 32, color = colors.softGray }: { size?: number, width?: string, height?: string, color?: string }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <G fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color="currentColor">
        <Circle cx="12" cy="12" r="10" />
        <Path d="M12 16V8m0 8c-.7 0-2.008-1.994-2.5-2.5M12 16c.7 0 2.008-1.994 2.5-2.5" />
      </G>
    </Svg>
  )
};

export const ShareIcon = ({ size = 32, color = colors.softGray }: { size?: number, width?: string, height?: string, color?: string }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 2048 2048">
      <Path fill={color} d="M1536 1536h-13q-23-112-81-206t-141-162t-187-106t-218-38q-88 0-170 23t-153 64t-129 100t-100 130t-65 153t-23 170H128q0-120 35-231t101-205t156-167t204-115q-113-74-176-186t-64-248q0-106 40-199t109-163T696 40T896 0q106 0 199 40t163 109t110 163t40 200q0 66-16 129t-48 119t-75 103t-101 83q112 43 206 118t162 176v296zM512 512q0 80 30 149t82 122t122 83t150 30q79 0 149-30t122-82t83-122t30-150q0-79-30-149t-82-122t-123-83t-149-30q-80 0-149 30t-122 82t-83 123t-30 149zm1280 1152h256v128h-256v256h-128v-256h-256v-128h256v-256h128v256z" />
    </Svg>
  )
};

export const MixIcon = ({ size = 32, color = colors.softGray }: { size?: number, width?: string, height?: string, color?: string }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 512 512">
      <Path fill={color} fillRule="evenodd" d="m269.264 271.083l70.256 70.25l56.966-.001l-27.57-27.58l30.17-30.17l79.084 79.084l-79.085 79.085l-30.17-30.17L396.487 384H321.83l-82.745-82.74zM399.085 70.248l79.085 79.085l-79.085 79.085l-30.17-30.17l27.572-27.582H339.52L126.17 384H42.667v-42.667h65.813L321.83 128l74.657-.001l-27.572-27.581zM126.17 128l82.745 82.739l-30.179 30.177l-70.256-70.25H42.667V128z" />
    </Svg>
  );
};