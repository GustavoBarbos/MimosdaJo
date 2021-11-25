import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const ContainerGeral = styled.div`

height: 30rem;
width:25rem;
margin-top: 2rem;
display: flex;
align-items: center;
justify-content: center;

`
const ContainerCard = styled.div`
display: flex;
background-color: white;
flex-direction: column;
align-items: center;
width: 80%;
height: 100%;
border-radius: 15px;
justify-content: space-around;

`
const Img = styled.img`
width: 100%;
height: 100%;
`
const Name = styled.div`
width: 90%;
text-align: center;

`
const ContainerValor = styled.div`
width: 90%;
text-align: center;

`
const Price = styled.div`
width: 90%;
text-align: center;

`
const OldPrice = styled.div`
width: 90%;
text-align: center;

`
const Parcelamento = styled.div`
width: 90%;
text-align: center;
font-size: 0.8rem;

`
const ContainerButon = styled.div`
width: 90%;
display: flex;
align-items: center;
justify-content: center;
height: 2.2rem;
border-radius: 10px;
background-color: #FF8783;
font-size: 1rem;
cursor: pointer;
`


class CardsProduct extends Component {


    formatReal = (int) => {

        let num = Number(int)
        var result = num.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
        return result

    }

    handleBag = async (key, item) => {

        let keys =  await Object.keys(localStorage);
        let quantidade = await  keys.map((el) => JSON.parse(localStorage.getItem(el)))
        await localStorage.setItem(key, JSON.stringify(item))
        await this.props.totalItens(quantidade.length + 1)
    }

    render() {
        return (
            <ContainerGeral>

                <ContainerCard>                    
                   <Link style ={{ height: "60%", width : "90%"}} to = {`/item/${this.props.props.id}`} > <Img src={this.props.props.image} alt={this.props.name} /> </Link>
                    <Name>{this.props.props.name}</Name>
                    <ContainerValor>            
                        <Price>{this.formatReal(this.props.props.price)}</Price>
                        <Parcelamento>R$ {this.formatReal(this.props.props.price)} em 2x de {(this.props.props.price / 2).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })} sem juros</Parcelamento>
                    </ContainerValor>
                    <ContainerButon onClick={() => {
                                    this.handleBag(this.props.props.id, this.props.props)}} >
                        Adicionar ao Carrinho
                    </ContainerButon>
                </ContainerCard>
            </ContainerGeral>
        )
    }
}

export default CardsProduct
