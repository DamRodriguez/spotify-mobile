import OptimizedImage from "@/components/image/OptimizedImage";
import BorderGradient from "@/components/other/BorderGradient";
import NoContent from "@/components/other/NoContent";
import AboutArtistSection from "@/components/player/AboutArtistSection";
import ExploreSection from "@/components/player/explore/ExploreSection";
import InteractiveButtonsSection from "@/components/player/InteractiveButtonsSection";
import PlayerDataAndButtons from "@/components/player/PlayerDataAndButtons";
import PlayerHeader from "@/components/player/PlayerHeader";
import PlayerStickyHeader from "@/components/player/PlayerStickyHeader";
import { RelatedMusicVideoData } from "@/components/player/related-music-videos/RelatedMusicVideoItem";
import RelatedMusicVideosSection from "@/components/player/related-music-videos/RelatedMusicVideosSection";
import ThemedScrollView from "@/components/themed/ThemedScrollView";
import ThemedView from "@/components/themed/ThemedView";
import { sizes } from "@/constants/sizes";
import { playerSongData } from "@/data/player/playerSongData";
import useSongItem from "@/features/redux/song-item/useSongItem";
import { colors } from "@/themes/colors";
import { useRef, useState } from "react";
import { ImageSourcePropType, LayoutChangeEvent } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export type PlayerSongImage = string | ImageSourcePropType;

export type PlayercurrentSong = {
  id: string;
  exploreImages: {
    songs: PlayerSongImage;
    similarBand: PlayerSongImage;
    similarSong: PlayerSongImage;
  },
  aboutArtist: {
    image: PlayerSongImage,
    monthlyListeners: number,
    textInformation: string,
  },
  relatedMusicVideo: RelatedMusicVideoData[],
}

const PlayerScreen = () => {
  const insets = useSafeAreaInsets();
  const { currentSong, songState } = useSongItem();
  const playerData = playerSongData.find(
    (item) => item.id === currentSong?.artistId,
  );
  const playerButtonsYRef = useRef(0);
  const [isPlayerButtonsAtTop, setIsPlayerButtonsAtTop] = useState(false);

  if (!playerData) {
    return (
      <NoContent />
    );
  }

  if (!currentSong) return null;

  return (
    <>
      <PlayerStickyHeader
        isVisible={isPlayerButtonsAtTop}
        headerColor={currentSong.color}
        songName={currentSong.songName}
        artistName={currentSong.artistName}
      />
      <ThemedScrollView
        contentContainerStyle={{
          backgroundColor: currentSong.color || colors.neutral[500],
          paddingTop: insets.top + 16,
          paddingHorizontal: sizes.mainPadding,
          paddingBottom: insets.bottom + 50,
          gap: 40,
        }}
        onScroll={(e) => {
          const scrollY = e.nativeEvent.contentOffset.y;
          const reachedButtonsTop = scrollY - 85 >= playerButtonsYRef.current;
          setIsPlayerButtonsAtTop(reachedButtonsTop);
        }}
      >
        <BorderGradient
          direction="bottom"
          heightFull
          shadowDistance={2000}
          shadowColor={colors.background}
        />
        <PlayerHeader
          fromWhere={songState.sectionType}
          artistName={currentSong.artistName}
        />
        <OptimizedImage
          source={currentSong.image}
          style={{
            width: "100%",
            aspectRatio: 1,
            borderRadius: 6,
          }}
        />
        <ThemedView
          onLayout={(e: LayoutChangeEvent) => {
            playerButtonsYRef.current = e.nativeEvent.layout.y;
          }}
        >
          <PlayerDataAndButtons />
        </ThemedView>
        <ThemedView
          style={{
            gap: 25
          }}
        >
          <InteractiveButtonsSection />
          <ExploreSection
            artistName={currentSong.artistName}
            songName={currentSong.songName}
            images={{
              ...playerData.exploreImages,
              similarSong: currentSong.image
            }}
          />
          <AboutArtistSection
            artistId={currentSong.artistId}
            artistName={currentSong.artistName}
            image={playerData.aboutArtist.image}
            monthlyListeners={playerData.aboutArtist.monthlyListeners}
            textInformation={playerData.aboutArtist.textInformation}
          />
          <RelatedMusicVideosSection
            data={playerData.relatedMusicVideo}
            artistName={currentSong.artistName}
          />
        </ThemedView>
      </ThemedScrollView>
    </>
  );
}

export default PlayerScreen;
