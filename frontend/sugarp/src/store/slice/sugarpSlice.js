import { createSlice } from "@reduxjs/toolkit";

export const sugarpSlice = createSlice({
  name: "dashboard",
  initialState: {
    example: [],
  },

  reducers: {
    //Set data
    setExample: (state, action) => {
      state.example = action.payload;
    },
  },
});

export const { setExample } = sugarpSlice.actions;
