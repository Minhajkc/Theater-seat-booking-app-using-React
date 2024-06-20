
import { Link } from 'react-router-dom';


const Home = ({data}) => {


  return (
    <div className="min-h-screen bg-gray-900">
      <div className='bg-red-400'>{data}</div>
      <nav className='p-5 text-center bg-green-600 font-bold font-mono'>
        <Link to="/signup" className="mr-4 text-white">Signup</Link>
        <Link to="/login" className="mr-4 text-white">Login</Link>
        <Link to="/seats" className="mr-4 text-white">Seats</Link>
      </nav>
      <h1 className='text-white text-center flex mt-60 px-20 justify-center items-center text-9xl'>BOOK YOUR SEATS</h1>
    </div>
  );
};

export default Home;
