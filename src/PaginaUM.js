import React from 'react'
import Header from './cmpnts/Header'

function Dia({data,mes,ano}) {
    return (
        <button>
            { (data > 0 && data < 32) ? data : '-' }
        </button>
    )
}

function Semana({diaInicial,mes,ano}) {
    return(
        <div>
            <Dia data={diaInicial} mes={mes} ano={ano} />
            <Dia data={diaInicial + 1} />
            <Dia data={diaInicial + 2} />
            <Dia data={diaInicial + 3} />
            <Dia data={diaInicial + 4} />
            <Dia data={diaInicial + 5} />
            <Dia data={diaInicial + 6} />
        </div>
    )
}

function Calendario({mes,ano}) {
    return(
        <div>
            <p>Calendario</p>
            <p>{mes}/{ano}</p>
            <Semana diaInicial={0} mes={mes} ano={ano}/>
            <Semana diaInicial={7}  />
            <Semana diaInicial={14} />
            <Semana diaInicial={21} />
            <Semana diaInicial={28} />
        </div>
    )
}

function PaginaUM() {
    return (
        <div>
            <Header fontSize='30' titulo="Pagina UM"/>
            <Calendario mes='11' ano='2021'/>
        </div>
    )
}
export default PaginaUM;