import React from 'react';
import './Calendario.css'

class Dia extends React.Component {

    state = { qtdCliques: 0 }
    
    constructor () {
        super();
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick(event) {
        var contador = this.state.qtdCliques + 1;
        this.setState( 
            {  qtdCliques: contador },
            function () {
                console.log("CALLBACK: Clicou " + this.state.qtdCliques + " vezes em " + this.props.data)
            }
        );
        console.log("NATURAL: Clicou " + this.state.qtdCliques + " vezes em " + this.props.data)        
    }

    render () {
        return (
            <button className="dia" onClick={this.handleOnClick}>
                { 
                    (this.props.data > 0 && this.props.data < 32) ? 
                        this.props.data : 
                        '-' 
                }
            </button>
        )
    }
}

// function Dia({data,mes,ano}) {
//     return (
//         <button>
//             { (data > 0 && data < 32) ? data : '-' }
//         </button>
//     )
// }
export default Dia;