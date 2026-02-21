import { BasicNotificationProps } from "@/components/notifications/BasicNotification";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type NotificationType = BasicNotificationProps["type"];

export type NotificationState = {
  isVisible: boolean;
  type: NotificationType;
  text: string;
};

const initialState: NotificationState = {
  isVisible: false,
  type: "info",
  text: "",
};

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    showNotification: (
      state,
      action: PayloadAction<{
        type: NotificationType;
        text: string;
      }>
    ) => {
      state.isVisible = true;
      state.type = action.payload.type;
      state.text = action.payload.text;
    },

    hideNotification: (state) => {
      state.isVisible = false;
    },
  },
});

export const {
  showNotification,
  hideNotification,
} = notificationSlice.actions;

export default notificationSlice.reducer;
