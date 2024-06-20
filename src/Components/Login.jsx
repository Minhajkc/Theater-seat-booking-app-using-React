import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from 'react-redux';
import { setUserLogged } from '../Redux/Seatslice';
import { toast } from 'react-toastify';

const Login = () => {
   const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const API_URL = 'https://theater-seat-booking-app-using-react.vercel.app';


  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_URL}/login`, { email, password }, { withCredentials: true });
      console.log('Server response:', response.data);
      dispatch(setUserLogged(true));
      navigate('/seats'); 
      toast.success('You have logged in successfully!', { position:'top-center' });
    } catch (error) {
      console.error('Error sending login data:', error);
      toast.error('Login failed. Please check your credentials and try again.', { position: 'top-center' });
    }
  };
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="border-2 rounded-3xl p-8 rounded shadow-white w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-6 text-center text-white">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-100 mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2  border-2 border-green-400 border-gray-300 rounded-3xl focus:outline-none focus:border-green-900 text-white"
              required
              style={{background:'none'}}
              
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-100 mb-2" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2  border-2 border-green-400 border-gray-300 rounded-3xl focus:outline-none focus:border-green-900 text-white"
              required
              style={{background:'none'}}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 px-4 rounded-3xl mt-4 hover:bg-green-300 focus:outline-none focus:bg-green-600 font-bold"
          >
            Sign Up
          </button>
        </form>
        <div className="text-center mt-5">
          <Link to="/signup" className="text-gray-500">Don't have an account? SignUp</Link>
          
        </div>
      </div>
    </div>
  );
};

export default Login;
