import React, { Component } from 'react'
import styled from 'styled-components'
import {IoLogoWhatsapp} from 'react-icons/io'
import {AiOutlineInstagram} from 'react-icons/ai'
import {BsFacebook} from 'react-icons/bs'
import { Link } from 'react-router-dom'

const ContainerGeral = styled.div`
margin-top: 5rem;
height: 15rem;
background-color: black;


`
const Sobre = styled.div`
display: flex;
flex-direction: column;
margin-top: 5rem;
width: 25vw;
text-align: center;
@media (max-width: 960px) {
    width: 100vw;
    margin-top: 1rem;
    } 
`
const Atendimento = styled.div`

margin-top: 5rem;
display: flex;
flex-direction: column;
width: 25vw;
text-align: center;
@media (max-width: 960px) {
  
    width: 100vw;
    margin-top: 1rem;

    } 

`
const Faleconosco = styled.div`
display: flex;
margin-top: 5rem;
flex-direction: column;
width: 25vw;
text-align: center;
@media (max-width: 960px) {
    width: 100vw;
    margin-top: 1rem;
    } 
`
const Acompanhe = styled.div`
display: flex;
flex-direction: column;
height: 80%;
margin-top: 5rem;
width: 25vw;
text-align: center;
@media (max-width: 960px) {
  margin-top: 1rem;

  } 
`

const Container = styled.div`
display: flex;
justify-content: space-around;
margin-top: 2rem;
color: white;
min-height: 100%;
background-color: black;

@media (max-width: 960px) {
  
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  justify-content: center;
    } 

`
const Title = styled.div`
@media (max-width: 960px) {
  margin-top: 2rem;
    } 
`
const Text = styled.div`
margin-top: 1rem;
`
const Text2 = styled.div`

`
const FaleconoscoText = styled.div`
cursor: pointer;
margin-top: 1rem;
`
const SobreText = styled.div`
cursor: pointer;
margin-top: 1rem;


`
const RedeSocial = styled.div`
cursor: pointer;
margin-top: 2px;
height: 80%;

@media (max-width: 960px) {
display: flex;
align-items: center;
width: calc(100% + 10px);
justify-content: space-around;

    } 


`





class Footer extends Component {
    render() {
        return (

            <ContainerGeral>
                <Container>
                    
                    <Sobre>
                        <Title>Sobre</Title>
                        <SobreText>Um Pouco Mais Sobre Nós</SobreText>
                    </Sobre>

                    <Atendimento>
                        <Title>Atendimento</Title>
                        <Text> Segunda à Sexta das 07:30 às 21:00 </Text>
                        <Text2>Sábados das 07:30 às 18:00 </Text2>
                    </Atendimento>

                    <Faleconosco>
                        <Title>Faleconosco</Title>
                        <FaleconoscoText>(11) 4488-7795 | (11) 95540-0291 <IoLogoWhatsapp style={{color : 'green'}}/> </FaleconoscoText>
                    </Faleconosco>

                    <Acompanhe>
                        <Title>Acompanhe</Title>
                        <Text>
                           <a style={{textDecoration: 'none',color : 'white'}} href = "https://www.instagram.com/meu_ateliemimosdajo"> <RedeSocial> <AiOutlineInstagram/>Instagram</RedeSocial> </a>
                           <a style={{textDecoration: 'none',color : 'white'}} href = "https://www.instagram.com/meu_ateliemimosdajo"> <RedeSocial><BsFacebook/>Facebook</RedeSocial> </a>
                        </Text>
                    </Acompanhe>

                </Container>
            </ContainerGeral>
        )
    }
}

export default Footer
