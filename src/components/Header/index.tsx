import './styles.css'

const Header = () => {
    return (
        <header className="header">
            <div className="logo" role="img" aria-label='Logo do Sorteador'></div>
            <img className='participant' src="/imagens/participante.png" alt="participante com um presente na mão" />
        </header>
    )
}

export default Header
