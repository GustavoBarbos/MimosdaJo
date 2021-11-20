import React from 'react'
import styled from 'styled-components'
import { useEffect, useState, useRef } from 'react'
import { AiFillCaretRight, AiFillCaretLeft} from 'react-icons/ai'




export default function CarouselDeProdutos() {

   

    return (<Geral>
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
                            <Image>
                                <img src={item.image} alt={item.name} />
                            </Image>
                            <Info>
                                <Name>{item.name}</Name>
                                <OldPrice>R${item.oldprice}</OldPrice>
                                <Price>R${item.price}</Price>
                                <Bag onClick={() => {
                                    handleBag(item.id,item)
                                }
                                }> Adicionar ao Carrinho </Bag>

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
