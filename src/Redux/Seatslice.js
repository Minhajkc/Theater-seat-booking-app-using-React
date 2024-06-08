import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  seats: [],
  date:new Date()
};

console.log('Initial State:', initialState); 

const Seatslice = createSlice({
  name: 'seats',
  initialState,
  reducers: {
    addSeat: (state, action) => {
      console.log('Payload received:', action.payload); 
      state.seats.push(action.payload);
    }
  }
});

export const { addSeat } = Seatslice.actions;
export default Seatslice.reducer;
