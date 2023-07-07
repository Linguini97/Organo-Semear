import { useState } from 'react'
import axios from 'axios';
import { useNavigate  } from 'react-router-dom';
import { ExclamationTriangleFill, ShopWindow } from 'react-bootstrap-icons';
import './FormularioLogin.css'

const FormularioLogin =() =>{

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [showError, setShowError] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);
    const navigate  = useNavigate();

    const handleUsernameChange = (evento) =>{
        setUsername(evento.target.value)
    };
    const handlePasswordChange = (evento) => {
        setPassword(evento.target.value)
    };
    const showErrorMessage  = (message)=>{
        setShowError(true);
        setTimeout(() =>{
            setShowError(false);
        }, 5000);
        setError(message)
    };
    const AoSubmeterlogin = async (evento) => {
        evento.preventDefault();

        if (!username || !password){
            showErrorMessage('Por favor preencha todos os campos');
            return;
        }
        try {
            const response = await axios.post('http://localhost:3001/Usuario', {
                username,
                password,
            })
            const {data} = response;
            if (data.msg === 'Usuário Logado com sucesso'){
                localStorage.setItem('token', data.token);
                setLoggedIn(true);
            } else {
                showErrorMessage('Usuário ou senha incorretos');
            }
        } catch (error){
            console.log(error);
            alert('Houve um erro ao realizar o Login. Tente novamente mais tarde')   
        }

    };
    if(loggedIn){
        navigate("/cadastro");
        return null;
    }
    return(
        <section className='formulario-container'>
            <form className='formulario' onSubmit={AoSubmeterlogin}>
            <h2>Faça o Login para cadastrar um colaborador:</h2>

                <div className="campo-texto">
                    <label htmlFor='username'>Usuário:</label>
                    <input
                        type='text'
                        id='username'
                        name='username'
                        value={username}
                        onChange={handleUsernameChange}
                    />
                    </div>
                    <div className="campo-texto">
                    <label htmlFor='password'>Senha:</label>
                    <input 
                        type='password'
                        id='password'
                        name='password'
                        value={password}
                        onChange={handlePasswordChange}
                    />
                    </div>
                    <div className='container-botao'>
                    <button className='botao' type='submit'>Entrar</button>
                    </div>
                    {showError && 
                        <div className='container-erro'>
                                    <ExclamationTriangleFill className="bi flex-shrink-0 me-2" role="img" aria-label="Danger:" />
                            <p className='mensagem-erro'>{error}</p>
                        </div>
                    }                   
                </form>
        </section>
    )
}

export default FormularioLogin
