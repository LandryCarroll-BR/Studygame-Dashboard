import { createSlice } from "@reduxjs/toolkit";

export const guestSlice = createSlice({
  name: 'guest',
  initialState: {
    guestName: "",
    guestGameCode: "",
    guestGameStart: false,
    score: "",
  },
  reducers: {
    setGuest: (state, action) => {
      state.guestName = action.payload.guestName;
      state.guestGameCode = action.payload.guestGameCode;
      state.guestScore = action.payload.guestScore;
      state.guestGameStart = action.payload.guestGameStart;
    },
    setGuestName: (state, action) => {
      state.guestName = action.payload;
    },
    setGuestGameCode: (state, action) => {
      state.guestGameCode = action.payload;
    },
    setGuestScore: (state, action) => {
      state.guestScore = action.payload;
    },
    setGuestGameStart: (state, action) => {
      state.guestGameStart = action.payload;
    }
  }
});

export const { setGuest, setGuestName, setGuestGameCode, setGuestScore, setGuestGameStart } = guestSlice.actions;

export const selectGuest = state => state.guest;
export const selectGuestName = state => state.guest.guestName;
export const selectGuestGameCode = state => state.guest.guestGameCode;
export const selectGuestScore = state => state.guest.guestName;
export const selectGuestGameStart = state => state.guest.guestGameStart;

export default guestSlice.reducer;