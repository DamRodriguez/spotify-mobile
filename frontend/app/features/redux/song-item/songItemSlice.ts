import { SongItemData } from "@/components/music/SongItem";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: SongItemData = {
  id: "0",
  artistName: "",
  songName: "",
  mp3: "",
  image: "",
  duration: 0,
};

const SongItemSlice = createSlice({
  name: "SongItem",
  initialState,
  reducers: {
    setSongItem: (state, action: PayloadAction<SongItemData>) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { setSongItem } = SongItemSlice.actions;
export default SongItemSlice.reducer;
