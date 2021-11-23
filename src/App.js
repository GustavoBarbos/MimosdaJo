import { Routes, Route } from 'react-router-dom';
import './App.css';
import React, { useState } from 'react';
import PrincipalPage from './pages/PrincipalPage';
import Bag from './pages/Bag';
import Navbar from './componets/Navbar';
import Artesanato from './pages/Artesanato';
import DetailItem from './pages/DetailItem';




function App() {

  const [itensLength, setItensLength] = useState(0)

  const totalItens = async(number) => {
    
    await setItensLength(number)
    
  } 

  return (
    <div className="App">
      <Navbar itens={itensLength}/>
      <Routes>
        <Route path='/' element={<PrincipalPage totalItens = {totalItens} />}/>
        <Route path='/bag' element={<Bag totalItens = {totalItens} />} />
        <Route path='/artesanato' element={<Artesanato />} />
        <Route path = "/item/:id" element = {<DetailItem authed={true} totalItens = {totalItens}  /> }/>
      </Routes>
    </div>
  );
}

export default App;
