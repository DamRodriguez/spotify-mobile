import { SongItemData } from "@/components/music/SongItem";
import {
  setSongItem as setSongItemAction,
} from "@/features/redux/song-item/songItemSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

const useSongItem = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector(state => state.songItem);

  const setSongItemData = (data: SongItemData) => {
    dispatch(setSongItemAction(data));
  };

  return {
    setSongItemData,
    songItemData: state,
  };
};

export default useSongItem;
