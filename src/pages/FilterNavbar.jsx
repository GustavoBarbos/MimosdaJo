import React, { Component } from 'react'
import styled from 'styled-components'
import CardsProduct from '../componets/CardsProduct'


const Promocao = styled.div`
background-color: #FF8783;
color: white;
display: flex;
justify-content: center;
align-items: center;
`
const Hr = styled.hr`
font-weight: 900;
border: 0.3px solid #FF8783 ;
opacity: 1;
width: 35vw;
@media(max-width : 960px){
width: 25vw;
}
`
const ContainerTitle = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
width: 100%;

margin-top: 4rem;
`
const Title = styled.div`

font-size: 1.3rem;
font-weight: 600;
`
const ContainerOrdenar = styled.div`
margin-top:3rem;
display: flex;
justify-content: center;

`
const Ordenar = styled.div`
display: flex;
justify-content: space-around;
width: 30vw;
text-align: center;
align-items: center;


@media(max-width : 960px){
width: 50%;
flex-direction: column;

}
`
const Select = styled.select`

text-align: center;
border: 1px solid #FF8783;
height: 2rem;
border-radius: 25px;

@media(max-width : 960px){
margin-top: 1rem;
flex-direction: column;
width: 15rem;
}
`
const ContainerProdutos = styled.div`
margin-top: 4rem;
display: flex;
justify-content: space-around;
height: 100rem;
flex-wrap: wrap;


`
const Scroll = styled.div`
overflow-y:auto ;
scroll-behavior: smooth;
height: calc(100vh - 85px );

