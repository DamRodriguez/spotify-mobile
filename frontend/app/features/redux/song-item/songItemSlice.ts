import { SongItemData } from "@/components/music/SongItem";
import { HomeListSectionType } from "@/types/homeListSection";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type SongState = {
  queue: SongItemData[];
  currentIndex: number | null;
  sectionId: string;
  sectionType: HomeListSectionType;
  isPlaying: boolean;
  resetKey: number;
};

const initialState: SongState = {
  queue: [],
  currentIndex: null,
  sectionId: "",
  sectionType: "",
  isPlaying: false,
  resetKey: 0,
};

const SongItemSlice = createSlice({
  name: "SongItem",
  initialState,
  reducers: {
    setQueueAndPlay: (
      state,
      action: PayloadAction<{
        songs: SongItemData[];
        startIndex: number;
        sectionId: string;
        sectionType: HomeListSectionType;
      }>
    ) => {
      const { songs, startIndex, sectionId, sectionType } = action.payload;

      state.queue = songs;
      state.currentIndex = startIndex;
      state.sectionId = sectionId;
      state.sectionType = sectionType;
      state.isPlaying = true;
      state.resetKey += 1;
    },

    nextSong: (state) => {
      if (state.currentIndex === null) return;

      const nextIndex = state.currentIndex + 1;

      if (nextIndex >= state.queue.length) return;

      state.currentIndex = nextIndex;
      state.isPlaying = true;
      state.resetKey += 1;
    },

    previousSong: (state) => {
      if (state.currentIndex === null) return;

      const prevIndex = state.currentIndex - 1;

      if (prevIndex < 0) return;

      state.currentIndex = prevIndex;
      state.isPlaying = true;
      state.resetKey += 1;
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

export const {
  setQueueAndPlay,
  nextSong,
  previousSong,
  togglePlay,
  resetSong,
} = SongItemSlice.actions;

export default SongItemSlice.reducer;