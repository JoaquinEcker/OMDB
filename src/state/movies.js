import axios from "axios";
import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
require("dotenv").config();

export const getMovies = createAsyncThunk("MOVIE", (value) => {
  return axios
    .get(
      `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_KEY}&i=${value}`
    )
    .then((r) => r.data);
});

// export const setMovie = createAction("MOVIE");

const moviesReducer = createReducer([], {
  [getMovies.fulfilled]: (state, action) => action.payload,
});

export default moviesReducer;
