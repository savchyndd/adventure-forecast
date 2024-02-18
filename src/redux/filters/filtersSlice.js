import { createSlice } from "@reduxjs/toolkit";

const filterInitialState = {
  activeTripId: 0,
  date: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: filterInitialState,
  reducers: {
    setTripsFilter(state, action) {
      return (state = { ...state, ...action.payload });
    },
    setActiveTripId(state, action) {
      return (state = { ...state, activeTripId: action.payload });
    },
  },
});

export const filtersReducer = filtersSlice.reducer;
export const { setTripsFilter, setActiveTripId } = filtersSlice.actions;
