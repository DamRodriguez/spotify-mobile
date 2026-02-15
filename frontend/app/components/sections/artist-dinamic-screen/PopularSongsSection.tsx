import { ArtistDinamicScreenDataType } from "@/app/(app)/(player-group)/(tabs)/home/artist-dinamic-screen/[id]";
import TextButton from "@/components/buttons/TextButton";
import SongItem from "@/components/music/SongItem";
import BorderGradient from "@/components/other/BorderGradient";
import ThemedText from "@/components/themed/ThemedText";
import ThemedView from "@/components/themed/ThemedView";
import { colors } from "@/themes/colors";
import { fontSize } from "@/themes/fontSize";
import { HomeListSectionType } from "@/types/homeListSection";
import { useState } from "react";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

type PopularSongsSectionProps = {
  songs: ArtistDinamicScreenDataType["songs"];
  sectionId: string;
  sectionType: HomeListSectionType;
}

const INITIAL_HEIGHT = 380;
const CONTENT_HEIGHT = 650;

const PopularSongsSection = ({ songs, sectionId, sectionType }: PopularSongsSectionProps) => {
  const [isSongSectionFull, setIsSongSectionFull] = useState(false);

  const height = useSharedValue(400);

  const animatedStyle = useAnimatedStyle(() => ({
    height: height.value,
  }));

  const toggle = () => {
    setIsSongSectionFull((prev) => {
      height.value = withTiming(prev ? INITIAL_HEIGHT : CONTENT_HEIGHT, {
        duration: 300,
      });

      return !prev;
    });
  };

  return (
    <ThemedView style={{ gap: 10 }}>
      <ThemedText
        style={{
          fontSize: fontSize.h7,
          color: colors.neutral[1000],
          fontWeight: 800
        }}
      >
        Populares
      </ThemedText>
      <ThemedView
        style={{
          gap: 15
        }}
      >
        <Animated.View
          style={[{
            overflow: "hidden",
          }, animatedStyle]}
        >
          {songs.map((item, index) => (
            <SongItem
              key={index}
              data={item}
              index={index + 1}
              sectionId={sectionId}
              sectionType={sectionType}
              enumerateSongs
            />
          ))}
          <BorderGradient
            direction="bottom"
            widthFull
            shadowDistance={80}
            shadowColor={colors.background}
            hideShadow={isSongSectionFull}
          />
        </Animated.View>
        <TextButton
          onPress={toggle}
          text={isSongSectionFull ? "Mostrar menos" : "Ver más"}
        />
      </ThemedView>
    </ThemedView>
  );
};

export default PopularSongsSection;