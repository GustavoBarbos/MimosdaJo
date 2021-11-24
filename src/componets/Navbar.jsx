
import React, { useState, useEffect } from 'react'

import styled from 'styled-components'
import { FaShoppingBag } from 'react-icons/fa'
import { AiOutlineMenu } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const ContainerGeral = styled.div`
height: 85px;
display: flex;
justify-content: space-around;
align-items: center;
text-align: center;
background-color: white;
width: 100%;



`
const NameStore = styled.h3`

width: 25vw;
cursor: pointer;
height: 36px;

`
const FiltersNavbar = styled.h5`
display: flex;

justify-content: space-around;
align-items: center;
width: 40vw;
cursor: pointer;
height: 36px;
text-decoration: none;
a{
  list-style: none;
  list-style-type: none;
}
li{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 12vw;
  text-align: center;
  list-style-type: none;
  
}
@media (max-width: 960px) {
    display: none;
    color: red; 
    }  
`
const Count = styled.span`
display: flex;
align-items: center;
justify-content: center;
background-color: black;
text-decoration: none;
color: white;
list-style-type: none;
width: 1rem;
height: 1rem;
font-size: 0.7rem;
font-weight: 900;
border-radius: 50px;
margin-left: -10px;
margin-top: 15px;


@media (max-width: 960px) {
    
   

    text-align: end;

   
    } 

`
const Bag = styled.div`
width: 25vw;
font-size: 1.6rem;
cursor: pointer;
height: 36px;
margin-top: -8px;
display: flex;
align-items: center;
justify-content: center;
@media (max-width: 960px) {
  
  justify-content: flex-end;
  margin-right: -2rem;
  text-align: end;
  margin-top: 2px;
   
    } 

`
const Menu = styled.div`
display: none;
font-size: 1.6rem;

@media (max-width: 960px) {
    display: block;
   
    } 

`
const ResponsiveNavbar = styled.div`

display: none;


li{
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  
  width: 100vw;
  text-align: center;
  height: 4rem;
  :hover{
    background-color: #F5A1A4;
  }
}

@media (max-width: 960px) {
  
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  justify-content: center;

   
    } 


` 

function Navbar({itens}) {

  const [boolean, setBoolean] = useState(false)

  return (<>
    <ContainerGeral>
      <Link style={{ textDecoration: "none", color: "black" }} to='/'><NameStore>Mimôs da Jô </NameStore></Link>
      <FiltersNavbar>
        <Link style={{ color: 'black', textDecoration: "none" }} to='/artesanato'><li>Artesanato</li></Link>
        <Link style={{ color: 'black', textDecoration: "none" }} to='/toalhas'><li>Toalhas</li></Link>
        <Link style={{ color: 'black', textDecoration: "none" }} to='/panoDePratos'><li>Pano de Pratos</li></Link>
      </FiltersNavbar>
      <Link to='/bag'><Bag> <FaShoppingBag style={{ color: '#FF8783' }} /> <Count>{itens}</Count></Bag>  </Link>
      <Menu onClick={() => setBoolean(!boolean)}><AiOutlineMenu /></Menu>


    </ContainerGeral>
    {boolean ?
      <ResponsiveNavbar>

        <Link style={{ color: 'black', textDecoration: "none",backgroundColor: "white" }} to='/artesanato'><li>Artesanato</li></Link>
        <Link style={{ color: 'black', textDecoration: "none",backgroundColor: "white" }} to='/toalhas'><li>Toalhas</li></Link>
        <Link style={{ color: 'black', textDecoration: "none",backgroundColor: "white" }} to='/panoDePratos'><li>Pano de Pratos</li></Link>

      </ResponsiveNavbar>
      :
      undefined
    }

  </>
  )
}


export default Navbar

