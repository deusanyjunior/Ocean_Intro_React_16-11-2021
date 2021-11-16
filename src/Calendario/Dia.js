import React from 'react';

class Dia extends React.Component {

    state = { qtdCliques: '0' }
    
    constructor () {
        super();
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick(event) {
        this.setState( {  qtdCliques: 1 } );
        console.log("Clicou " + this.state.qtdCliques + " vezes em " + this.props.data)
    }

    render () {
        return (
            <button onClick={this.handleOnClick}>
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