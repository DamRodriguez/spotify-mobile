import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface SongProgressState {
  position: number;
  duration: number;
}

const initialState: SongProgressState = {
  position: 0,
  duration: 0,
};

const songProgressSlice = createSlice({
  name: "playerProgress",
  initialState,
  reducers: {
    setProgress: (
      state,
      action: PayloadAction<{ position: number; duration: number }>
    ) => {
      state.position = action.payload.position;
      state.duration = action.payload.duration;
    },
    resetProgress: (state) => {
      state.position = 0;
      state.duration = 0;
    },
  },
});

export const { setProgress, resetProgress } = songProgressSlice.actions;
export default songProgressSlice.reducer;