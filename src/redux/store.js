import { configureStore } from "@reduxjs/toolkit";

import { tripsReducer } from "./trips/tripsSlice";
import { filtersReducer } from "./filters/filtersSlice";

export const store = configureStore({
  reducer: {
    trips: tripsReducer,
    filters: filtersReducer,
  },
});
