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
height: calc(100% + 2px);
flex-direction: column;

} 


`
const ContainerImg = styled.div`

width: 20%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
@media (max-width: 960px) {
margin-top: 1rem;


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
margin-top: 2rem;

} 
 `
const Quantidade = styled.div`
 text-align: center;
 width: 3rem;
 cursor: pointer;
 @media (max-width: 960px) {
margin-top: 2rem;

} 
  `
const Valor = styled.div`
 text-align: center;
 width: 6rem;
  @media (max-width: 960px) {
    margin-top: 1rem;

} 
   `

const ContainerInfos = styled.div`
display: flex;
justify-content: space-around;
width: 70%;

@media (max-width: 960px) {
align-items: center;
justify-content: space-around;
flex-direction: column;
margin-bottom: 1rem;
} 

`

const Excluir = styled.div`
 
 width: 3rem;
 opacity: 0.8;
 cursor: pointer;
 @media (max-width: 960px) {
margin-top: 1rem;

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

    handleDeleteCard = () => {
        localStorage.removeItem(this.props.id);
        this.props.newValue()
    }
    

    render() {
        return (
            <ContainerGeral>
                <CardContainer>
                    <ContainerImg>

                        <Img src="data:image/jpeg;base64,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" alt="" />
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
                        <Valor>R${this.props.price * this.state.quant}</Valor>
                            <Excluir onClick={this.handleDeleteCard}>Excluir</Excluir>
                        
                    </ContainerInfos>
                </CardContainer>
            </ContainerGeral>
        )
    }
}

export default CardBag
