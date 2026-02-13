import { SearchIcon } from '@/components/icons/common';
import { WorldIcon } from '@/components/icons/listDinamicPage';
import OptimizedImage from '@/components/image/OptimizedImage';
import InteractiveSection from '@/components/common/InteractiveSection';
import ThemedText from '@/components/themed/ThemedText';
import ThemedView from '@/components/themed/ThemedView';
import { colors } from '@/themes/colors';
import { fontSize } from '@/themes/fontSize';
import { useLocalSearchParams } from 'expo-router';
import { useRef, useState } from 'react';
import { ImageSourcePropType, LayoutChangeEvent, TextInput } from 'react-native';
import HorizontalButtons from '@/components/sections/list-dinamic-screen/HorizontalButtons';
import SongsList from '@/components/sections/list-dinamic-screen/SongsList';
import spotifyImage from '@/assets/images/logos/spotify-logo.png';
import { listDinamicScreenData } from '@/data/listDinamicScreen';
import PlayButtonVariant from '@/components/other/PlayButtonVariant';
import { SongItemData } from '@/components/music/SongItem';
import { HomeListSectionType } from '@/types/homeListSection';
import ListDinamicScreenHeader from '@/components/header/list-dinamic-screen-header/ListDinamicScreenHeader';
import userImage from "@/assets/images/other/user.png"
import BorderGradient from '@/components/other/BorderGradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export type ListDinamicScreenDataType = {
  sectionType: HomeListSectionType;
  id: string;
  frontImage: string | ImageSourcePropType | ImageSourcePropType[];
  videoImage: string | ImageSourcePropType;
  title: string;
  abbreviatedTitle?: string;
  songsDuration: number;
  songs: SongItemData[];
  headerColor?: string;
}

const ListDinamicScreen = () => {
  const insets = useSafeAreaInsets();
  const [inputValue, setInputValue] = useState<string>("");
  const { type, id } = useLocalSearchParams<{
    type: HomeListSectionType;
    id: string;
  }>();
  const titleYRef = useRef(0);
  const [isTitleAtTop, setIsTitleAtTop] = useState(false);

  const playSectionYRef = useRef(0);
  const [isPlayButtonSticky, setIsPlayButtonSticky] = useState(false);

  const data = listDinamicScreenData.find(
    (item) => item.sectionType === type && item.id === id
  );

  if (!data) {
    return (
      <ThemedView style={{ padding: 16 }}>
        <ThemedText style={{ color: "#fff" }}>
          No se encontró el contenido solicitado.
        </ThemedText>
      </ThemedView>
    );
  }

  const handlePlayButtonPress = () => {
  }

  return (
    <>
      <BorderGradient
        direction="top"
        shadowDistance={insets.top}
        shadowColor={colors.background}
        widthFull
        style={{ zIndex: 99 }}
      />
      <ListDinamicScreenHeader
        title={data.abbreviatedTitle ? data.abbreviatedTitle : data.title}
        showTitle={isTitleAtTop}
        headerColor={data.headerColor || colors.softGray}
        absolute
      />
      <PlayButtonVariant
        isPlayButtonSticky={isPlayButtonSticky}
        handlePlayButtonPress={handlePlayButtonPress}
      />
      <SongsList
        data={data.songs}
        sectionId={data.id}
        onEndReached={() => { }}
        isLoadingMore={false}
        onScroll={(e) => {
          const scrollY = e.nativeEvent.contentOffset.y;

          const reachedTitleTop = scrollY - 35 >= titleYRef.current;
          setIsTitleAtTop(reachedTitleTop);

          const shouldPlayButtonStick = scrollY - 70 >= playSectionYRef.current;
          setIsPlayButtonSticky(shouldPlayButtonStick);
        }}
        topSections={
          <ThemedView style={{ gap: 15 }}>
            <ThemedView>
              <ThemedView
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  borderRadius: 6,
                  overflow: "hidden",
                  backgroundColor: colors.neutral["10"],
                  paddingHorizontal: 12,
                  gap: 10,
                  minHeight: 40,
                  paddingRight: 60,
                }}
              >
                <SearchIcon />
                <TextInput
                  placeholder="Buscar en ésta página"
                  value={inputValue}
                  onChangeText={value => { setInputValue(value); }}
                  placeholderTextColor={colors.softWhite}
                  style={{
                    color: colors.neutral[1000],
                    fontSize: fontSize.b2,
                    width: "100%",
                    fontWeight: 500
                  }}
                />
              </ThemedView>
            </ThemedView>

            <ThemedView
              style={{
                marginTop: 25,
                marginBottom: 10,
                alignItems: "center",
              }}
            >
              {data.frontImage instanceof Array ? (
                <ThemedView
                  style={{
                    backgroundColor: "#fff",
                    borderRadius: 6,
                    width: "70%",
                    aspectRatio: 1,
                    flexWrap: "wrap",
                    overflow: "hidden"
                  }}
                >
                  {data.frontImage.map((image, index) => (
                    <OptimizedImage
                      key={index}
                      source={image}
                      style={{
                        width: "50%",
                        height: "50%",
                      }}
                    />
                  ))}
                </ThemedView>
              ) : (
                <OptimizedImage
                  source={data.frontImage}
                  style={{
                    width: "70%",
                    aspectRatio: 1,
                    alignSelf: "center",
                    borderRadius: 6,
                  }}
                />
              )}
            </ThemedView>

            <ThemedText
              style={
                data.abbreviatedTitle ? {
                  color: colors.quaternary[50],
                  fontSize: fontSize.b1,
                } : {
                  color: colors.neutral[1000],
                  fontSize: fontSize.h5,
                  fontWeight: 700,
                }
              }
              onLayout={(e: LayoutChangeEvent) => {
                titleYRef.current = e.nativeEvent.layout.y;
              }}
            >
              {data.title}
            </ThemedText>

            <ThemedView style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
              <OptimizedImage
                source={data.sectionType === "playlist" ? userImage : spotifyImage}
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: 999
                }}
              />
              <ThemedText style={{
                color: colors.neutral[1000],
                fontSize: fontSize.b2,
                fontWeight: 600
              }}>
                {data.sectionType === "playlist" ? "username" : "Spotify"}
              </ThemedText>
            </ThemedView>

            <ThemedView style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
              <WorldIcon />
              <ThemedText style={{
                color: colors.softGray,
                fontSize: fontSize.b2
              }}>
                {data.songsDuration} min
              </ThemedText>
            </ThemedView>

            <ThemedView
              onLayout={(e: LayoutChangeEvent) => {
                playSectionYRef.current = e.nativeEvent.layout.y;
              }}
            >
              <InteractiveSection
                videoImage={data.videoImage}
                isPlayButtonSticky={isPlayButtonSticky}
                onPlayButtonPress={handlePlayButtonPress}
                onVideoButtonPress={() => { }}
                onDownloadButtonPress={() => { }}
                onShareButtonPress={() => { }}
                onOptionsButtonPress={() => { }}
                onRemixButtonPress={() => { }}
              />
            </ThemedView>
            {data.sectionType === "playlist" && (
              <HorizontalButtons />
            )}
            <ThemedView />
          </ThemedView>
        }
      />
      <BorderGradient
        direction="top"
        shadowDistance={insets.top + 60}
        shadowColor={colors.background}
        widthFull
      />
    </>
  );
};

export default ListDinamicScreen;