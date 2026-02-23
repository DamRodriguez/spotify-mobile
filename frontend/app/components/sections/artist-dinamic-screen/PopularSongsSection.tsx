import TextButton from "@/components/buttons/TextButton";
import SongItem, { SongItemData } from "@/components/music/SongItem";
import BorderGradient from "@/components/other/BorderGradient";
import SmallTitle from "@/components/other/SmallTitle";
import ThemedView from "@/components/themed/ThemedView";
import { colors } from "@/themes/colors";
import { HomeListSectionType } from "@/types/homeListSection";
import { useState } from "react";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

type PopularSongsSectionProps = {
  songs: SongItemData[];
  sectionId: string;
  sectionType: HomeListSectionType;
}

const songItemHeight = 55;
const songItemGap = 15;
const minSongItemsToShow = 6;
const maxSongItemsToShow = 10;
const initialContainerHeight = (songItemHeight + songItemGap) * minSongItemsToShow - songItemGap;
const expandedContainerHeight = (songItemHeight + songItemGap) * maxSongItemsToShow - songItemGap;;

const PopularSongsSection = ({ songs, sectionId, sectionType }: PopularSongsSectionProps) => {
  const [isSongSectionFull, setIsSongSectionFull] = useState(false);

  const height = useSharedValue(400);

  const animatedStyle = useAnimatedStyle(() => ({
    height: height.value,
  }));

  const toggle = () => {
    setIsSongSectionFull((prev) => {
      height.value = withTiming(prev ? initialContainerHeight : expandedContainerHeight, {
        duration: 300,
      });

      return !prev;
    });
  };

  return (
    <ThemedView style={{ gap: 20 }}>
      <SmallTitle title="Populares" />
      <ThemedView
        style={{
          gap: 15
        }}
      >
        <Animated.View
          style={[{
            overflow: "hidden",
            gap: songItemGap
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