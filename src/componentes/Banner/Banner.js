import { Link } from 'react-router-dom';


import './Banner.css'

function Banner(){

    return(
        <header className="banner">
            <div className='superior'>
            <Link to='/'>
                <img src="/imagens/logo-semear.png" alt="Banner principal do Organograma" />
            </Link>
                <h1>Organo</h1>
            </div>
            <div className='inferios'>
                <h2>Líderes que Inspiram</h2>
            </div>
        </header>
    )
}

export default Banner