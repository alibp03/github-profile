import { configureStore } from "@reduxjs/toolkit";
import githubSlice from "./features/githubSlice";

const store = configureStore({
  reducer: {
    github: githubSlice,
  },
});

export default store;
