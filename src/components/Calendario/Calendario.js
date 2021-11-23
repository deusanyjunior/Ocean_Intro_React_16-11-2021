import Mes from './Mes'
import './Calendario.css'

function Calendario({mes,ano}) {
    return(
        <div>
            <p>Calendario</p>
            <Mes mes={mes} ano={ano} />
        </div>
    )
}

export default Calendario;