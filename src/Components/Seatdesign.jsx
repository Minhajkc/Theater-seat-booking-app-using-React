import React from 'react';
import { LuArmchair } from "react-icons/lu";


const Seatdesign = ({ seatNumber, onSeatSelect, isSelected, isBooked }) => {
  const handleClick = () => {
    if (!isBooked) {
        console.log('false');
      onSeatSelect(seatNumber);
    }else{
        console.log('true');
    } 
  };

  return (
    <div 
      className={`flex flex-col items-center m-1 cursor-pointer ${isBooked ? 'text-red-400 cursor-not-allowed' : isSelected ? 'text-green-400' : 'text-white'}`}
      onClick={handleClick}
    >
      <LuArmchair className='text-2xl' />
      <span>A{seatNumber}</span>
    </div>
  );
};

export default Seatdesign;
