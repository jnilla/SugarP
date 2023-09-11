import { createSlice } from "@reduxjs/toolkit";

//AuthSlice

export const authSlice = createSlice({
  name: "auth",
  //-------------------
  //Initial State - Estado inicial del slice
  //-------------------

  initialState: {
    status: "not-authenticated", // ckecking , not-authenticated  , authenticated
    user: {},
    errorMessage: undefined,
  },

  //-------------------
  //Reducers - Funciones que se ejecutan cuando se disparan las acciones.
  //-------------------
  reducers: {
    //onChecking
    onChecking: (state) => {
      state.status = "checking";
      state.user = {};
      state.errorMessage = undefined;
    },
    onLogin: (state, { payload }) => {
      state.status = "authenticated";
      state.user = payload;
      state.errorMessage = undefined;
    },
    onLogout: (state, { payload }) => {
      state.status = "not-authenticated";
      state.user = {};
      state.errorMessage = payload;
    },
    clearErrorMessage: (state) => {
      state.errorMessage = undefined;
    },
  },
});

export const { onChecking, onLogin, onLogout, clearErrorMessage } =
  authSlice.actions;
