import { colors } from "@/themes/colors";
import Svg, { Path } from "react-native-svg";

const iconSize = 35;

export const MusicIcon = ({ size = iconSize, color = colors.softWhite }: { size?: number, color?: string }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path fill={color} d="M20 3v14a4 4 0 1 1-2-3.465V5H9v12a4 4 0 1 1-2-3.465V3h13ZM5 19a2 2 0 1 0 0-4a2 2 0 0 0 0 4Zm11 0a2 2 0 1 0 0-4a2 2 0 0 0 0 4Z" />
    </Svg>
  );
};

export const CollaborativeIcon = ({ size = iconSize, color = colors.softWhite }: { size?: number, color?: string }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 32 32">
      <Path fill={color} d="M10 11a4 4 0 1 0 0-8a4 4 0 0 0 0 8Zm-8 4.5A2.5 2.5 0 0 1 4.5 13h6.375a5.488 5.488 0 0 0-.375 2c0 1.86.923 3.505 2.337 4.5H10.5a4 4 0 0 0-3.547 2.15c-1.916-.493-3.142-1.452-3.899-2.54C2 17.595 2 16.026 2 15.75v-.25Zm23.047 6.15c1.916-.493 3.142-1.452 3.899-2.54C30 17.595 30 16.025 30 15.75v-.25a2.5 2.5 0 0 0-2.5-2.5h-6.375c.242.62.375 1.294.375 2c0 1.86-.923 3.505-2.337 4.5H21.5a4 4 0 0 1 3.547 2.15ZM26 7a4 4 0 1 1-8 0a4 4 0 0 1 8 0ZM8 23.5a2.5 2.5 0 0 1 2.5-2.5h11a2.5 2.5 0 0 1 2.5 2.5v.25c0 .275 0 1.845-1.054 3.36C21.846 28.691 19.756 30 16 30c-3.755 0-5.846-1.309-6.946-2.89C8 25.595 8 24.026 8 23.75v-.25Zm8-4.5a4 4 0 1 0 0-8a4 4 0 0 0 0 8Z" />
    </Svg>
  );
};

export const FusionIcon = ({ size = iconSize, color = colors.softWhite }: { size?: number, color?: string }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path fill={color} d="M17 1q2.5 0 4.25 1.75T23 7q0 2.5-1.75 4.25T17 13q-2.5 0-4.25-1.75T11 7q0-2.5 1.75-4.25T17 1Zm.1 14.025q.725 0 1.413-.15t1.337-.425q-.525 3.275-3.025 5.413T11 22q-1.875 0-3.513-.713t-2.85-1.924q-1.212-1.213-1.925-2.85T2 13q0-3.325 2.138-5.825T9.55 4.15q-.275.675-.413 1.4T9 7q.05 3.35 2.4 5.688t5.7 2.337Z" />
    </Svg>
  );
};

export const JamIcon = ({ size = iconSize, color = colors.softWhite }: { size?: number, color?: string }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 12 12">
      <Path fill={color} d="M4 6a2 2 0 1 0 0-4a2 2 0 0 0 0 4Zm4.5 0a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3ZM2.25 7C1.56 7 1 7.56 1 8.25c0 0 0 2.25 3 2.25c2.378 0 2.871-1.414 2.973-2C7 8.347 7 8.25 7 8.25C7 7.56 6.44 7 5.75 7h-3.5Zm5.746 1.6a2.645 2.645 0 0 1-.09.536c-.063.223-.167.49-.342.765a4.1 4.1 0 0 0 .935.099c2.5 0 2.5-1.75 2.5-1.75c0-.69-.56-1.25-1.25-1.25H7.62c.24.358.379.787.379 1.25v.25l-.003.1Z" />
    </Svg>
  );
};