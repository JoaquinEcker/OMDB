import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import moviesReducer from "../state/movies";
import moviesListReducer from "../state/moviesList";
import userReducer from "../state/users";

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    moviesList: moviesListReducer,
    user: userReducer,
    movie: moviesReducer,
  },
});

export default store;
