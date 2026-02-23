import ListDinamicScreenHeader from "@/components/header/list-dinamic-screen-header/ListDinamicScreenHeader";
import ThemedScrollView from "@/components/themed/ThemedScrollView";
import ThemedView from "@/components/themed/ThemedView";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { fontSize } from "@/themes/fontSize";
import { colors } from "@/themes/colors";
import ThemedText from "@/components/themed/ThemedText";
import { useRef, useState } from "react";
import { sizes } from "@/constants/sizes";
import { useSharedValue } from "react-native-reanimated";
import ArtistImageCover from "@/components/sections/artist-dinamic-screen/ArtistImageCover";
import { ImageSourcePropType } from "react-native";
import { artistDinamicScreenData } from "@/data/artistDinamicScreen";
import { useLocalSearchParams } from "expo-router";
import { formatCompactNumber } from "@/utils/formatCompactNumber";
import InteractiveSection from "@/components/common/InteractiveSection";
import { SongItemData } from "@/components/music/SongItem";
import PopularSongsSection from "@/components/sections/artist-dinamic-screen/PopularSongsSection";
import { HomeListSectionType } from "@/types/homeListSection";
import usePlayFromList from "@/hooks/usePlayFromList";
import PopularReleasesSection from "@/components/sections/artist-dinamic-screen/album/PopularReleasesSection";
import { AlbumItemData } from "@/components/sections/artist-dinamic-screen/album/AlbumItem";
import NoContent from "@/components/other/NoContent";

export type ArtistDinamicScreenDataType = {
  id: string;
  coverImage: string | ImageSourcePropType;
  videoImage: string | ImageSourcePropType;
  artistName: string;
  monthlyListeners: number;
  isFollowing: boolean;
  songs: SongItemData[];
  albums: AlbumItemData[];
  headerColor: string;
}

const ArtistDinamicScreen = () => {
  const { id } = useLocalSearchParams<{ id: string; }>();
  const insets = useSafeAreaInsets();
  const [isTitleAtTop, setIsTitleAtTop] = useState<boolean>(false);
  const bgImageHeight = 250;
  const titleYRef = useRef(0);
  const scrollY = useSharedValue(0);
  const sectionType: HomeListSectionType = "artist"

  const data = artistDinamicScreenData.find(
    (item) => item.id === id
  );

  const { handlePlayButtonPress } = usePlayFromList({
    songs: data?.songs,
    sectionId: data?.id,
    sectionType: sectionType,
  });

  if (!data) {
    return (
      <NoContent />
    );
  }

  return (
    <>
      <ListDinamicScreenHeader
        title={data.artistName}
        showTitle={isTitleAtTop}
        headerColor={data.headerColor}
        absolute
      />
      <ArtistImageCover
        bgImageHeight={bgImageHeight}
        scrollY={scrollY}
        artistCoverImage={data.coverImage}
      />
      <ThemedScrollView
        style={{
          paddingBottom: 250 + bgImageHeight,
          padding: sizes.mainPadding,
          marginTop: insets.top + bgImageHeight,
          gap: 35,
          backgroundColor: colors.background
        }}
        onScroll={(e) => {
          const y = e.nativeEvent.contentOffset.y;
          scrollY.value = y;
          const reachedTitleTop = y - 200 >= titleYRef.current;
          setIsTitleAtTop(reachedTitleTop);
        }}
      >
        <ThemedText
          numberOfLines={1}
          style={{
            fontSize: fontSize.h3,
            color: colors.neutral[1000],
            fontWeight: 900,
            position: "absolute",
            top: -50,
            left: sizes.mainPadding,
            elevation: 20,
          }}
        >
          {data.artistName}
        </ThemedText>
        <ThemedView style={{ gap: 10 }}>
          <ThemedText
            style={{
              color: colors.opaqueWhite,
              fontSize: fontSize.b2
            }}
          >
            {formatCompactNumber(data.monthlyListeners)} oyentes mensuales
          </ThemedText>
          <InteractiveSection
            sectionId={data.id}
            videoImage={data.videoImage}
            followingButtonVariantProps={{
              artistName: data.artistName,
              isFollowing: data.isFollowing
            }}
            onPlayButtonPress={handlePlayButtonPress}
            onVideoButtonPress={() => { }}
            onDownloadButtonPress={() => { }}
            onShareButtonPress={() => { }}
            onOptionsButtonPress={() => { }}
            onRemixButtonPress={() => { }}
          />
        </ThemedView>

        <PopularSongsSection
          songs={data.songs}
          sectionId={data.id}
          sectionType={sectionType}
        />

        <PopularReleasesSection
          albums={data.albums}
          artistId={data.id}
        />

      </ThemedScrollView>
    </>
  );
};

export default ArtistDinamicScreen;