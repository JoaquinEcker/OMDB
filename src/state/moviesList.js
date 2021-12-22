import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

export const getMovieListRequest = createAsyncThunk("MOVIES-LIST", (value) => {
  return axios
    .get(`https://www.omdbapi.com/?apikey=959ee6fb&s=${value}`)
    .then((r) => r.data);
});

// export const setMoviesList = createAction("MOVIES-LIST");

const moviesListReducer = createReducer([], {
  [getMovieListRequest.fulfilled]: (state, action) => action.payload,
});

export default moviesListReducer;
