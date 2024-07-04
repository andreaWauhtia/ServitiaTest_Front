import { User } from '@/context/users';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';



interface UserState {
  currentUser?: User ;
  users: User[];
}

const initialState: UserState = {
 currentUser: undefined,
 users: []
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCurrentUser(state, action: PayloadAction<User | undefined>) {
      state.currentUser = action.payload;
    },
    setUsers(state, action: PayloadAction<User[]>) {
      state.users = action.payload;
    },
    addUser(state, action: PayloadAction<User>) {
      state.users = [...state.users, action.payload];
    }
  }
});

export const { setCurrentUser, setUsers, addUser } = userSlice.actions;
export default userSlice.reducer;
