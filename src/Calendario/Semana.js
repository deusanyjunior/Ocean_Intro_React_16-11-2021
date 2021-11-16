import Dia from './Dia'

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

export default Semana;