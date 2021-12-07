import { Routes, Route } from 'react-router-dom';
import './App.css';
import React, { useState } from 'react';
import PrincipalPage from './pages/PrincipalPage';
import Bag from './pages/Bag';
import Navbar from './componets/Navbar';

import DetailItem from './pages/DetailItem';
import Artesanato from './pages/Artesanato';
import ToalhasPage from './pages/ToalhasPage';
import PanoDePrato from './pages/PanoDePrato';
import styled from 'styled-components';

const Entrega =styled.div`
background-color: black;
color: white;
text-align: center;
font-size: 0.7rem;
`


function App() {

  const [itensLength, setItensLength] = useState(0)

  const totalItens = async(number) => {
    
    await setItensLength(number)
    
  } 

  return (
    <div className="App">
      <Entrega>Prazo de fabricação e envio de 12 dias úteis após comprovação de pagamento + prazo do correio </Entrega>
      <Navbar itens={itensLength}/>
      <Routes>
        <Route path='/' element={<PrincipalPage totalItens = {totalItens} />}/>
        <Route path='/bag' element={<Bag totalItens = {totalItens} />} />
        <Route path='/artesanato' element={<Artesanato totalItens = {totalItens} name = {"Artesanato"}/>} />
        <Route path='/toalhas' element={<ToalhasPage totalItens = {totalItens} name = {"Toalhas"}/>} />
        <Route path='/panoDePratos' element={<PanoDePrato totalItens = {totalItens} name = {"Pano De Pratos"} />} />
        <Route path = "/item/:produto/:id" element = {<DetailItem authed={true} totalItens = {totalItens}  /> }/>
      </Routes>
    </div>
  );
}

export default App;
