import React from 'react';
import { LuArmchair } from "react-icons/lu";

const Seatdesign = ({ seatNumber, onSeatSelect ,isSelected}) => {
  return (
    <div 
      className={`flex flex-col items-center m-1   cursor-pointer ${isSelected ? 'text-green-400' : 'text-white'}`}
      onClick={() => onSeatSelect(seatNumber)}
    >
      <LuArmchair className='text-2xl' />
      <span>A{seatNumber}</span>
    </div>
  );
};

export default Seatdesign;
