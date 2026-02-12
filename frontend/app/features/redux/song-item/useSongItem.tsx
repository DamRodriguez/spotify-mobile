import {
  setSongItem as setSongItemAction,
  SongState,
} from "@/features/redux/song-item/songItemSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

const useSongItem = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector(state => state.songItem);

  const setSongItemData = (data: SongState) => {
    dispatch(setSongItemAction(data));
  };

  return {
    setSongItemData,
    songItemData: state,
  };
};

export default useSongItem;
