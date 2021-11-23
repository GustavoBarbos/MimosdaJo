import React from 'react'
import styled from 'styled-components'
import { useState, useRef } from 'react'
import { AiFillCaretRight, AiFillCaretLeft } from 'react-icons/ai'
import { Link } from 'react-router-dom'


const Corpo = styled.div`

width: 100%;
background-color: white;
color: #1e1e1e;
display: flex;
justify-content: center;
align-items: center;
margin-top: 1rem;


`

const Container = styled.div`

max-width: 80vw;
border-radius: 16px;
background-color: white;


@media (max-width: 960px) {
display: flex;
flex-direction: column;
align-items: center;
    width: 100vw;

} 

`

const Carousel = styled.div`

display: flex;
overflow-x: auto;
scroll-behavior: smooth;

::-webkit-scrollbar{
    display: none;
}
@media (max-width: 960px) {

width: 100vw;
margin-left: 0;
} 

`
const Item = styled.div`

background-color: white;
margin: 10px;
padding: 10px;
width: 280px;
border-radius: 16px;
flex: none;


`
const Image = styled.div`
img{
    width: 260px;
    height: 260px;
    object-fit: cover;
}

`
const Info = styled.div`
height: 230px;
display: flex;
flex-direction: column;
justify-content: space-between;


`
const Name = styled.span`

display: block;
text-align: center;
color: #1e1e1e;
padding: 5px;
border-radius: 10px;
font-size: 1.2rem;
font-weight: bold;
margin: 10px 0;
height: 70px;
`
const OldPrice = styled.span`
display: block;
text-align: center;
color: #1e1e1e;
padding: 5px;
border-radius: 10px;

font-size: 0.9rem;
text-decoration:line-through;
flex-grow: 1;
color: black;
`
const Price = styled.span`
display: block;
text-align: center;
color: #1e1e1e;
padding: 5px;
border-radius: 10px;
margin-top: -30px;

font-size: 1.2rem;
font-weight: bold;




`
const Button = styled.div`
width: 100%;
text-align: center;
display: flex;
justify-content: center;
align-items: center;
button{
background-color: transparent;
border: none;
cursor: pointer;
font-size: 3rem;
margin-top: 1rem;
@media (max-width: 800px) {

display: none;
} 
}

`

const ContainerInfo = styled.div`

width: 100vw;
display: flex;
justify-content: center;
margin-top: 7rem;
`
const Escrita = styled.div`
font-weight: 700;
width: 80vw;
border-bottom: 0px;
margin-bottom: 0px;

@media (max-width: 960px) {
text-align: center;
    } 

`

const Geral = styled.div`
margin-top: 12rem;
`
const Bag = styled.div`
background-color: #FF8783;
display: block;
text-align: center;
color: #1e1e1e;
padding: 5px;
border-radius: 10px;
cursor: pointer;
margin-top: 10px;
font-size: 1.2rem;
font-weight: bold;
text-align: center;
`


export default function CarouselDeProdutos(props) {

    const [data] = useState([
        {
            "id": "1",
            "name": "Pano de Prato Estilizado",
            "oldprice": "10",
            "price": "15",
            "image": "https://www.hypeness.com.br/1/2017/04/roupa2.jpg",
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
            "name": "Camiseta Larga Skate",
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
        
    ])

    const carousel = useRef(null)

    const handleLeftClick = (e) => {
        e.preventDefault()

        carousel.current.scrollLeft -= carousel.current.offsetWidth
    }
    const handleRightClick = (e) => {
        e.preventDefault()
        carousel.current.scrollLeft += carousel.current.offsetWidth
    }





    if (!data || !data.length) return null



    const handleBag = async (key, item) => {

        let keys =  await Object.keys(localStorage);
        let quantidade = await  keys.map((el) => JSON.parse(localStorage.getItem(el)))

        await localStorage.setItem(key, JSON.stringify(item))
        await props.totalItens(quantidade.length + 1)
    }


    return (<Geral>
        <ContainerInfo>
            <Escrita>
                RECOMENDADOS PARA VOCÊ

            </Escrita>
        </ContainerInfo>
        <Corpo>
            <Container>
                {console.log(props)}
                <Carousel ref={carousel}>

                    {data.map((item) => {
                        return <Item>
                            
                            <Link to={`/item/${item.id}`}>
                                <Image>
                                    <img src={item.image} alt={item.name} />
                                </Image>
                            </Link>

                            <Info>

                                <Link to={`/item/${item.id}`} style={{ textDecoration: 'none' }}>
                                    <Name>{item.name}</Name>
                                </Link>

                                <OldPrice>R${item.oldprice}</OldPrice>

                                <Price>R${item.price}</Price>

                                <Bag onClick={() => {
                                    handleBag(item.id, item)
                                }}> 
                    
                                Adicionar ao Carrinho 

                                </Bag>

                            </Info>
                        </Item>

                    })}


                </Carousel>
                <Button>
                    <button onClick={handleLeftClick}><AiFillCaretLeft /> </button>
                    <button onClick={handleRightClick}><AiFillCaretRight /></button>
                </Button>

            </Container>
        </Corpo>
    </Geral>
    )
}
