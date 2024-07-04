import { User } from '@/context/users';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Notification } from '@/context/shared/domain/Notification';


interface NotificationState {
  notifications: Notification[];
}

const initialState: NotificationState = {
 notifications: []
};

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
   
    addNotification(state, action: PayloadAction<Notification>) {
      state.notifications = [...state.notifications, action.payload];
    },
    removeNotification(state, action: PayloadAction<Notification>) {
        const index = state.notifications.findIndex(it => it.message === action.payload.message);
        if (index > -1) {
          state.notifications = [
            ...state.notifications.slice(0, index),
            ...state.notifications.slice(index + 1)
          ];
        }
      },
  }
});

export const {  addNotification, removeNotification } = notificationSlice.actions;
export default notificationSlice.reducer;
