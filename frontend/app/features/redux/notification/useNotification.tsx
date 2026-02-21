import {
  showNotification as showNotificationAction,
  hideNotification as hideNotificationAction,
  NotificationType,
} from "@/features/redux/notification/notificationSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

const useNotification = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.notification);

  const showNotification = (type: NotificationType, text: string) => {
    dispatch(showNotificationAction({ type, text }));
  };

  const hideNotification = () => { dispatch(hideNotificationAction()); };

  return {
    showNotification,
    hideNotification,
    state
  };
};

export default useNotification;
