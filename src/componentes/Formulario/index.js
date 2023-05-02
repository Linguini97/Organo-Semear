import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = ({ aoCadastrar, times, aoCriarTime }) => {

    const [opcaoSelecionada , setOpcaoSelecionada] = useState('colaborador')
    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [email, setEmail] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')
    const [nomeTime, setNomeTime] = useState('')
    const [corTime, setCorTime] = useState('')
    const [diretoria , setDiretoria] = useState('')
    const [contato , setContato] = useState('')
    const [pronome, setPronome] = useState('')

    const aoSubmeter = (evento) => {
        evento.preventDefault()
        console.log('form enviado', nome, cargo, email, imagem, time,contato, pronome)
        aoCadastrar({
            nome,
            cargo,
            email,
            imagem,
            time, 
            contato,
            pronome
        })
        setNome('')
        setEmail('')
        setCargo('')
        setImagem('')
        setTime('')
        setContato('')
        setPronome('')

    };
    const aoSelecionarOpcao = (opcao) =>{
        setOpcaoSelecionada(opcao);
    }

    return (
        <section className="formulario-container">
            <div className='opcoes-formulario'>
                <button className={`opcao-formulario ${opcaoSelecionada === 'colaborador' ? 'selecionada' : ''}`}
                onClick={() => aoSelecionarOpcao('colaborador')}>Colaborador</button>
                <button className={`opcao-formulario ${opcaoSelecionada ==='time' ? 'selecionada':''}`}
                onClick={() => aoSelecionarOpcao('time')}
                >
                Time
                </button>
            </div>
            {opcaoSelecionada === 'colaborador' &&(
            <form className="formulario" onSubmit={aoSubmeter}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <CampoTexto
                    obrigatorio={true}
                    label='Nome'
                    placeholder='Digite o nome do colaborador '
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}/>
                <CampoTexto
                    obrigatorio={true}
                    label='Pronome'
                    placeholder='Digite o pronome do colaborador '
                    valor={pronome}
                    aoAlterado={valor => setPronome(valor)}/>
                <CampoTexto
                    obrigatorio={true}
                    label='Cargo' 
                    placeholder='Digite o cargo do colaborador'
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}/>
                <CampoTexto
                    obrigatorio={true}
                    label='E-mail' 
                    placeholder='Digite o E-mail do colaborador'
                    valor={email}
                    aoAlterado={valor => setEmail(valor)}/>
                <CampoTexto
                    obrigatorio={true}
                    label='Contato'
                    placeholder='Digite o contato do colaborador '
                    valor={contato}
                    aoAlterado={valor => setContato(valor)}/>
                <CampoTexto 
                    label='Imagem' 
                    placeholder='Informe o endereço da imagem '
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}/>
                <ListaSuspensa 
                    obrigatorio={true}
                    label='Times'
                    items={times} 
                    valor={time}
                    aoAlterado={valor => setTime(valor)}/>
                <Botao texto='Criar card' />
            </form>
            )}
            {opcaoSelecionada === 'time' &&(
            <form className="formulario" onSubmit={(evento) => {
                evento.preventDefault()
                aoCriarTime({ nome: nomeTime, cor: corTime })
                setNomeTime('')
                setCorTime('')
            }}>
                <h2>Preencha os dados para criar um novo time.</h2>
                <CampoTexto
                    obrigatorio={true}
                    label='Nome'
                    placeholder='Digite o nome do time'
                    valor={nomeTime}
                    aoAlterado={valor => setNomeTime(valor)}/>
                <CampoTexto
                    obrigatorio={true}
                    label='Cor' 
                    placeholder='Digite sua cor'
                    valor={corTime}
                    aoAlterado={valor => setCorTime(valor)}/>
                    <CampoTexto
                    obrigatorio={true}
                    label='Diretoria' 
                    placeholder='Digite a diretoria que a área pertence'
                    valor={diretoria}
                    aoAlterado={valor => setDiretoria(valor)}/>
                <Botao texto='Criar Time' />
            </form>
            )}    
        </section>
    )
}


export default Formulario