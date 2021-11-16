import Mes from './Mes'

function Calendario({mes,ano}) {
    return(
        <div>
            <p>Calendario</p>
            <Mes mes={mes} ano={ano} />
        </div>
    )
}

export default Calendario;