import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  seats: [],
  date:new Date()
};
const Seatslice = createSlice({
  name: 'seats',
  initialState,
  reducers: {
    addSeat: (state, action) => {
      state.seats.push(action.payload);
    }
  }
});

export const { addSeat } = Seatslice.actions;
export default Seatslice.reducer;
