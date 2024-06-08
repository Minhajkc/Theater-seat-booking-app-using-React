import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {addSeat} from '../Redux/Seatslice'; 
import { BsCalendar2DateFill } from "react-icons/bs";
import { useSelector } from 'react-redux';

function Continuebutton({ selectedSeats, setSelectedSeats,setopenDiv}) {
  const [startDate, setStartDate] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const dispatch = useDispatch(); 
  const reservedSeats = useSelector((state) => state.bookedseats.seats);

  const handleButtonClick = () => {
    setShowCalendar(!showCalendar);
  };

  const handleDateChange = (date) => {
    setStartDate(date);
    setShowCalendar(false);
  };

  const handleCheckout = () => {
    const availableSeats = selectedSeats.filter(
      (seat) => !reservedSeats.includes(seat)
    );
    dispatch(addSeat({ seats: availableSeats, date: startDate }));
    setSelectedSeats([]);
    setopenDiv(false);
    alert('Added');
  };

  return (
    <div className="flex flex-col items-center m-2 p-2">
      {!startDate && (
     <button
     className="bg-gray-700 text-white px-10 font-mono rounded p-1 hover:bg-gray-500 flex items-center mt-3"
     onClick={handleButtonClick}
   >
     <BsCalendar2DateFill className="mr-2" />
     SELECT DATE
   </button>
      )}
    
      
      {startDate && (
        <h1 className="text-blue-300 mt-4 font-mono bg-gray-700 p-1 rounded">DATE: {startDate.toDateString()}</h1>
      )}
      {showCalendar && (
        <div className="mt-4">
          <DatePicker
            selected={startDate}
            onChange={handleDateChange}
            inline
            className="bg-gray-800 text-white border border-gray-700 rounded-md shadow-md p-4"
            
          />
        
        </div>
        
      )}
      {startDate && (
        <button
          className="bg-green-500 text-white px-8 font-mono rounded p-1 mt-4 hover:bg-green-800 mt-11"
          style={{
            animation: 'bounce 1.5s infinite',
          }}
          onClick={handleCheckout}
        >
          BookNow
        </button>
      )}
    </div>
  );
}

export default Continuebutton;
