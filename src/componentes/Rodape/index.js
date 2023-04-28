import './Rodape.css'

const Rodape = () => {
    
    return(
        <footer className='footer'>
            <section>
                <ul>
                    <li>
                    <a href="https://www.facebook.com/isemear/?locale=pt_BR" target="_blank">
                        <img src="/imagens/fb.png" alt="Logo Facebook" />
                    </a>
                    </li>
                    <li>
                    <a href="https://twitter.com/instituto2" target="_blank">
                        <img src="/imagens/tw.png" alt="Logo Twiter" />
                    </a>
                    </li>
                    <li>
                    <a href="https://www.instagram.com/isemearoficial/?hl=pt-br" target="_blank">
                        <img src="/imagens/ig.png" alt="Logo Instagram" />
                    </a>
                    </li>
                </ul>
            </section>
            <section className='imagem-logo'>
                <img src="/imagens/logo_branco.png" alt="Logo Semear"/>
            </section>
            <section>
                <p>Desenvolvido para o Instituto Semear</p>
            </section>
        </footer>

    )
}

export default Rodape