import { createSlice, nanoid } from "@reduxjs/toolkit";

const currentDate = new Date();
const futureDate = new Date();
futureDate.setDate(currentDate.getDate() + 15);

const formatter = new Intl.DateTimeFormat("az", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
});

const startDate = formatter.format(currentDate);
const endDate = formatter.format(futureDate);

const initialState = [
  {
    id: 1,
    city: "Kyiv",
    img: "https://images.pexels.com/photos/9955097/pexels-photo-9955097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",

    startDate,
    endDate,
  },
  {
    id: 2,
    city: "Lviv",
    img: "https://images.pexels.com/photos/16036349/pexels-photo-16036349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    startDate,
    endDate,
  },
  {
    id: 3,
    city: "Berlin",
    img: "../../../public/berlin.png",
    startDate,
    endDate,
  },
  {
    id: 4,
    city: "Madrid",
    img: "../../../public/berlin.png",
    startDate,
    endDate,
  },
  {
    id: 5,
    city: "Krakow",
    img: "../../../public/berlin.png",
    startDate,
    endDate,
  },
];

const tripsSlice = createSlice({
  name: "trips",
  initialState,
  reducers: {
    addTrip: (state, action) => {
      const newTrip = { ...action.payload, id: nanoid() };
      return [...state, newTrip];
    },
    removeTrip: (state, action) => {
      return state.filter((trip) => trip.id !== action.payload);
    },
  },
});

export const { addTrip, removeTrip } = tripsSlice.actions;
export const tripsReducer = tripsSlice.reducer;
