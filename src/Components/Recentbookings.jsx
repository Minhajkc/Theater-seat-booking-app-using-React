import React, { useState } from 'react';

import { CiBookmark } from "react-icons/ci";
import { useSelector } from 'react-redux';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#1a202c',
    color: 'white',
    borderRadius: '10px',
    padding: '20px',
    maxWidth: '500px',
    width: '90%',
  },
};

function Recentbookings() {
  const bookedSeats = useSelector(state => state.bookedseats.seats);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className='relative  '>
      <span className='float-right text-white font-mono cursor-pointer text-xs mt-1 font-bold' onClick={openModal}>My Bookings</span>
      <CiBookmark className='text-green-500 cursor-pointer float-right mt-1 ' onClick={openModal} />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Booked Seats Modal"
      >
        <h2 className='text-2xl font-mono mb-4'>Booked Seats</h2>
        {bookedSeats.length > 0 ? (
  <ul>
    {bookedSeats.map((seat, index) => (
      <li key={index} className="font-mono mb-2">
        Seat No:{" "}
        {seat.seats.map((seatNumber, seatIndex) => (
          <span key={seatIndex}>
            A{seatNumber}
            {seatIndex < seat.seats.length - 1 ? ", " : ""}
          </span>
        ))}, Date: {new Date(seat.date).toDateString()}
      </li>
    ))}
  </ul>
) : (
  <p className="font-mono">No seats booked.</p>
)}

        <button
          className='mt-4 bg-gray-500 text-white px-4 py-2 rounded hover:bg-red-400'
          onClick={closeModal}
        >
          Close
        </button>
      </Modal>
    </div>
  );
}

export default Recentbookings;
