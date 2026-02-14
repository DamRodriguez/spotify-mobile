import { useCallback, useMemo } from "react";

import { SongItemData } from "@/components/music/SongItem";
import useSongItem from "@/features/redux/song-item/useSongItem";
import { HomeListSectionType } from "@/types/homeListSection";

type UsePlayFromListParams = {
  songs?: SongItemData[];
  sectionId?: string;
  sectionType?: HomeListSectionType;
};

const usePlayFromList = ({
  songs,
  sectionId,
  sectionType,
}: UsePlayFromListParams) => {
  const { setPlayFromList } = useSongItem();

  const safeSongs = useMemo<SongItemData[]>(() => {
    return songs ?? [];
  }, [songs]);

  const firstSong = useMemo<SongItemData | undefined>(() => {
    return safeSongs[0];
  }, [safeSongs]);

  const handlePlayButtonPress = useCallback(() => {
    if (!firstSong) return;
    if (!sectionId || !sectionType) return;

    setPlayFromList({
      ...firstSong,
      sectionId,
      sectionType,
      isPlaying: true,
    });
  }, [firstSong, sectionId, sectionType, setPlayFromList]);

  return {
    handlePlayButtonPress,
    canPlay: !!firstSong && !!sectionId && !!sectionType,
  };
};

export default usePlayFromList;
