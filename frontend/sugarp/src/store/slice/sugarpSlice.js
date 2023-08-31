import { createSlice } from "@reduxjs/toolkit";

export const sugarpSlice = createSlice({
  name: "sugarp",
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
