import { SearchIcon } from '@/components/icons/common';
import { WorldIcon } from '@/components/icons/listDinamicPage';
import OptimizedImage from '@/components/image/OptimizedImage';
import InteractiveSection from '@/components/sections/home/list-dinamic-page/InteractiveSection';
import ThemedText from '@/components/themed/ThemedText';
import ThemedView from '@/components/themed/ThemedView';
import { colors } from '@/themes/colors';
import { fontSize } from '@/themes/fontSize';
import { HomeListSection } from '@/types/homeListSection';
import { useLocalSearchParams } from 'expo-router';
import { useRef, useState } from 'react';
import { LayoutChangeEvent, TextInput } from 'react-native';
import HorizontalButtons from '@/components/sections/home/list-dinamic-page/HorizontalButtons';
import SongsList from '@/components/sections/home/list-dinamic-page/SongsList';
import ListDinamicPageHeader from '@/components/header/list-dinamic-page-header/ListDinamicPageHeader';
import spotifyImage from '@/assets/images/logos/spotify-logo.png';
import { listDinamicPageData } from '@/data/listDinamicPage';
import PlayButtonVariant from '@/components/other/PlayButtonVariant';
import { SongItemData } from '@/components/music/SongItem';

export type ListDinamicPageDataType = {
  sectionType: HomeListSection;
  id: string;
  frontImage: string;
  title: string;
  abbreviatedTitle?: string;
  songsDuration: number;
  songs: SongItemData[];
}

const ListDinamicPage = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const { type, id } = useLocalSearchParams<{
    type: HomeListSection;
    id: string;
  }>();
  const titleYRef = useRef(0);
  const [isTitleAtTop, setIsTitleAtTop] = useState(false);

  const playSectionYRef = useRef(0);
  const [isPlayButtonSticky, setIsPlayButtonSticky] = useState(false);

  const item = listDinamicPageData.find(
    (item) => item.sectionType === type && item.id === id
  );

  const userImage = "";

  if (!item) {
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
      <ListDinamicPageHeader
        title={item.abbreviatedTitle ? item.abbreviatedTitle : item.title}
        showTitle={isTitleAtTop}
      />
      <PlayButtonVariant
        isPlayButtonSticky={isPlayButtonSticky}
        handlePlayButtonPress={handlePlayButtonPress}
      />
      <SongsList
        data={item.songs}
        onEndReached={() => { }}
        isLoadingMore={false}
        onScroll={(e) => {
          const scrollY = e.nativeEvent.contentOffset.y;

          const reachedTitleTop = scrollY - 35 >= titleYRef.current;
          setIsTitleAtTop(reachedTitleTop);

          const shouldPlayButtonStick = scrollY - 45 >= playSectionYRef.current;
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
                  placeholderTextColor={colors.quaternary[300]}
                  style={{
                    color: colors.neutral[1000],
                    fontSize: fontSize.b2,
                    width: "100%",
                    fontWeight: 500
                  }}
                />
              </ThemedView>
            </ThemedView>

            <OptimizedImage
              source={""}
              style={{
                width: 300,
                height: 300,
                alignSelf: "center",
                borderRadius: 6,
                marginTop: 25,
                marginBottom: 10
              }}
            />

            <ThemedText
              style={
                item.abbreviatedTitle ? {
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
              {item.title}
            </ThemedText>

            <ThemedView style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
              <OptimizedImage
                source={item.sectionType === "playlist" ? userImage : spotifyImage}
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
                {item.sectionType === "playlist" ? "username" : "Spotify"}
              </ThemedText>
            </ThemedView>

            <ThemedView style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
              <WorldIcon />
              <ThemedText style={{
                color: colors.softGray,
                fontSize: fontSize.b2
              }}>
                {item.songsDuration} min
              </ThemedText>
            </ThemedView>

            <ThemedView
              onLayout={(e: LayoutChangeEvent) => {
                playSectionYRef.current = e.nativeEvent.layout.y;
              }}
            >
              <InteractiveSection
                isPlayButtonSticky={isPlayButtonSticky}
                onPlayButtonPress={handlePlayButtonPress}
              />
            </ThemedView>
            {item.sectionType === "playlist" && (
              <HorizontalButtons />
            )}
            <ThemedView />
          </ThemedView>
        }
      />
    </>
  );
};

export default ListDinamicPage;