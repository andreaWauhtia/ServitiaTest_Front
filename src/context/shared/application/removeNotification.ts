
import { AppDispatch } from "@/modules/app/store";
import { removeNotification } from "@/modules/shared/store/NotificationStore";
import { Notification } from "../domain/Notification";

export const cleanNotification = (notif: Notification,dispatch: AppDispatch) => {
    dispatch(removeNotification(notif));
}
