import React, { Component } from 'react'
import styled from 'styled-components'

const ContainerGeral = styled.div`

display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
margin-top: 10rem;
div{
    text-align: center;
}
`
const Destaque = styled.div`
font-weight: 700;
font-size: 1.5rem;



`

class InfoStore extends Component {
    render() {
        return (
            <ContainerGeral>
                <Destaque>Mimos da Jô</Destaque>
                <div>Arte e Entreterimento, tudo feito com muito amor e carinho!</div>
                <div>Vendas feitas somente por WhatsApp</div> 
               
            </ContainerGeral>
        )
    }
}

export default InfoStore
