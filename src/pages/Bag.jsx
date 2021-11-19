import React, { Component } from 'react'
import styled from 'styled-components'
import CardBag from '../componets/CardBag'
import Footer from '../componets/Footer'


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
background-color: black;
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

`
const Parcelamento = styled.div`

`




export class Bag extends Component {

    state = {
        produtos: [],
        valorTotal: 0
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
                        <div>Sacola Vazia</div>
                        :
                        this.state.produtos.map((item) => <CardBag name={item.name} price={item.price} quantidade={item.quantidade} id={item.id} newValue={this.handleNew} />
                        )}
                    {this.state.produtos.length === 0 ?
                        null
                        :
                        
                        <ContainerValorTotal>
                            <ValorTotal>
                                <Valor>Total ({this.state.produtos.length}) : R$ {this.state.valorTotal}</Valor>
                                <Parcelamento>Parcelamos em até 3x sem Juros</Parcelamento>
                                <Button onClick={this.handleCompra} >Comprar</Button>
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
