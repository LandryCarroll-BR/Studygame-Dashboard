import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0
};

export const countSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    }
  }
})

export const { increment } = countSlice.actions;

export const selectCount = (state) => state.counter.value;

export default countSlice.reducer;