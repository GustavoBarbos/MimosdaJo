import { Routes, Route } from 'react-router-dom';
import './App.css';
import React, { useState } from 'react';
import PrincipalPage from './pages/PrincipalPage';
import Bag from './pages/Bag';
import Navbar from './componets/Navbar';
import FilterNavbar from './pages/FilterNavbar.jsx';
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
        <Route path='/artesanato' element={<FilterNavbar totalItens = {totalItens} name = {"Artesanato"}/>} />
        <Route path='/toalhas' element={<FilterNavbar totalItens = {totalItens} name = {"Toalhas"}/>} />
        <Route path='/panoDePratos' element={<FilterNavbar totalItens = {totalItens} name = {"Pano De Pratos"} />} />
        <Route path = "/item/:id" element = {<DetailItem authed={true} totalItens = {totalItens}  /> }/>
      </Routes>
    </div>
  );
}

export default App;
