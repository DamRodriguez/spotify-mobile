import {
  setCurrentSong as setCurrentSongAction,
  setPlayFromList as setPlayFromListAction,
  togglePlay as togglePlayAction,
  resetSong as resetSongAction,
  CurrentSongPayload,
} from "@/features/redux/song-item/songItemSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

const useSongItem = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector(state => state.songItem);

  const setCurrentSong = (data: CurrentSongPayload) => {
    dispatch(setCurrentSongAction(data));
  };

  const setPlayFromList = (song: CurrentSongPayload) => {
    dispatch(
      setPlayFromListAction({
        song,
      })
    );
  };

  const togglePlay = () => {
    dispatch(togglePlayAction());
  };

  const resetSong = () => {
    dispatch(resetSongAction());
  };

  return {
    setCurrentSong,
    songData: state,
    setPlayFromList,
    togglePlay,
    resetSong,
  };
};

export default useSongItem;
