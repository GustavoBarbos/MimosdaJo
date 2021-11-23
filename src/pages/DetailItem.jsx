import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import styled from 'styled-components';
import Footer from '../componets/Footer'

const Produto = styled.div`

background-color: black;
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
const Images = styled.div`
    
width: 4rem;
height: 4rem;
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

    useEffect(() => {

        let keys =  Object.keys(localStorage);
        let quantidade =  keys.map((el) => JSON.parse(localStorage.getItem(el)))
       

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

            {item.length ?
                <DivGeral>
                    <Produto>Produtos com 10%OFF</Produto>
                    <Name>{item[0].name}</Name>
                    <Container>

                        <ContainerImgPrincipal>
                            <ImgPrincipal src={principalImage} alt={item.name} />
                            <ContainerImages>

                                {item[0].images.map(produto => <Images onMouseOver={() => setPrincipalImage(produto)} src={produto} alt={item.name} />)}

                            </ContainerImages>
                        </ContainerImgPrincipal>

                        <ContainerVenda>
                            <Desc>{item[0].desc}</Desc>
                            <ContainerValue>

                                <Oldprice>De:  R${formatOldPrice()}</Oldprice>
                                <Price>Para:  R${formatValue()} </Price>
                                <Parcelamento>
                                    ou R$ {handleParcelamento() * 2} em 2x de R$ {handleParcelamento()} sem juros
                                </Parcelamento>

                            </ContainerValue>
                            <ContainerButtons>
                            <ButtonCarrinho onClick={() =>  handleBag(item[0].id, item)}>Adicionar ao Carrinho</ButtonCarrinho>
                            <ButtonVenda>Comprar</ButtonVenda>
                            </ContainerButtons>
                        </ContainerVenda>
                    </Container>
                    <Footer/>





                </DivGeral>


                :
                <h1>aguarde</h1>
            }


        </div>
    )
}

export default DetailItem