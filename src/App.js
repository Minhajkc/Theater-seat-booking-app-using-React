import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Seat from './Components/Seat';
import Home from './Components/Home';
import { store, persistor } from './Redux/Store';
import { fetchData } from './api';
import PrivateRoute from './Private/PrivateRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchData();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getData();
  }, []);

  return (
    <Router>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <div className="App">
            <Routes>
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<Home data={data} />} />
              <Route path="/seats" element={
                <PrivateRoute>
                  <Seat />
                </PrivateRoute>
              } />
            </Routes>
            <ToastContainer />
          </div>
        </PersistGate>
      </Provider>
    </Router>
  );
}

export default App;
