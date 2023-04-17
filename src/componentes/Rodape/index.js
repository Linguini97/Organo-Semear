import './Rodape.css'

const Rodape = () => {
    
    return(
        <footer className='footer'>
            <section>
                <ul>
                    <li>
                    <a href="https://www.facebook.com/" target="_blank">
                        <img src="/imagens/fb.png" alt="Logo Facebook" />
                    </a>
                    </li>
                    <li>
                    <a href="https://twitter.com/" target="_blank">
                        <img src="/imagens/tw.png" alt="Logo Twiter" />
                    </a>
                    </li>
                    <li>
                    <a href="https://www.instagram.com/" target="_blank">
                        <img src="/imagens/ig.png" alt="Logo Instagram" />
                    </a>
                    </li>
                </ul>
            </section>
            <section>
                <img src="/imagens/logo.png" alt="Logo Organograma"/>
            </section>
            <section>
                <p>Desenvolvido para o Instituto Semear</p>
            </section>
        </footer>

    )
}

export default Rodape