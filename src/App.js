import { Routes, Route } from 'react-router-dom';
import './App.css';
import React from 'react';
import PrincipalPage from './pages/PrincipalPage';
import Bag from './pages/Bag';
import Navbar from './componets/Navbar';




function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<PrincipalPage />}/>
        <Route path='/bag' element={<Bag />} />
      </Routes>
    </div>
  );
}

export default App;
