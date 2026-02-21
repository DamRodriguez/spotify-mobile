import { configureStore } from "@reduxjs/toolkit";
import songItemReducer from "@/features/redux/song-item/songItemSlice";
import notificationReducer from "@/features/redux/notification/notificationSlice"

export const store = configureStore({
  reducer: {
    songItem: songItemReducer,
    notification: notificationReducer,
  },
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
