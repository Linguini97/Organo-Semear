import { useState } from 'react'
import axios from 'axios';
import { useNavigate  } from 'react-router-dom';
import { ExclamationTriangleFill } from 'react-bootstrap-icons';
import './FormularioLogin.css'

const FormularioLogin =() =>{

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [showError, setShowError] = useState(false);
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
            const response = await axios.post('', {
                username,
                password
            });
            navigate.push('/cadastro');
        } catch (error){
            console.log(error);
            if (error.response && error.response.status === 401){
                alert('Login ou senha incorretos');
            }else {
                alert('Houve um erro ao realizar o Login. Tente novamente mais tarde')
            }
        }

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