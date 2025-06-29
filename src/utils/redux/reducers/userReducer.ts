import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  error: any;
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  loading: boolean;
  phoneNumber: string;
  profileUrl?: string;
  isPhoneVerified: boolean;
}

const initState: UserState = {
  id: "",
  email: "",
  error: null,
  lastName: "",
  firstName: "",
  loading: false,
  phoneNumber: "",
  profileUrl: "",
  isPhoneVerified: false,
};

export const userReducer = createSlice({
  name: "user",
  initialState: initState,
  reducers: {
    updateCurrentBusiness: (state, action) => {},

    addUserData: (state, action) => {
      const disUser = action.payload;
      state.id = disUser.id;
      state.email = disUser.email;
      state.lastName = disUser.lastName;
      state.firstName = disUser.firstName;
      state.profileUrl = disUser.profileUrl;
      state.phoneNumber = disUser.phoneNumber;
      state.isPhoneVerified = disUser.isPhoneVerified;
    },
  },
});

export const { updateCurrentBusiness, addUserData } = userReducer.actions;

export default userReducer.reducer;
