import React from 'react'
import Header from './cmpnts/Header'
import Calendario from './Calendario/Calendario';


function PaginaUM() {
    return (
        <div>
            <Header fontSize='30' titulo="Pagina UM"/>
            <Calendario mes='11' ano='2021'/>
        </div>
    )
}
export default PaginaUM;