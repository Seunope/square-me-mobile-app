import { createSlice } from "@reduxjs/toolkit";

export interface UserState {
  error: any;
  loading: boolean;
  // user: UserDTO; //selected biz
}

const initState: UserState = {
  error: null,
  loading: false,
  // user: {} as UserDTO,
};

export const userReducer = createSlice({
  name: "user",
  initialState: initState,
  reducers: {
    addUserData: (state, action) => {
      // state.user = action.payload;
    },
  },
});

export const { addUserData } = userReducer.actions;

export default userReducer.reducer;
