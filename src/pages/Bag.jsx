import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import CardBag from '../componets/CardBag'
import Footer from '../componets/Footer'
import { FaShoppingBag } from 'react-icons/fa'


const Scroll = styled.div`
overflow-y:auto ;
scroll-behavior: smooth;
height: calc(100vh - 150px );


::-webkit-scrollbar{
    display: none;
}
`


const ContainerGeral = styled.div`
min-height: calc(100vh - 235px);

`
const ContainerBag = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
background-color: #FF8783;
color: white;
height: 70px;

`
const ContainerValorTotal = styled.div`

margin-top: 3rem;
height: 8rem;
display: flex;
justify-content: center;


`
const ValorTotal = styled.div`

border: 1px solid black;
width: 60vw;
background-color: #FF8783;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;

@media (max-width: 960px) {
    width: 100vw;
    
    } 

`

const Button = styled.button`
width: 15rem;
height: 2rem;
background-color: #AD5B58;
cursor: pointer;
@media (max-width: 960px) {
    width: 80vw;
    
    } 
`
const Valor = styled.div`
width: 100vw;
text-align: center;
`
const Parcelamento = styled.div`

`
const ContainerSacola = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 60vh;

`
const Sacola = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;


`
const BagIcon = styled.div`


`
const BagInfo = styled.div`

width: 30vw;
align-items: center;
text-align: center;
@media (max-width: 960px) {
  width: 100vw;
 
    
    } 
`

const ContainerBagInfo = styled.div`
display: flex;
flex-direction: column;
align-items: center;

`
const Title = styled.div`
font-weight: 700;
font-size: 1.2rem;
display: flex;
margin-top: 2rem;
justify-content: center;
@media (max-width: 960px) {
  width: 100vw;
    
    } 
`
const Container = styled.div`

`



export class Bag extends Component {

    state = {
        produtos: [],
        valorTotal: 0,
        mensagem : ""
    }

    componentDidMount = async () => {
        let keys = await Object.keys(localStorage);
        let b = await keys.map((el) => JSON.parse(localStorage.getItem(el)))




        let acumulador = b.map(item => {
            return item.quantidade * item.price
        })

        if (b.length !== 0) {

            let value = acumulador.reduce((total, currentElement) => total + currentElement)

            this.setState({
                valorTotal: value
            })
        }

        this.setState({
            produtos: b,

        })
        let retirar = b.map(item => {
            let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

            return numeros.indexOf(item)
        })

        let resposta = b.map(item => `${item.name} = Quantidade = ${item.quantidade}`)

        let mensagem = `
         ${resposta[1]} ,
         ${resposta[0]} , 
         ${this.state.valorTotal}`

         this.setState({
            mensagem
        })

        let index = parseInt(retirar.splice(-1))
        this.props.totalItens(b.length)


    }

    handleNew = () => {

        this.componentDidMount()

    }

    handleCompra = () => {



    }

    render() {
        return (<>
            <ContainerBag>
                <h3>Sacola</h3>
                Vendas somente por Whatsapp
            </ContainerBag>
            <Scroll>
                <ContainerGeral>

                    {this.state.produtos.length === 0 ?
                        <ContainerSacola>

                            <Sacola>
                                <BagIcon> <FaShoppingBag style={{ fontSize: "5rem", color: '#FF8783' }} /></BagIcon>
                                <ContainerBagInfo>
                                    <Title>Sua sacola está vazia</Title>
                                    <BagInfo>
                                        Vá para a <Link to='/'>{`Página inicial`}</Link> ou procure no site os produtos que vão te deixar feliz.
                                    </BagInfo>
                                </ContainerBagInfo>

                            </Sacola>

                        </ContainerSacola>

                        :

                        <Container> {this.state.produtos.map((item) => <CardBag delete={this.props.totalItens} name={item.name} price={item.price} quantidade={item.quantidade} id={item.id} newValue={this.handleNew} />
                        )}
                        </Container>
                    }
                    {this.state.produtos.length === 0 ?
                        null
                        :

                        <ContainerValorTotal>
                            <ValorTotal>
                                <Valor>Total ({this.state.produtos.length}) : {(this.state.valorTotal).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</Valor>
                                <Parcelamento>Parcelamos em até 3x sem Juros</Parcelamento>
                               {console.log(this.state.mensagem)}
                                <a href = {`https://api.whatsapp.com/send?phone=5511993418318&text=${this.state.mensagem    }`} ><Button onClick={this.handleCompra} >Comprar</Button></a>
                            </ValorTotal>
                        </ContainerValorTotal>
                    }


                </ContainerGeral>
                <Footer />
            </Scroll>
        </>
        )
    }
}

export default Bag
