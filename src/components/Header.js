function Header( {titulo,fontSize} ){
    return(
      <div>
        <p style={{fontSize: fontSize+'px'}}>
          DJ - {titulo} - FontSize: {fontSize}
        </p>
      </div>
    )
  }

export default Header;