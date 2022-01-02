import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";
require("dotenv").config();

export const getMovieListRequest = createAsyncThunk("MOVIES-LIST", (value) => {
  return axios
    .get(
      `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_KEY}&s=${value}`
    )
    .then((r) => r.data);
});

// export const setMoviesList = createAction("MOVIES-LIST");

const moviesListReducer = createReducer([], {
  [getMovieListRequest.fulfilled]: (state, action) => action.payload,
});

export default moviesListReducer;
