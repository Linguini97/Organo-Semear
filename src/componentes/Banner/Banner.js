import { Link } from 'react-router-dom';


import './Banner.css'

function Banner(){

    return (
        <nav class="navbar bg-dark" data-bs-theme="dark">
            <div class="container-fluid">
                <div class="row align-items-center">
                    <div class="col">
                        <Link to='/' a class="navbar-brand">
                            <img src="/imagens/logo_branco.png" alt="Logo" width="180" height="80" class="d-inline-block align-text-top" />
                        </Link>
                    </div>
                    <div class="col text-center">
                        <Link to='/' class="nav-link active" aria-current="page" style={{ fontSize: "24px", color: "white", margin: "0 30px" }}>Organograma</Link>
                    </div>
                    <div class="col text-end">
                        <Link to='/login' class="nav-link" style={{ fontSize: "24px", color: "white" }}>Cadastrar novo time ou colaborador</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Banner