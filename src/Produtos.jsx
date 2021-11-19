import React from 'react'
import produtos from './produtos.json'

export default function Produtos() {
    return (
        <div>
            {produtos.map((item) => {
               return <div>
                   {item.nome}
                    {item.valor}
               </div> 
            })}
        </div>
    )
}
