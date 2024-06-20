import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const API_URL = 'https://theater-seat-booking-app-using-react.vercel.app';
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${API_URL}/signup`, { name, email, password });
      console.log('Server response:', response.data);

      if (response.status === 201) {
        navigate('/login');
        toast.success('Now please login with your account !', {
          position:'top-center'
        });
      }
    } catch (error) {
      console.error('Error sending signup data:', error);
    }
    
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">

      <div className="border-2 rounded-3xl p-8 rounded shadow-white w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-6 text-center text-white">Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-100 mb-2" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border-2 border-green-400 border-gray-300 rounded-3xl focus:outline-none focus:border-green-900 text-white"
              required
              style={{background:'none'}}
            />
          </div>
          <div className="mb-4">
            <label className="block  text-gray-100 mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border-2 border-green-400 p-2 border-gray-300 rounded-3xl focus:outline-none focus:border-green-900 text-white"
              required
              style={{background:'none'}}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-100 mb-2" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border-2 border-green-400 p-2 border-gray-300 rounded-3xl focus:outline-none focus:border-green-900 text-white"
              required
              style={{background:'none'}}
            />
          </div>
       
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 px-4 rounded-3xl mt-4 hover:bg-green-300 focus:outline-none focus:bg-green-600 font-bold text-white"
          >
            Sign Up
          </button>
        </form>
        <div className="text-center mt-5">
          <Link to="/login" className="text-gray-500">Already have an account? Log In</Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
