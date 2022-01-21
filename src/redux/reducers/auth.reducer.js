import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "auth",
  initialState: {
    accessToken: "",
    refreshToken: "",
    isLogin: false,
  },
  reducers: {
    login: (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.isLogin = true;
    },
    logout: (state) => {
      state.accessToken = "";
      state.refreshToken = "";
      state.isLogin = false;
    },
    setAccess: (state, action) => {
      state.accessToken = action.payload.accessToken;
    },
  },
});

export const { login, logout, setAccess } = CartSlice.actions;
export default CartSlice.reducer;
