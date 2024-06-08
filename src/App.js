import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Seat from './Components/Seat';
import Home from './Components/Home';
import Store from './Redux/Store';

function App() {
  return (
    <Router>
      <Provider store={Store}>
        <div className="App">
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/seats" element={<Seat />} />
          </Routes>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
