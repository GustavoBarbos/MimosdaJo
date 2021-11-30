import React, { Component } from 'react'
import styled from 'styled-components'
import CardsProduct from '../componets/CardsProduct'
import axios from 'axios'
import Footer from '../componets/Footer'
import Loading from '../componets/loading/Loading';



const Promocao = styled.div`
background-color: #FF8783;
color: white;
display: flex;
justify-content: center;
align-items: center;
`
const Hr = styled.hr`
font-weight: 900;
border: 0.3px solid #FF8783 ;
opacity: 1;
width: 35vw;
@media(max-width : 960px){
width: 25vw;
}
`
const ContainerTitle = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
width: 100%;

margin-top: 4rem;
`
const Title = styled.div`

font-size: 1.3rem;
font-weight: 600;
`
const ContainerOrdenar = styled.div`
margin-top:3rem;
display: flex;
justify-content: center;

`
const Ordenar = styled.div`

display: flex;
align-items: center;
justify-content: space-around;
color: white;
background-color: #FF8783;
width: 25rem;
height: 3rem;
border-radius: 20px;
@media(max-width : 960px){
width: 80%;
flex-direction: column;
height: 5rem;
}
`
const Select = styled.select`

width: 15rem;

/* Personalize */

color: #fff;
background-color: #FF8783;
background-image: none;
cursor: pointer;




@media(max-width : 960px){

font-size: 1rem;
width: 10rem;
}

`
const ContainerProdutos = styled.div`
margin-top: 4rem;
display: flex;
justify-content: space-around;
height: 100rem;
flex-wrap: wrap;


`
const Scroll = styled.div`
overflow-y:auto ;
scroll-behavior: smooth;
height: calc(100vh - 85px );

::-webkit-scrollbar{
    display: none;
}
`


class PanoDePrato extends Component {

    state = {
        item: "item3",
        data: [],
        lista: []
    }

    componentDidMount = async () => {

        let { data } = await axios.get('https://mimosjosistem.herokuapp.com/panodeprato')
        console.log(data)
        await this.setState({
            data
        })


        if (this.state.item === "item3") {


            let ordemAlfabetica = this.state.data.sort((a, b) => {
                if (a.name < b.name) return -1;
                if (a.name > b.name) return 1;
                return 0;
            });

            this.setState({
                lista: ordemAlfabetica
            })


        }



    }

    handleSelect = async e => {

        await this.setState({
            item: e.target.value
        })

        if (this.state.item === "item2") {

            let ordemAlfabetica = await this.state.data.sort((a, b) => {

                if (Number(a.price) < Number(b.price))
                    return 1;
                if (Number(a.price) > Number(b.price))
                    return -1;
                return 0;

            });

            this.setState({
                lista: ordemAlfabetica
            })
        }
        if (this.state.item === "item1") {

            let ordemAlfabetica = await this.state.data.sort((a, b) => {

                if (Number(a.price) < Number(b.price))
                    return -1;
                if (Number(a.price) > Number(b.price))
                    return 1;
                return 0;

            });

            this.setState({
                lista: ordemAlfabetica
            })
        }
        if (this.state.item === "item3") {


            let ordemAlfabetica = this.state.data.sort((a, b) => {
                if (a.name < b.name) return -1;
                if (a.name > b.name) return 1;
                return 0;
            });

            this.setState({
                lista: ordemAlfabetica
            })


        }

    }

    render() {
        return (<>
            <Promocao>Produtos com 10%OFF</Promocao>
            {this.state.lista.length === 0 ?

                <Loading />

                :
                <>

                    <Scroll>

                        <ContainerTitle>
                            <Hr />
                            <Title> {this.props.name}</Title>
                            <Hr />
                        </ContainerTitle>
                        <ContainerOrdenar>
                            <Ordenar>
                                Ordenar por :
                                <Select value={this.state.item} onChange={this.handleSelect} id="sort" class="js-sort-by sort-by form-control full-width-xs">
                                    <option value="item3" selected >A - Z</option>
                                    <option value="item2">Preço : Maior ao Menor</option>
                                    <option value="item1">Preço : Menor ao Maior</option>
                                </Select>
                            </Ordenar>
                        </ContainerOrdenar>
                        <ContainerProdutos>
                            {this.state.lista.map(item => <CardsProduct totalItens={this.props.totalItens} rota="toalhas" props={item} />)}
                        </ContainerProdutos>
                        <Footer />

                    </Scroll>
                </>

            }

        </>
        )
    }
}

export default PanoDePrato
