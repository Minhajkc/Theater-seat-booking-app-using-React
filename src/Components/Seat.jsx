import React, { useState } from 'react';
import Seatdesign from './Seatdesign';
import Continuebutton from './Continuebutton';
import Recentbookings from '../Components/Recentbookings';

const Seat = () => {
  
  const seats = Array.from({ length: 108 }, (_, index) => index + 1);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [openDiv,setopenDiv] = useState(false)

  const handleSeatSelect = (seatNumber) => {
    setSelectedSeats((prevSelectedSeats) => {
        setopenDiv(true)
      if (prevSelectedSeats.includes(seatNumber)) {
        return prevSelectedSeats.filter(seat => seat !== seatNumber);
      } else {
        return [...prevSelectedSeats, seatNumber];
      }
    });
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
       
        {openDiv && (
          <div className="bg-gray-800  p-4 rounded-lg w-96 m-auto mt-5 font-mono text-white text-center">
            <h2>SELECTED SEATS</h2>
         <br /><span className='text-green-500 bg-gray-700 px-2 p-1 rounded '>{selectedSeats.map(seat => `A${seat}`).join(', ')}</span> 
      
   
          </div>
          
        )}
         <Continuebutton selectedSeats={selectedSeats}  setSelectedSeats={ setSelectedSeats} setopenDiv={setopenDiv}/>
        <div className="border-2 border-green-500 rounded-3xl text-white m-16 p-5 grid grid-cols-12 gap-3">
          {seats.map(seatNumber => (
            <Seatdesign 
              key={seatNumber} 
              seatNumber={seatNumber} 
              onSeatSelect={handleSeatSelect} 
              isSelected={selectedSeats.includes(seatNumber)} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Seat;
