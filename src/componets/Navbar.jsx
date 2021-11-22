
import React, { Component } from 'react'
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

`
const NameStore = styled.h3`

width: 30vw;
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
  width: 12rem;
  text-align: center;
  list-style-type: none;
}
@media (max-width: 960px) {
    display: none;
    color: red; 
    }  
`
const Bag = styled.div`
width: 30vw;
font-size: 1.6rem;
cursor: pointer;
height: 36px;
margin-top: -8px;
display: flex;
align-items: center;
justify-content: center;

@media (max-width: 960px) {
    display: block;
    width: 40vw;
    text-align: end;
    margin-top: -6px;
   
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

class Navbar extends Component {

  state = {
    boolean: false
  }

  handleLinksNavbar = () => {
    this.setState({
      boolean: !this.state.boolean
    })
  }

  render() {
    return (<>
      <ContainerGeral>
        <Link style={{ textDecoration: "none", color: "black" }} to='/'><NameStore>Mimôs da Jô </NameStore></Link>
        <FiltersNavbar>
          <Link style={{color : 'black' , textDecoration: "none" }} to='/artesanato'><li>Artesanato</li></Link>
          <Link  style={{color : 'black' , textDecoration: "none" }} to='/toalhas'><li>Toalhas</li></Link>
          <Link  style={{color : 'black' , textDecoration: "none" }} to='/panoDePratos'><li>Pano de Pratos</li></Link>
        </FiltersNavbar>
        <Link to='/bag'><Bag><FaShoppingBag style={{ color: '#FF8783' }} /></Bag></Link>
        <Menu onClick={this.handleLinksNavbar}><AiOutlineMenu /></Menu>


      </ContainerGeral>
      {this.state.boolean ?
        <ResponsiveNavbar>

          <Link  style={{color : 'black' , textDecoration: "none" }} to='/artesanato'><li>Artesanato</li></Link>
          <Link  style={{color : 'black' , textDecoration: "none" }} to='/toalhas'><li>Toalhas</li></Link>
          <Link  style={{color : 'black' , textDecoration: "none" }} to='/panoDePratos'><li>Pano de Pratos</li></Link>

        </ResponsiveNavbar>
        :
        undefined
      }

    </>
    )
  }
}

export default Navbar

