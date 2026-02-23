import { WorldIcon } from '@/components/icons/listDinamicPage';
import InteractiveSection from '@/components/common/InteractiveSection';
import ThemedText from '@/components/themed/ThemedText';
import ThemedView from '@/components/themed/ThemedView';
import { colors } from '@/themes/colors';
import { fontSize } from '@/themes/fontSize';
import { useLocalSearchParams } from 'expo-router';
import { useRef, useState } from 'react';
import { ImageSourcePropType, LayoutChangeEvent } from 'react-native';
import HorizontalButtons from '@/components/sections/list-dinamic-screen/HorizontalButtons';
import SongsList from '@/components/sections/list-dinamic-screen/SongsList';
import { listDinamicScreenData } from '@/data/list-dinamic-screen/listDinamicScreen';
import PlayButtonVariant from '@/components/other/PlayButtonVariant';
import { SongItemData } from '@/components/music/SongItem';
import { HomeListSectionType } from '@/types/homeListSection';
import ListDinamicScreenHeader from '@/components/header/list-dinamic-screen-header/ListDinamicScreenHeader';
import BorderGradient from '@/components/other/BorderGradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import CoverImage from '@/components/sections/list-dinamic-screen/CoverImage';
import UsernameSection from '@/components/sections/list-dinamic-screen/UsernameSection';
import usePlayFromList from '@/hooks/usePlayFromList';
import SearchInput from '@/components/sections/list-dinamic-screen/SearchInput';
import { AlbumItemType } from '@/components/sections/artist-dinamic-screen/album/AlbumItem';

type BaseSection = {
  id: string;
  frontImage: string | ImageSourcePropType | ImageSourcePropType[];
  videoImage: string | ImageSourcePropType;
  title: string;
  abbreviatedTitle?: string;
  headerColor?: string;
  songs: SongItemData[];
};

export type AlbumSection = BaseSection & {
  sectionType: "album";
  artist: {
    id: string;
    image: string | ImageSourcePropType;
    name: string;
  }
  type: AlbumItemType;
  releaseDate: number;
};

export type OtherSection = BaseSection & {
  sectionType: Exclude<HomeListSectionType, "album">;
  songsDuration: number;
  songs: SongItemData[];
};

export type ListDinamicScreenDataType =
  | AlbumSection
  | OtherSection;

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

  const albumTopDistance = -70;

  const data = listDinamicScreenData.find(
    (item) => item.sectionType === type && item.id === id
  );

  const { handlePlayButtonPress } = usePlayFromList({
    songs: data?.songs,
    sectionId: data?.id,
    sectionType: data?.sectionType,
  });

  if (!data) {
    return (
      <ThemedView style={{ padding: 16 }}>
        <ThemedText style={{ color: "#fff" }}>
          No se encontró el contenido solicitado.
        </ThemedText>
      </ThemedView>
    );
  }

  const isAlbumType = data.sectionType === "album";

  return (
    <>
      <ListDinamicScreenHeader
        title={data.abbreviatedTitle ? data.abbreviatedTitle : data.title}
        showTitle={isTitleAtTop}
        headerColor={data.headerColor || colors.softGray}
        absolute
      />
      <PlayButtonVariant
        isPlayButtonSticky={isPlayButtonSticky}
        handlePlayButtonPress={handlePlayButtonPress}
        sectionId={data.id}
      />
      <SongsList
        data={data.songs}
        sectionId={data.id}
        sectionType={data.sectionType}
        onEndReached={() => { }}
        isLoadingMore={false}
        onScroll={(e) => {
          const scrollY = e.nativeEvent.contentOffset.y;

          const reachedTitleTop = scrollY - (
            35 + (isAlbumType ? albumTopDistance : 0)
          ) >= titleYRef.current;
          setIsTitleAtTop(reachedTitleTop);

          const shouldPlayButtonStick = scrollY - (
            70 + (isAlbumType ? albumTopDistance : 0)
          ) >= playSectionYRef.current;
          setIsPlayButtonSticky(shouldPlayButtonStick);
        }}
        topSections={
          <ThemedView style={{ gap: 15 }}>
            {data.sectionType !== "album" && (
              <SearchInput
                inputValue={inputValue}
                setInputValue={setInputValue}
              />
            )}
            <CoverImage frontImage={data.frontImage} />
            <ThemedText
              style={
                data.abbreviatedTitle ? {
                  color: colors.quaternary[50],
                  fontSize: fontSize.b1,
                } : {
                  color: colors.neutral[1000],
                  fontSize: fontSize.h5,
                  fontWeight: 800,
                }
              }
              onLayout={(e: LayoutChangeEvent) => {
                titleYRef.current = e.nativeEvent.layout.y;
              }}
            >
              {data.title}
            </ThemedText>
            {isAlbumType ? (
              <UsernameSection
                sectionType={data.sectionType}
                artist={{
                  id: data.artist.id,
                  image: data.artist.image,
                  name: data.artist.name
                }}
              />
            ) : (
              <UsernameSection
                sectionType={data.sectionType}
              />
            )}
            {data.sectionType === "album" && (
              <ThemedText
                style={{
                  color: colors.opaqueWhite,
                  fontSize: fontSize.b2
                }}
              >
                {data.type} • {data.releaseDate}
              </ThemedText>
            )}
            {data.sectionType !== "album" && (
              <ThemedView style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
                <WorldIcon />
                <ThemedText style={{
                  color: colors.opaqueWhite,
                  fontSize: fontSize.b3
                }}>
                  {data.songsDuration} min
                </ThemedText>
              </ThemedView>
            )}
            <ThemedView
              onLayout={(e: LayoutChangeEvent) => {
                playSectionYRef.current = e.nativeEvent.layout.y;
              }}
            >
              <InteractiveSection
                sectionId={data.id}
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
              <HorizontalButtons style={{ marginBottom: 10 }} />
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