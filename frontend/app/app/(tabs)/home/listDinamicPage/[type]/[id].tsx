import { SearchIcon } from '@/components/icons/common';
import { WorldIcon } from '@/components/icons/listDinamicPage';
import OptimizedImage from '@/components/image/OptimizedImage';
import InteractiveSection from '@/components/sections/home/list-dinamic-page/InteractiveSection';
import ThemedText from '@/components/themed/ThemedText';
import ThemedView from '@/components/themed/ThemedView';
import { listDinamicPageData } from '@/data/home';
import { colors } from '@/themes/colors';
import { fontSize } from '@/themes/fontSize';
import { HomeListSection } from '@/types/homeListSection';
import { useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import HorizontalButtons from '@/components/sections/home/list-dinamic-page/HorizontalButtons';
import SongsList, { SongItem } from '@/components/sections/home/list-dinamic-page/SongsList';

const styles = StyleSheet.create({
  title: {
    color: colors.neutral[1000],
    fontSize: fontSize.h5,
    fontWeight: 700,
  }
});

export type ListDinamicPageDataType = {
  sectionType: HomeListSection;
  id: string;
  frontImage: string;
  title: string;
  songsDuration: number;
  songs: SongItem[]
}

const ListDinamicPage = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const { type, id } = useLocalSearchParams<{
    type: HomeListSection;
    id: string;
  }>();

  const item = listDinamicPageData.find(
    (item) => item.sectionType === type && item.id === id
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
    <SongsList
      data={item.songs}
      artistName={item.title}
      onEndReached={() => { }}
      isLoadingMore={false}
      topSections={
        <ThemedView style={{
          gap: 15,
        }}>
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

          <ThemedText style={styles.title}>
            {item.title}
          </ThemedText>

          <ThemedView style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
            <OptimizedImage
              source={""}
              style={{
                width: 35,
                height: 35,
                borderRadius: 999
              }}
            />
            <ThemedText style={{
              color: colors.neutral[1000],
              fontSize: fontSize.b2
            }}>
              username
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

          <InteractiveSection />
          <HorizontalButtons />
          <ThemedView />
        </ThemedView>
      }
    />
  );
};

export default ListDinamicPage;