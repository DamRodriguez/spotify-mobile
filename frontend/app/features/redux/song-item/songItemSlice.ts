import { SongItemData } from "@/components/music/SongItem";
import { HomeListSectionType } from "@/types/homeListSection";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type CurrentSongPayload = Omit<SongState, "isPlaying" | "resetKey">;

export type SongState = SongItemData & {
  sectionId: string;
  sectionType: HomeListSectionType;
  isPlaying: boolean;
  resetKey: number;
}

const initialState: SongState = {
  id: "",
  artistId: "",
  artistName: "",
  songName: "",
  mp3: "",
  image: "",
  album: "",
  sectionId: "",
  sectionType: "",
  isPlaying: false,
  resetKey: 0,
};

const SongItemSlice = createSlice({
  name: "SongItem",
  initialState,
  reducers: {
    setCurrentSong: (state, action: PayloadAction<CurrentSongPayload>) => {
      const isSameSong = state.id === action.payload.id && state.sectionId === action.payload.sectionId;

      return {
        ...state,
        ...action.payload,
        isPlaying: true,
        resetKey: !isSameSong ? state.resetKey + 1 : state.resetKey,
      };
    },

    setPlayFromList: (
      state,
      action: PayloadAction<{ song: CurrentSongPayload }>
    ) => {
      const newSong = action.payload.song;

      const isSameList = state.sectionId === newSong.sectionId;

      if (isSameList) {
        state.isPlaying = !state.isPlaying;
      } else {
        return {
          ...newSong,
          isPlaying: true,
          resetKey: !isSameList ? state.resetKey + 1 : state.resetKey,
        };
      }
    },

    togglePlay: (state) => {
      state.isPlaying = !state.isPlaying;
    },

    resetSong: (state) => {
      state.isPlaying = true;
      state.resetKey += 1;
    },
  },
});

export const { setCurrentSong, setPlayFromList, togglePlay, resetSong } = SongItemSlice.actions;
export default SongItemSlice.reducer;
