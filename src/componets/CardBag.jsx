import React, { Component } from 'react'
import styled from 'styled-components'

const ContainerGeral = styled.div`


display: flex;
flex-direction: column;
align-items: center;
justify-content: center;


`
const CardContainer = styled.div`
border: 2px solid black;
height: 8rem;
margin-top: 2rem;
width: 80vw;
display: flex;
align-items: center;
justify-content: space-around;
@media (max-width: 960px) {
height: calc(12rem);
justify-content: space-between;
width: 100%;
border-radius: 10px;

} 


`
const ContainerImg = styled.div`

width: 20%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
@media (max-width: 960px) {

width: 50%;

} 
`
const Img = styled.img`

width: 6rem;
height: 6rem;






`
const Nome = styled.div`

width: 30vw;
text-align: center;
@media (max-width: 960px) {

width: 100%;


} 
 `
const Quantidade = styled.div`
 text-align: center;
 width: 3rem;
 cursor: pointer;
 @media (max-width: 960px) {


} 
  `
const Valor = styled.div`
 text-align: center;
 width: 6rem;
  @media (max-width: 960px) {
font-size: 1.1rem;
font-weight: 600;
} 
   `

const ContainerInfos = styled.div`
display: flex;
justify-content: space-around;
width: 70%;

@media (max-width: 960px) {
width: 50%;
flex-direction: column;
align-items: center;
height: 100%;

} 

`

const Excluir = styled.div`
 
 width: 3rem;
 opacity: 0.8;
 cursor: pointer;
 @media (max-width: 960px) {

width: 90%;
text-align: center;
background-color: #e15454;

}
  `


class CardBag extends Component {

    state = {
        quantidade: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        quant : 1
    }

    


    handleNewValue = async (e) => {

        let item = JSON.parse(localStorage.getItem(this.props.id)) 
        item.quantidade = e.target.value
    

        localStorage.setItem(this.props.id, JSON.stringify(item))


        await this.setState({
            quant : e.target.value
        })
        this.props.newValue()
    }

    handleDeleteCard = async () => {
        let keys = await Object.keys(localStorage);
        let quantidade = await keys.map((el) => JSON.parse(localStorage.getItem(el)))
        localStorage.removeItem(this.props.id);
        this.props.newValue()
        this.props.delete(quantidade.length)
    }
    

    render() {
        return (
            <ContainerGeral>
                <CardContainer>
                    <ContainerImg>

                        <Img src= {this.props.image} alt= {this.props.id} />
                    </ContainerImg>
                    <ContainerInfos>
                        <Nome>{this.props.name}</Nome>
                        <Quantidade>
                            <select name="Quantidade"  value={this.state.quant} onChange={this.handleNewValue} id="unique">
                                {
                                    this.state.quantidade.map(number => <option onChange={this.handleQuantidade} value={number}>{number}</option>
                                    )
                                }
                            </select>
                        </Quantidade>
                        <Valor>{(this.props.price * this.state.quant).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</Valor>
                            <Excluir onClick={this.handleDeleteCard}>Excluir</Excluir>
                        
                    </ContainerInfos>
                </CardContainer>
            </ContainerGeral>
        )
    }
}

export default CardBag
