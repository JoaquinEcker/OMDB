import axios from "axios";
import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";

export const getMovies = createAsyncThunk("MOVIE", (value) => {
  return axios
    .get(`https://www.omdbapi.com/?apikey=959ee6fb&i=${value}`)
    .then((r) => r.data);
});

// export const setMovie = createAction("MOVIE");

const moviesReducer = createReducer([], {
  [getMovies.fulfilled]: (state, action) => action.payload,
});

export default moviesReducer;
