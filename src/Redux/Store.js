import { configureStore } from '@reduxjs/toolkit';
import SeatsliceReducer from './Seatslice'; 

const store = configureStore({
  reducer: {
    bookedseats: SeatsliceReducer 
  }
});

export default store;
