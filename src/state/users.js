import axios from "axios";
import {
  createReducer,
  createAsyncThunk,
  createAction,
} from "@reduxjs/toolkit";

export const setUser = createAction("SET_USER");

export const checkLogin = createAsyncThunk("USER", () => {
  return axios
    .get("api/auth/me")
    .then((info) => info.data)
    .catch(() => console.log("Sin iniciar sesion"));
});

export const sendLoginRequest = createAsyncThunk(
  "LOGIN",
  ({ email, password, errorAlert, successAlert }) => {
    return axios
      .post("api/auth/login", {
        email,
        password,
      })
      .then((res) => {
        successAlert(
          "Bienvenido nuevamente",
          "Hora de buscar series y películas!"
        );
        return res.data;
      })
      .catch(() => errorAlert("Error de logueo", "Intentelo nuevamente"));
  }
);

export const sendLogoutRequest = createAsyncThunk("LOGOUT", () => {
  return axios.get("api/auth/logout").then((r) => r.data);
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

const userReducer = createReducer(
  {},
  {
    [setUser]: (state, action) => (state = action.payload),
    [checkLogin.fulfilled]: (state, action) => (state = action.payload),
    [sendLoginRequest.fulfilled]: (state, action) => (state = action.payload),
    [sendLogoutRequest.fulfilled]: (state, action) => action.payload,
    [addToFavorites.fulfilled]: (state, action) => action.payload,
  }
);

export default userReducer;
