import React from 'react';
import './App.css';
import Home from './Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Checkout from './Checkout';

import Header from "./Header"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/checkout" element = {<Checkout/>}/>



          <Route path='/' element= {<Home/>} />

        </Routes>
      </Router>

    </div>
  );
}

export default App;
