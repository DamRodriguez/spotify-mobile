import {
  setQueueAndPlay as setQueueAndPlayAction,
  nextSong as nextSongAction,
  previousSong as previousSongAction,
  togglePlay as togglePlayAction,
  resetSong as resetSongAction,
} from "@/features/redux/song-item/songItemSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { SongItemData } from "@/components/music/SongItem";
import { HomeListSectionType } from "@/types/homeListSection";

const useSongItem = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.songItem);

  const setQueueAndPlay = (
    songs: SongItemData[],
    startIndex: number,
    sectionId: string,
    sectionType: HomeListSectionType
  ) => {
    dispatch(
      setQueueAndPlayAction({
        songs,
        startIndex,
        sectionId,
        sectionType,
      })
    );
  };

  const nextSong = () => {
    dispatch(nextSongAction());
  };

  const previousSong = () => {
    dispatch(previousSongAction());
  };

  const togglePlay = () => {
    dispatch(togglePlayAction());
  };

  const resetSong = () => {
    dispatch(resetSongAction());
  };

  const currentSong =
    state.currentIndex !== null
      ? state.queue[state.currentIndex]
      : null;

  return {
    songState: state,
    currentSong,
    setQueueAndPlay,
    nextSong,
    previousSong,
    togglePlay,
    resetSong,
  };
};

export default useSongItem;