import { SongItemData } from "@/components/music/SongItem";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type SongState = SongItemData & {
  sectionId: string;
}

const initialState: SongState = {
  id: "0",
  artistName: "",
  songName: "",
  mp3: "",
  image: "",
  duration: 0,
  sectionId: "",
};

const SongItemSlice = createSlice({
  name: "SongItem",
  initialState,
  reducers: {
    setSongItem: (state, action: PayloadAction<SongState>) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { setSongItem } = SongItemSlice.actions;
export default SongItemSlice.reducer;