::-webkit-scrollbar{
    display: none;
}
`


class Artesanato extends Component {

    state = {
        item: "item3",
        data: [
            {
                "id": "1",
                "name": "Pano de Prato Estilizado",
                "oldprice": "10",
                "price": "15",
                "image": "data:image/png;base64,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",
                "images": ["https://www.hypeness.com.br/1/2017/04/roupa2.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkMfBHClUtb-DJoUBbYBsrliteYwIsdt6uGA&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOAFmM7eYYfajiRUny9Q9offXactixWfQ0XQ&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnxNjUA2E3OvehQcprY4-RjbRUt3To-EE1hQ&usqp=CAU"],
                "desc": "Roupas da mais alta qualidade, tentregamos para todo Brasil, além de ser um pano de alta qualidade 100% algodão ",
                "quantidade": "1"
            },
            {
                "id": "2",
                "name": "Caixa 19MM/20MM ",
                "oldprice": "10",
                "price": "15",
                "image": "https://www.hypeness.com.br/1/2017/04/roupa2.jpg",
                "images": ["https://www.hypeness.com.br/1/2017/04/roupa2.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkMfBHClUtb-DJoUBbYBsrliteYwIsdt6uGA&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOAFmM7eYYfajiRUny9Q9offXactixWfQ0XQ&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnxNjUA2E3OvehQcprY4-RjbRUt3To-EE1hQ&usqp=CAU"],
                "desc": "Roupas da mais alta qualidade, tentregamos para todo Brasil, além de ser um pano de alta qualidade 100% algodão ",
                "quantidade": "1"
            },
            {
                "id": "3",
                "name": "Camiseta Larga Skate,Caixa 19MM/20MM ,Pano de Prato Estilizado",
                "oldprice": "10",
                "price": "15",
                "image": "https://www.hypeness.com.br/1/2017/04/roupa2.jpg",
                "images": ["https://www.hypeness.com.br/1/2017/04/roupa2.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkMfBHClUtb-DJoUBbYBsrliteYwIsdt6uGA&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOAFmM7eYYfajiRUny9Q9offXactixWfQ0XQ&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnxNjUA2E3OvehQcprY4-RjbRUt3To-EE1hQ&usqp=CAU"],
                "desc": "Roupas da mais alta qualidade, tentregamos para todo Brasil, além de ser um pano de alta qualidade 100% algodão ",
                "quantidade": "1"
            },
            {
                "id": "4",
                "name": "Camiseta Larga Futebol",
                "oldprice": "10",
                "price": "15",
                "image": "https://www.hypeness.com.br/1/2017/04/roupa2.jpg",
                "images": ["https://www.hypeness.com.br/1/2017/04/roupa2.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkMfBHClUtb-DJoUBbYBsrliteYwIsdt6uGA&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOAFmM7eYYfajiRUny9Q9offXactixWfQ0XQ&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnxNjUA2E3OvehQcprY4-RjbRUt3To-EE1hQ&usqp=CAU"],
                "desc": "Roupas da mais alta qualidade, tentregamos para todo Brasil, além de ser um pano de alta qualidade 100% algodão ",
                "quantidade": "1"
            },
            {
                "id": "5",
                "name": "Camiseta Larga Vôlei",
                "oldprice": "10",
                "price": "15",
                "image": "https://www.hypeness.com.br/1/2017/04/roupa2.jpg",
                "images": ["https://www.hypeness.com.br/1/2017/04/roupa2.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkMfBHClUtb-DJoUBbYBsrliteYwIsdt6uGA&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOAFmM7eYYfajiRUny9Q9offXactixWfQ0XQ&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnxNjUA2E3OvehQcprY4-RjbRUt3To-EE1hQ&usqp=CAU"],
                "desc": "Roupas da mais alta qualidade, tentregamos para todo Brasil, além de ser um pano de alta qualidade 100% algodão ",
                "quantidade": "1"
            },
            {
                "id": "6",
                "name": "Camisa do Flamengo",
                "oldprice": "10",
                "price": "15",
                "image": "https://www.hypeness.com.br/1/2017/04/roupa2.jpg",
                "images": ["https://www.hypeness.com.br/1/2017/04/roupa2.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkMfBHClUtb-DJoUBbYBsrliteYwIsdt6uGA&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOAFmM7eYYfajiRUny9Q9offXactixWfQ0XQ&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnxNjUA2E3OvehQcprY4-RjbRUt3To-EE1hQ&usqp=CAU"],
                "desc": "Roupas da mais alta qualidade, tentregamos para todo Brasil, além de ser um pano de alta qualidade 100% algodão ",
                "quantidade": "1"
            },
            {
                "id": "7",
                "name": "Camisa do Santos",
                "oldprice": "10",
                "price": "15",
                "image": "https://www.hypeness.com.br/1/2017/04/roupa2.jpg",
                "images": ["https://www.hypeness.com.br/1/2017/04/roupa2.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkMfBHClUtb-DJoUBbYBsrliteYwIsdt6uGA&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOAFmM7eYYfajiRUny9Q9offXactixWfQ0XQ&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnxNjUA2E3OvehQcprY4-RjbRUt3To-EE1hQ&usqp=CAU"],
                "desc": "Roupas da mais alta qualidade, tentregamos para todo Brasil, além de ser um pano de alta qualidade 100% algodão ",
                "quantidade": "1"
            }
        ]
    }

    handleSelect = e => {

        this.setState({
            item : e.target.value
        })

    }

    render() {
        return (<>
            <Promocao>Produtos com 10%OFF</Promocao>
            <Scroll>
               { console.log(this.state.item)}
                <ContainerTitle>
                    <Hr />
                    <Title> {this.props.name}</Title>
                    <Hr />
                </ContainerTitle>
                <ContainerOrdenar>
                    <Ordenar>
                        ORDENAR POR:
                        <Select value={this.state.item}  onChange={this.handleSelect} id="sort" class="js-sort-by sort-by form-control full-width-xs">
                            <option value="item1">Preço: Menor ao Maior</option>
                            <option value="item2">Preço: Maior ao Menor</option>
                            <option value="item7">Mais Vendidos</option>
                            <option value="item3" selected >A - Z</option>
                        </Select>
                    </Ordenar>
                </ContainerOrdenar>
                <ContainerProdutos>
                    {this.state.data.map(item => <CardsProduct totalItens = {this.props.totalItens} props = {item}/>)}
                </ContainerProdutos>

                </Scroll>
                </>
        )
    }
}

export default Artesanato
