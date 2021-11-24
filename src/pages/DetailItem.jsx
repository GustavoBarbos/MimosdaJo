import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import styled from 'styled-components';
import Footer from '../componets/Footer'

const Produto = styled.div`

background-color: #FF8783;
color: white;
display: flex;
justify-content: center;
align-items: center;

`
const Name = styled.div`

display: flex;
align-items: center;
font-size: 1.4rem;
font-weight: 700;
padding-left: 3rem;
height: 5rem;

@media (max-width: 960px) {
    padding-left: 0;
    text-align: center;
    justify-content: center;
    
    } 

`
const Container = styled.div`
display: flex;
min-height: calc(100vh - 28px - 165px) ;


    @media (max-width: 960px) {
    flex-direction: column;
    align-items: center;
    
    } 

    

`
const ContainerImgPrincipal = styled.div`
width: 50vw;
height: 75vh;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;

@media (max-width: 960px) {

    width: 100%;
    justify-content: space-around;

    } 
`
const ContainerVenda = styled.div`
width: 40%;
display: flex;
flex-direction: column;
justify-content: space-between;
min-height: 320px;

@media (max-width: 960px) {
width: 100%;
justify-content: space-around;
margin-top: 2rem;
} 
`
const ImgPrincipal = styled.img`
    
width: 20rem ;
height: 25rem;

@media (max-width: 960px) {
width: 80vw;
height: 345px;
justify-content: space-around;
} 

`
const ContainerImages = styled.div`
display: flex;
justify-content: center;

 @media (max-width: 960px) {
 width: 90vw;
justify-content: space-around;
margin-top: 1rem;
} 
    
`
const Images = styled.img`
    
width: 4.5rem;
height: 4.5rem;
margin: 1rem;
border:1px solid black;

@media (max-width: 960px) {
 margin: 0;
width: 60px;
height: 65px;
justify-content: space-around;
} 
    
`
const Desc = styled.div`

font-size: 1.2rem ;
text-align: center;  
margin-top: 2rem;
@media (max-width: 960px) {
margin-top: 2rem;
font-size:1rem;
} 

`
const ButtonCarrinho = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 80%;
background-color: #FF8783;
border-radius: 20px;
height: 3rem;

cursor: pointer;
@media (max-width: 960px) {
margin-top: 2rem;
} 
`
const Oldprice = styled.div`

opacity: 0.5;
text-decoration:line-through;
@media (max-width: 960px) {
margin-top: 2rem;
} 

    
`
const Price = styled.div`
font-weight: 700;
font-size: 1.3rem;
    
`
const ButtonVenda = styled.div`
display: flex;
align-items: center;
justify-content: center;
border-radius: 20px;
width: 80%;
background-color: #399b41;
height: 3rem;
cursor: pointer;
margin-top: 1rem;

`
const ContainerValue = styled.div`
   
`
const Parcelamento = styled.div`
    
`
const ContainerButtons = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: calc(20% + 30px );
   

`
const DivGeral = styled.div`

  height: 100vh;

`

const Scroll = styled.div`
overflow-y:auto ;
scroll-behavior: smooth;
height: calc(100vh - 109px);

::-webkit-scrollbar{
    display: none;
}
`



function DetailItem(props) {

    const { id } = useParams()

    const [principalImage, setPrincipalImage] = useState("https://www.hypeness.com.br/1/2017/04/roupa2.jpg")
    const [item, setItem] = useState([])
    const [data, setData] = useState([
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
            "image": "data:image/jpeg;base64,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",
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

    useEffect(() => {

        let keys = Object.keys(localStorage);
        let quantidade = keys.map((el) => JSON.parse(localStorage.getItem(el)))


        let response = data.filter(item => {
            return item.id.includes(id)
        })

        setItem(response)

    }, [])

    const formatValue = () => {

        if (item[0].price.includes(',')) {
            return item[0].price.toLocaleString('pt-BR')
        }
        return `${item[0].price},00`.toLocaleString('pt-BR')
    }
    const formatOldPrice = () => {

        if (item[0].oldprice.includes(',')) {
            return item[0].oldprice.toLocaleString('pt-BR')
        }
        return `${item[0].oldprice},00`.toLocaleString('pt-BR')
    }
    const handleParcelamento = () => {

        const adicional = parseInt(item[0].price) / 10

        let price = parseInt(item[0].price) + adicional
        return parseInt(price / 2)

    }

    const handleBag = async (key, item) => {
        let keys = await Object.keys(localStorage);
        let quantidade = await keys.map((el) => JSON.parse(localStorage.getItem(el)))


        await localStorage.setItem(key, JSON.stringify(item[0]))

        await props.totalItens(quantidade.length + 1)
    }


    return (
        <div style={{ display: 'flex', flexDirection: "column" }}>
                <Produto>Produtos com 10%OFF</Produto>
            <Scroll>
                {item.length ?
                    <DivGeral>
                        <Name>{item[0].name}</Name>
                        <Container>

                            <ContainerImgPrincipal>
                                <ImgPrincipal src={principalImage} alt={item.name} />
                                <ContainerImages>
                                    
                                    {item[0].images.map(produto => <Images onMouseOver={() => setPrincipalImage(produto)} src={produto} alt={item.id} />)}

                                </ContainerImages>
                            </ContainerImgPrincipal>

                            <ContainerVenda>
                                <Desc>{item[0].desc}</Desc>
                                <ContainerValue>

                                    <Oldprice>De:  {Number(item[0].oldprice).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</Oldprice>
                                    <Price>Para:  {Number(item[0].price).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })} </Price>
                                    <Parcelamento>
                                        ou {Number(item[0].price).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })} em 2x de {Number(item[0].price / 2).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })} sem juros
                                    </Parcelamento>

                                </ContainerValue>
                                <ContainerButtons>
                                    <ButtonCarrinho onClick={() => handleBag(item[0].id, item)}>Adicionar ao Carrinho</ButtonCarrinho>
                                    <ButtonVenda>Comprar</ButtonVenda>
                                </ContainerButtons>
                            </ContainerVenda>
                        </Container>
                        <Footer />





                    </DivGeral>


                    :
                    <h1>aguarde</h1>
                }

            </Scroll>
        </div>
    )
}

export default DetailItem