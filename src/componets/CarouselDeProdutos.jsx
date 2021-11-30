import React from 'react'
import styled from 'styled-components'
import { useState, useRef, useEffect } from 'react'
import { AiFillCaretRight, AiFillCaretLeft } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import axios from "axios";
import Loading from './loading/Loading'


const Corpo = styled.div`

width: 100%;
background-color: rgb(238, 238, 238);
color: #1e1e1e;
display: flex;
justify-content: center;
align-items: center;
margin-top: 1rem;



`
const Container = styled.div`

max-width: 80vw;
border-radius: 16px;
background-color: rgb(238, 238, 238);


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

width: 100%;

`
const Name = styled.span`
display: flex;
align-items: flex-end;
justify-content: center;
width: 100%;
color: #1e1e1e;
font-size: 1.2rem;
font-weight: bold;
height: 100%;

`
const OldPrice = styled.span`


font-size: 0.9rem;
text-decoration:line-through;

`
const Price = styled.span`




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
margin-top: 10rem;

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
const ContainerPrice = styled.div`
display: flex;
flex-direction: column;
align-items: center;

`
const Parcelamento = styled.div`
width: 90%;
text-align: center;
font-size: 0.8rem;

`

export default function CarouselDeProdutos(props) {

    const [data, setData] = useState([])


    useEffect(async () => {

        const { data } = await axios.get("http://localhost:5000/produtos")
        setData(data)


    }, [])

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

        let keys = await Object.keys(localStorage);
        let quantidade = await keys.map((el) => JSON.parse(localStorage.getItem(el)))

        await localStorage.setItem(key, JSON.stringify(item))
        await props.totalItens(quantidade.length + 1)
    }



    return (<>

        {data.length === 0 ?
            <Loading />
            :
            <>
                <Geral>
                    <ContainerInfo>
                        <Escrita>
                            RECOMENDADOS PARA VOCÊ

                        </Escrita>
                    </ContainerInfo>

                    <Corpo>
                        <Container>

                            <Carousel ref={carousel}>

                                {data.map((item) => {
                                    return <Item>

                                        <Link to={`/item/produto/${item._id}`}>
                                            <Image>
                                                <img src={item.image} alt={item.name} />
                                            </Image>
                                        </Link>

                                        <Info>

                                            <Link to={`/item/produto/${item._id}`} style={{ textDecoration: 'none', width: "100%", height: "60px", display: 'flex' }}>
                                                <Name>{item.name}</Name>
                                            </Link>

                                            <ContainerPrice>
                                                <OldPrice>{(parseInt(item.oldprice)).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</OldPrice>
                                                <Price>{Number(item.price).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</Price>
                                                <Parcelamento>{Number(item.price).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })} em 2x de {(item.price / 2).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })} sem juros</Parcelamento>
                                            </ContainerPrice>

                                            <Bag onClick={() => {
                                                handleBag(item._id, item)
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

            </>
        }


    </>
    )
}
