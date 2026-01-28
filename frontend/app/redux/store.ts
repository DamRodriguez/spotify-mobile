import { configureStore } from "@reduxjs/toolkit";
import songItemReducer from "@/features/redux/song-item/songItemSlice";

export const store = configureStore({
  reducer: {
    songItem: songItemReducer,
  },
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
