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
  const {
    songState,
    setQueueAndPlay,
    togglePlay,
  } = useSongItem();

  const safeSongs = useMemo<SongItemData[]>(() => {
    return songs ?? [];
  }, [songs]);

  const canPlay = !!safeSongs.length && !!sectionId && !!sectionType;

  const handlePlayButtonPress = useCallback(() => {
    if (!canPlay) return;

    const isSameSection = songState.sectionId === sectionId;

    if (isSameSection && songState.queue.length > 0) {
      togglePlay();
      return;
    }

    setQueueAndPlay(
      safeSongs,
      0,
      sectionId!,
      sectionType!
    );
  }, [
    canPlay,
    songState.sectionId,
    songState.queue.length,
    sectionId,
    sectionType,
    safeSongs,
    togglePlay,
    setQueueAndPlay,
  ]);

  return {
    handlePlayButtonPress,
    canPlay,
  };
};

export default usePlayFromList;