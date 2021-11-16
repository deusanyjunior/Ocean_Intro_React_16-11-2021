import React from 'react'
import ReactDOM from 'react-dom'

function Login(){
    return(
      <div>
        <p>Username:</p>
        <p>Password:</p>
      </div>
    )
  }
  
  function Header(props){
    return(
      <div>
        <p style={{fontSize: props.fontSize+'px'}}>DJ - {props.titulo} FontSize: {props.fontSize}</p>
      </div>
    )
  }
  
  ReactDOM.render(
    <React.StrictMode>
      <Header titulo="Início" fontSize="30"/>
      <Login />
    </React.StrictMode>
    ,
    document.getElementById('root')
      
  )
  