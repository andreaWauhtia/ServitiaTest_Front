import MessageStore from '@/modules/messages/store/MessageStore'
import NotificationStore from '@/modules/shared/store/NotificationStore'
import UserStore from '@/modules/users/store/UserStore'
import { configureStore } from '@reduxjs/toolkit'
export const rootStore = configureStore({
  reducer: {
    user: UserStore ,
    notification: NotificationStore,
    message: MessageStore,
  }
})


export type AppState = ReturnType<typeof rootStore.getState>

export type AppDispatch = typeof rootStore.dispatch;