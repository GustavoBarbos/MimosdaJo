import React from 'react'
import Carousel from '../CarouselComponent';

    
import { useEffect, useState, useRef } from 'react'
import { AiFillCaretRight, AiFillCaretLeft} from 'react-icons/ai'



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

const Corpo = styled.div`

width: 100%;
background-color: #e1e1e1;
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




`

const Carouselo = styled.div`

display: flex;
overflow-x: auto;
scroll-behavior: smooth;



::-webkit-scrollbar{
    display: none;
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
button{
background-color: transparent;
border: none;
cursor: pointer;
font-size: 3rem;
margin-top: 1rem;
}
@media (max-width: 960px) {

    display: none;

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


 function PrincipalPage () {
    const [data, setData] = useState([])
 
    const carousel = useRef(null)

    const handleLeftClick = (e) => {
        e.preventDefault()

        carousel.current.scrollLeft -= carousel.current.offsetWidth
    }
    const handleRightClick = (e) => {
        e.preventDefault()
        carousel.current.scrollLeft += carousel.current.offsetWidth
    }


    useEffect(() => {
        fetch('http://localhost:3000/static/shoes.json')
            .then((response) => response.json())
            .then(setData);
    }, [])


    if (!data || !data.length) return null

    

    const handleBag = (key,item) => {
      
        localStorage.setItem(key, JSON.stringify(item))

    }

        return (
            <div>

                <Scroll>
                    <Carousel />
                    <InfoStore />
                    <Geral>
                        <ContainerInfo>
                            <Escrita>
                                RECOMENDADOS PARA VOCÊ
                            </Escrita>
                        </ContainerInfo>
                        <Corpo>
                            <Container>
                                <Carouselo ref={carousel}>

                                    {data.map((item) => {
                                        return <Item>
                                            <Image>
                                                <img src={item.image} alt={item.name} />
                                            </Image>
                                            <Info>
                                                <Name>{item.name}</Name>
                                                <OldPrice>R${item.oldprice}</OldPrice>
                                                <Price>R${item.price}</Price>
                                                <Bag onClick={() => {
                                                    handleBag(item.id, item)
                                                }
                                                }> Adicionar ao Carrinho </Bag>

                                            </Info>
                                        </Item>

                                    })}


                                </Carouselo>
                                <Button>
                                    <button onClick={handleLeftClick}><AiFillCaretLeft /> </button>
                                    <button onClick={handleRightClick}><AiFillCaretRight /></button>
                                </Button>

                            </Container>
                        </Corpo>
                    </Geral>
                    <Footer />

                </Scroll>
            </div>
        )
}

export default PrincipalPage
