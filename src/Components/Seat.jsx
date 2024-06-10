import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Seatdesign from './Seatdesign';
import Continuebutton from './Buttons';
import Recentbookings from '../Components/Recentbookings';


const Seat = () => {
  
  const seats = Array.from({ length: 108 }, (_, index) => index + 1);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [openDiv,setopenDiv] = useState(false)
  const [startDate, setStartDate] = useState(null);


  const bookedSeats = useSelector(state => state.bookedseats.seats);
 

  const handleSeatSelect = (seatNumber) => {
    setSelectedSeats((prevSelectedSeats) => {
      if (prevSelectedSeats.includes(seatNumber)) {
        return prevSelectedSeats.filter(seat => seat !== seatNumber);
      } else {
        return [...prevSelectedSeats, seatNumber];
      }
    });
  };


  const isSeatBooked = (seatNumber) => {
    return bookedSeats.some(
      booking =>
        new Date(booking.date).toDateString() === startDate.toDateString() &&
        booking.seats.includes(seatNumber)
    );
  };
  
  


  return (
   
    <div className="min-h-screen flex justify-center bg-gray-900">
       
      <div className="rounded-3xl p-8 w-full m-5">
   
      <Recentbookings/>
        <h1 className="text-3xl sm:text-5xl text-white text-center font-bold text-green-400">
          BOOK YOUR SEAT
          
        </h1>
      
        <div className="float-right mr-4">
        
        </div>
        <div className="bg-gray-700 justify-center mt-4 text-center rounded-tl-3xl rounded-tr-3xl font-bold text-white p-1 font-mono text-xs">
          SCREEN THIS WAY
        </div>
        {! openDiv? 
        <div className="bg-gray-800  p-4 rounded-lg w-96 m-auto mt-5 font-mono text-white text-center">
        {!startDate ?   <p className='text-blue-400 text-center font-mono text-sm font-bold  bg-gray-700 rounded p-1 m-4'>Select a Date to Choose Seats</p> : null}
      {selectedSeats <=0 ?null:
     <div>
       <h2>SELECTED SEATS</h2>
    <br /><span className='text-green-500 bg-gray-700 px-2 p-1 rounded '>{selectedSeats.map(seat => `A${seat}`).join(', ')}</span> 
  
    </div>
       }
         <Continuebutton selectedSeats={selectedSeats}  setSelectedSeats={ setSelectedSeats} setopenDiv={setopenDiv} startDate={startDate} setStartDate={setStartDate}/>
        </div>:null
         }
        
           
         
       
        {startDate ? (
          <div className="border-2 border-green-500 rounded-3xl text-white m-16 p-5 grid grid-cols-12 gap-3">
            {seats.map(seatNumber => {
              return (
                <Seatdesign
                  key={seatNumber}
                  seatNumber={seatNumber}
                  onSeatSelect={handleSeatSelect}
                  isSelected={selectedSeats.includes(seatNumber)}
                  isBooked={isSeatBooked(seatNumber)}
                />
              );
            })}
          </div>
        ) : null}
       
      </div>
    </div>
  );
};

export default Seat;
