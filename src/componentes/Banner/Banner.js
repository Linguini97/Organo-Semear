import { Link } from 'react-router-dom';


import './Banner.css'

function Banner(){

    return (
        <nav className="navbar bg-dark" data-bs-theme="dark">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col">
                        <Link to='/' a className="navbar-brand">
                            <img src="/imagens/logo_branco.png" alt="Logo" width="180" height="80" className="d-inline-block align-text-top" />
                        </Link>
                    </div>
                    <div className="col text-center">
                        <Link to='/' className="nav-link active" aria-current="page" style={{ fontSize: "24px", color: "white", margin: "0 30px" }}>Organograma</Link>
                    </div>
                    <div className="col text-end">
                        <Link to='/login' className="nav-link" style={{ fontSize: "24px", color: "white" }}>Cadastrar novo time ou colaborador</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Banner