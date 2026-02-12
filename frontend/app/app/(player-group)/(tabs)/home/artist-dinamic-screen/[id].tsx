import ListDinamicScreenHeader from "@/components/header/list-dinamic-screen-header/ListDinamicScreenHeader";
import ThemedScrollView from "@/components/themed/ThemedScrollView";
import ThemedView from "@/components/themed/ThemedView";
import bgArtistTest from "@/assets/images/bgArtistTest.png"
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
import SongItem, { SongItemData } from "@/components/music/SongItem";

export type ArtistDinamicScreenDataType = {
  id: string;
  coverImage: string | ImageSourcePropType;
  artistName: string;
  monthlyListeners: number;
  isFollowing: boolean;
  songs: SongItemData[];
}

const ArtistDinamicScreen = () => {
  const { id } = useLocalSearchParams<{ id: string; }>();
  const insets = useSafeAreaInsets();
  const titleYRef = useRef(0);
  const [isTitleAtTop, setIsTitleAtTop] = useState<boolean>(false);
  const bgImageHeight = 250;
  const scrollY = useSharedValue(0);

  const item = artistDinamicScreenData.find(
    (item) => item.id === id
  );

  if (!item) {
    return (
      <ThemedView style={{ padding: 16 }}>
        <ThemedText style={{ color: "#fff" }}>
          No se encontró el contenido solicitado.
        </ThemedText>
      </ThemedView>
    );
  }

  return (
    <>
      <ListDinamicScreenHeader
        title={item.artistName}
        showTitle={isTitleAtTop}
        headerColor={colors.softGray}
        iconBgColor={isTitleAtTop ? "transparent" : colors.opaqueBlack}
        containerStyle={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
        }}
      />
      <ArtistImageCover
        bgImageHeight={bgImageHeight}
        scrollY={scrollY}
        artistCoverImage={item.coverImage}
      />
      <ThemedScrollView
        style={{
          paddingBottom: 250 + bgImageHeight,
          padding: sizes.mainPadding,
          marginTop: insets.top + bgImageHeight,
          gap: 30,
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
            top: -60,
            left: sizes.mainPadding,
            elevation: 20,
          }}
        >
          Depeche Mode
        </ThemedText>
        <ThemedView style={{ gap: 10 }}>
          <ThemedText
            style={{
              color: colors.softGray,
              fontSize: fontSize.b2
            }}
          >
            {formatCompactNumber(item.monthlyListeners)} oyentes mensuales
          </ThemedText>
          <InteractiveSection
            followingButtonVariantProps={{
              artistId: item.id,
              isFollowing: item.isFollowing
            }}
            onPlayButtonPress={() => { }}
            onVideoButtonPress={() => { }}
            onDownloadButtonPress={() => { }}
            onShareButtonPress={() => { }}
            onOptionsButtonPress={() => { }}
            onRemixButtonPress={() => { }}
          />
        </ThemedView>
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
          <ThemedView>
            {item.songs.map((item, index) => (
              <SongItem key={index} index={index + 1} data={item} enumerateSongs />
            ))}
          </ThemedView>
        </ThemedView>
      </ThemedScrollView>
    </>
  );
};

export default ArtistDinamicScreen;