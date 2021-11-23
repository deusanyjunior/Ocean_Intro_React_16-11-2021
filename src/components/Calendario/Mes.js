import Semana from './Semana'

function Mes({mes,ano}) {
    return(
        <div>
            <p>{mes}/{ano}</p>
            <Semana diaInicial={0} mes={mes} ano={ano}/>
            <Semana diaInicial={7}  />
            <Semana diaInicial={14} />
            <Semana diaInicial={21} />
            <Semana diaInicial={28} />
        </div>
    )
}

export default Mes;