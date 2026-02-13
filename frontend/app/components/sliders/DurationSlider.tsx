import Slider from "@react-native-community/slider";
import { useEffect, useState } from "react";
import ThemedText from "@/components/themed/ThemedText";
import ThemedView from "@/components/themed/ThemedView";
import { colors } from "@/themes/colors";
import { fontSize } from "@/themes/fontSize";
import { formatTime } from "@/utils/formatTime";

interface DurationSliderProps {
  value: number;
  max: number;
  onValueChange: (val: number) => void;
  step?: number;
}

const DurationSlider: React.FC<DurationSliderProps> = ({
  value,
  max,
  onValueChange,
  step = 1,
}) => {
  const [localValue, setLocalValue] = useState(value);

  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  return (
    <ThemedView>
      <Slider
        style={{
          marginHorizontal: -12
        }}
        minimumValue={0}
        maximumValue={max}
        step={step}
        value={localValue}
        onValueChange={setLocalValue}
        onSlidingComplete={onValueChange}
        minimumTrackTintColor={colors.neutral[1000]}
        maximumTrackTintColor="#fff"
        thumbTintColor={colors.neutral[1000]}
      />
      <ThemedView
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 4,
        }}
      >
        <ThemedText
          style={{
            fontSize: fontSize.b2,
            color: colors.opaqueWhite,
          }}
        >
          {formatTime(localValue)}
        </ThemedText>

        <ThemedText
          style={{
            fontSize: fontSize.b2,
            color: colors.opaqueWhite,
          }}
        >
          {formatTime(max)}
        </ThemedText>
      </ThemedView>
    </ThemedView>
  );
};

export default DurationSlider;
