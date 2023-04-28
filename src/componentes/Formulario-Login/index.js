import { useState } from 'react'
import axios from 'axios';
import { useNavigate  } from 'react-router-dom';

import './FormularioLogin.css'

const FormularioLogin =() =>{

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate  = useNavigate();

    const handleUsernameChange = (evento) =>{
        setUsername(evento.target.value)
    };
    const handlePasswordChange = (evento) => {
        setPassword(evento.target.value)
    }
    const AoSubmeterlogin = async (evento) => {
        evento.preventDefault();

        if (!username || !password){
            setError('Por favor preencha todos os campos');
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
            <h2>Por favor, preencha os campos abaixo para acessar a sua conta:</h2>

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
                    {error && <p>{error}</p>} 
                    </div>
                </form>
        </section>
    )
}

export default FormularioLogin