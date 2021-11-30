import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Footer from '../componets/Footer'
import axios from 'axios'
import Loading from '../componets/loading/Loading';

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
   
   
   @media (max-width: 960px) {
    display: flex;
    flex-direction: column;
    align-items: center;
} 

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

    const params = useParams()
    console.log(params)

    const [item, setItem] = useState([])
   

    const [principalImage, setPrincipalImage] = useState('')

    useEffect(async () => {


        if (params.produto === "produto") {
            var produto = await axios.get("https://mimosjosistem.herokuapp.com/produtos")
            var id = await params.id


        }



        if (params.produto === "artesanato") {
            var produto = await axios.get("https://mimosjosistem.herokuapp.com/artesanatos")
            var id = await params.id
            
        }

        if (params.produto === "toalhas") {
            var produto = await axios.get("https://mimosjosistem.herokuapp.com/toalhas")
            var id = await params.id
            
        }

        if (params.produto === "panoDePrato") {
            var produto = await axios.get("https://mimosjosistem.herokuapp.com/panoDePrato")
            var id = await params.id
            
        }


        let keys = Object.keys(localStorage);
        let quantidade = keys.map((el) => JSON.parse(localStorage.getItem(el)))
       
        
        let response = produto.data.filter(item => {
            return item._id.includes(id)
        })

        setItem(response)
        console.log(response)
        
        setPrincipalImage(response[0].image)

    }, [])

   


    const handleBag = async (key, item) => {
        let keys = await Object.keys(localStorage);
        let quantidade = await keys.map((el) => JSON.parse(localStorage.getItem(el)))


        await localStorage.setItem(key, JSON.stringify(item[0]))

        await props.totalItens(quantidade.length + 1)
    }

    const handleCompra = async (key, item) => {
        let keys = await Object.keys(localStorage);
        let quantidade = await keys.map((el) => JSON.parse(localStorage.getItem(el)))


        await localStorage.setItem(key, JSON.stringify(item[0]))

        await props.totalItens(quantidade.length + 1)
        window.location = '/bag'
        
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
                                    <ButtonCarrinho onClick={() => handleBag(item[0]._id, item)}>Adicionar ao Carrinho</ButtonCarrinho>
                                    <ButtonVenda onClick={() => handleCompra(item[0]._id, item)}>Comprar</ButtonVenda>
                                </ContainerButtons>
                            </ContainerVenda>
                        </Container>
                        <Footer />





                    </DivGeral>


                    :
                    <Loading/>
                }

            </Scroll>
        </div>
    )
}

export default DetailItem