import React, { Component } from 'react'
import Carousel from '../CarouselComponent';
import CarouselDeProdutos from '../componets/CarouselDeProdutos';


import styled from 'styled-components';
import InfoStore from '../componets/InfoStore';
import Footer from '../componets/Footer';

const Scroll = styled.div`
overflow-y:auto ;
scroll-behavior: smooth;
height: calc(100vh - 85px);


::-webkit-scrollbar{
    display: none;
}
`



class PrincipalPage extends Component {
    render() {
        return (
            <div>
                
                <Scroll>
                    <Carousel />
                    <InfoStore/>
                    <CarouselDeProdutos />
                    <Footer/>
                    <div>alo</div>
                </Scroll>
            </div>
        )
    }
}

export default PrincipalPage
