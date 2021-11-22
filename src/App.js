import { Routes, Route } from 'react-router-dom';
import './App.css';
import React from 'react';
import PrincipalPage from './pages/PrincipalPage';
import Bag from './pages/Bag';
import Navbar from './componets/Navbar';
import Artesanato from './pages/Artesanato';
import DetailItem from './pages/DetailItem';




function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<PrincipalPage />}/>
        <Route path='/bag' element={<Bag />} />
        <Route path='/artesanato' element={<Artesanato />} />
        <Route path = "/item/:id" element = {<DetailItem authed={true} /> }/>
      </Routes>
    </div>
  );
}

export default App;
