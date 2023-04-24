import './Banner.css'

function Banner(){

    return(
        <header className="banner">
            <div className='superior'>
                <img src="/imagens/logo-semear.png" alt="Banner principal do Organograma" ></img> 
                <h1>Organo</h1>
            </div>
            <div className='inferios'>
                <h2>Líderes que Inspiram</h2>
            </div>
        </header>
    )
}

export default Banner