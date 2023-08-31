import { configureStore } from "@reduxjs/toolkit";
import { sugarpApi } from "./api/sugarpApi";
import { sugarpSlice } from "./slice/sugarpSlice";

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    sugarp: sugarpSlice.reducer,
    [sugarpApi.reducerPath]: sugarpApi.reducer,
  },

  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sugarpApi.middleware),
});
