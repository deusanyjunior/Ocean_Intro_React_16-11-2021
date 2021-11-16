function Dia({data,mes,ano}) {
    return (
        <button>
            { (data > 0 && data < 32) ? data : '-' }
        </button>
    )
}

export default Dia;