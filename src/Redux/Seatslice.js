import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  seats: [],
  date:new Date(),
  userLogged: false,
};
const Seatslice = createSlice({
  name: 'seats',
  initialState,
  reducers: {
    addSeat: (state, action) => {
      state.seats.push(action.payload);
    },
    setUserLogged: (state, action) => {
      state.userLogged = action.payload;
    }
  }
});
export const { addSeat, setUserLogged } = Seatslice.actions;
export default Seatslice.reducer;
