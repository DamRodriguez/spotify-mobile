import {
  setCurrentSong as setCurrentSongAction,
  setPlayFromList as setPlayFromListAction,
  togglePlay as togglePlayAction,
  SongState,
  CurrentSongPayload,
} from "@/features/redux/song-item/songItemSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

const useSongItem = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector(state => state.songItem);

  const setCurrentSong = (data: CurrentSongPayload) => {
    dispatch(setCurrentSongAction(data));
  };

  const setPlayFromList = (song: SongState) => {
    dispatch(
      setPlayFromListAction({
        song,
      })
    );
  };

  const togglePlay = () => {
    dispatch(togglePlayAction());
  };

  return {
    setCurrentSong,
    songData: state,
    setPlayFromList,
    togglePlay
  };
};

export default useSongItem;
