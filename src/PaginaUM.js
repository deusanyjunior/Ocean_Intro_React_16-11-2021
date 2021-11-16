import React from 'react'
import Header from './components/Header'
import Calendario from './Calendario/Calendario';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

function PaginaUM() {
    return (
        <div>
            <Header fontSize='30' titulo="Pagina UM"/>
            <p> Nosso Calendario: </p>
            <Calendario mes='11' ano='2021'/>
            <p> Calendario do React: </p>
            <Calendar calendarType="US"/>
        </div>
    )
}
export default PaginaUM;