import {
  setProgress as setProgressAction,
  resetProgress as resetProgressAction,
  SongProgressState,
} from "@/features/redux/song-progress/songProgressSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

const useSongProgress = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector(state => state.songProgress);

  const setProgress = ({ position, duration }: SongProgressState) => {
    dispatch(setProgressAction({ position, duration }));
  }

  const resetProgress = () => {
    dispatch(resetProgressAction());
  }

  return {
    state,
    setProgress,
    resetProgress,
  };
};

export default useSongProgress;
