import { SongItemData } from "@/components/music/SongItem";
import { HomeListSectionType } from "@/types/homeListSection";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type CurrentSongPayload = Omit<SongState, "isPlaying">;

export type SongState = SongItemData & {
  sectionId: string;
  sectionType: HomeListSectionType;
  isPlaying: boolean;
}

const initialState: SongState = {
  id: "",
  artistName: "",
  songName: "",
  mp3: "",
  image: "",
  album: "",
  sectionId: "",
  sectionType: "",
  isPlaying: false,
};

const SongItemSlice = createSlice({
  name: "SongItem",
  initialState,
  reducers: {
    setCurrentSong: (state, action: PayloadAction<CurrentSongPayload>) => {
      return {
        ...state,
        ...action.payload,
        isPlaying: true,
      };
    },

    setPlayFromList: (
      state,
      action: PayloadAction<{ song: SongState }>
    ) => {
      const newSong = action.payload.song;

      const isSameList = state.sectionId === newSong.sectionId;

      if (isSameList) {
        state.isPlaying = !state.isPlaying;
      } else {
        return {
          ...newSong,
          isPlaying: true,
        };
      }
    },

    togglePlay: (state) => {
      state.isPlaying = !state.isPlaying;
    },
  },
});

export const { setCurrentSong, setPlayFromList, togglePlay } = SongItemSlice.actions;
export default SongItemSlice.reducer;
