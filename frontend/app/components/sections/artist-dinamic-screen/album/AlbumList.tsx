import ListFooterSpinner from "@/components/other/ListFooterSpinner";
import ThemedView from "@/components/themed/ThemedView";
import { flashListDefaults } from "@/config/flashListDefaults";
import { sizes } from "@/constants/sizes";
import { FlashList } from "@shopify/flash-list";
import AlbumItem, { ALBUM_TYPES, AlbumItemData } from "./AlbumItem";
import SmallTitle from "@/components/other/SmallTitle";
import { useMemo, useState } from "react";
import HeaderFilter from "./HeaderFilter";
import { formatAlbumType } from "@/utils/formatAlbumType";

type AlbumListProps = {
  albums: AlbumItemData[];
};

const TYPE_ORDER = ALBUM_TYPES;

type FlatItem =
  | { kind: "header"; id: string; title: typeof ALBUM_TYPES[number] }
  | { kind: "album"; id: string; album: AlbumItemData };

const AlbumList = (props: AlbumListProps) => {
  const availableTypes = useMemo(() => {
    return TYPE_ORDER.filter(type =>
      props.albums.some(a => a.type === type)
    );
  }, [props.albums]);

  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const flatData = useMemo<FlatItem[]>(() => {
    const typesToRender = activeFilter
      ? [activeFilter]
      : availableTypes;

    return typesToRender.flatMap((type) => {
      const albumsOfType = props.albums.filter(
        (a) => a.type === type
      );

      if (!albumsOfType.length) return [];

      return [
        {
          id: `header-${type}`,
          kind: "header" as const,
          title: type as typeof ALBUM_TYPES[number],
        },
        ...albumsOfType.map((album) => ({
          id: album.id,
          kind: "album" as const,
          album,
        })),
      ];
    });
  }, [props.albums, activeFilter, availableTypes]);

  return (
    <>
      <HeaderFilter
        availableTypes={availableTypes}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />
      <ThemedView style={{ flex: 1 }}>
        <FlashList
          {...flashListDefaults}
          data={flatData}
          keyExtractor={(item) => item.id}
          getItemType={(item) => item.kind}
          ItemSeparatorComponent={() => <ThemedView style={{ height: 15 }} />}
          renderItem={({ item, index }) => {
            if (item.kind === "header") {
              return (
                <ThemedView style={{ marginTop: index === 0 ? 10 : 20 }}>
                  <SmallTitle title={formatAlbumType(item.title)} />
                </ThemedView>
              );
            }
            return (
              <AlbumItem
                data={item.album}
                withoutType
              />
            );
          }}
          contentContainerStyle={{
            paddingHorizontal: sizes.mainPadding,
            paddingBottom: 200,
          }}
          ListFooterComponent={<ListFooterSpinner isLoadingMore={false} />}
        />
      </ThemedView>
    </>
  );
};

export default AlbumList;