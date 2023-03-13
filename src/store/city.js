import { createSlice } from "@reduxjs/toolkit";

const citySlice = createSlice({
  name: "city",
  initialState: { city: "Langreo" },
  reducers: {},
});

export const cityActions = citySlice.actions;

export default citySlice;
