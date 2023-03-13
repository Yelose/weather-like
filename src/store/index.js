import { configureStore } from "@reduxjs/toolkit";
import citySlice from "./city";

const store = configureStore({
  reducer: { city: citySlice.reducer },
});

export default store;
