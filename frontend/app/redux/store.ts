import { configureStore } from "@reduxjs/toolkit";
import songItemReducer from "@/features/redux/song-item/songItemSlice";
import notificationReducer from "@/features/redux/notification/notificationSlice"
import songProgressReducer from "@/features/redux/song-progress/songProgressSlice"

export const store = configureStore({
  reducer: {
    songItem: songItemReducer,
    songProgress: songProgressReducer,
    notification: notificationReducer,
  },
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
