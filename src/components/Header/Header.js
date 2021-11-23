import './Header.css'

function Header( {titulo,fontSize} ){
    return(
      <div className="nossoHeader">
        <p style={{fontSize: fontSize+'px'}}>
          DJ - {titulo} - FontSize: {fontSize}
        </p>
      </div>
    )
  }

export default Header;