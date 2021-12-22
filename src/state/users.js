import axios from "axios";
import {
  createReducer,
  createAsyncThunk,
  createAction,
} from "@reduxjs/toolkit";

export const sendLoginRequest = createAsyncThunk("LOGIN", (obj) => {
  return axios
    .post("http://localhost:3001/api/auth/login", obj)
    .then((r) => r.data);
});

export const sendLogoutRequest = createAsyncThunk("LOGOUT", () => {
  return axios
    .post("http://localhost:3001/api/auth/logout")
    .then((r) => r.data);
});

export const addToFavorites = createAsyncThunk(
  "ADD_TO_FAVORITES",
  (movie, thunkAPI) => {
    const { user } = thunkAPI.getState();
    return axios
      .post(`/api/favorites?userId=${user.id}`, movie)
      .then((res) => res.data);
  }
);

export const setUser = createAction("SET_USER");

const userReducer = createReducer([], {
  // [persistUser.fulfilled]: (state, action) => action.payload,
  [sendLoginRequest.fulfilled]: (state, action) => action.payload,
  [sendLogoutRequest.fulfilled]: (state, action) => action.payload,
  [addToFavorites.fulfilled]: (state, action) => action.payload,
  [setUser]: (state, action) => {
    console.log(action.payload);
    return action.payload;
  },
});

export default userReducer;
