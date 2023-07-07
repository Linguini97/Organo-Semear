import React, { useState, useEffect  } from 'react'
import axios from 'axios';
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = ({ aoCadastrar, times, niveis }) => {

    const [opcaoSelecionada , setOpcaoSelecionada] = useState('colaborador')
    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [email, setEmail] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')
    const [nivel, setNivel] = useState('')
    const [nomeTime, setNomeTime] = useState('')
    const [corTime, setCorTime] = useState('')
    const [contato , setContato] = useState('')
    const [pronome, setPronome] = useState('')
    const [diretoriaSelecionada, setDiretoriaSelecionada] = useState('')
    const [nomeDiretoria, setNomeDiretoria] = useState('')
    const [nomesDiretorias, setNomesDiretorias] = useState([]);
    const [nomesTimes, setNomesTimes] = useState([]);

    const aoCriarDiretoria = (nomeDiretoria) =>{
        const url = 'http://localhost:3001/diretoria';
        const dados = {
            nome: nomeDiretoria
        };
        axios.post(url,dados).then((response)=>{
            console.log(response.data);
            console.log('Diretoria cadastrada com sucesso!')
        })
        .catch((error)=>{
            console.log('Erro ao cadastrar diretoria: ', error)
        });
    };
    const buscarDiretorias = () =>{
        axios.get('http://localhost:3001/diretoria').then(response => {
            const nomes = response.data.map(diretoria => diretoria.nome);
            setNomesDiretorias(nomes);            
        })
        .catch(error => {
            console.log('Erro ao buscar diretorias: ', error);
        });
    };
    useEffect(() => {
        buscarDiretorias();
    }, []);
    const aoCriarTime = (nomeTime, corTime, nomeDiretoria) => {
        const url ='http://localhost:3001/time';
        const dados = {
            nome: nomeTime,
            cor: corTime,
            diretoria_nome: nomeDiretoria
        };
        axios.post(url, dados).then((response)=>{
            console.log(response.data);
            console.log('Time cadastrado com sucesso!')
        })
        .catch(error =>{
            console.log('Erro ao cadastrar time: ', error)
        });
    };
    const buscarTimes = () =>{
        axios.get('http://localhost:3001/time').then(response => {
            const nomes = response.data.map(time => time.nome);
            setNomesTimes(nomes);            
        })
        .catch(error => {
            console.log('Erro ao buscar times: ', error);
        });
    };
    useEffect(() => {
        buscarTimes();
    }, []);

    const aoCadastrarColaborador = (nome, cargo, nivel, imagem, email, pronome, contato, time ) => {
        const url ='http://localhost:3001/colaborador';
        const dados = {
            nome: nome,
            cargo: cargo,
            nivel: nivel,
            imagem: imagem,
            email: email,
            pronome: pronome,
            contato: contato,
            time: time
        };
        axios.post(url, dados).then((response)=>{
            console.log(response.data);
            console.log('Colaborador cadastrado com sucesso!')
        })
        .catch(error =>{
            console.log('Erro ao cadastrar colaborador: ', error)
        });
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
                <button className={`opcao-formulario ${opcaoSelecionada ==='diretoria' ? 'selecionada':''}`}
                onClick={() => aoSelecionarOpcao('diretoria')}
                >
                Diretoria
                </button>
            </div>
            {opcaoSelecionada === 'colaborador' &&(
            <form className="formulario" onSubmit={(evento) => {
                evento.preventDefault()
                aoCadastrarColaborador(nome, cargo, nivel, imagem, email, pronome, contato, time);
                setNome('');
                setCargo('');
                setNivel('');
                setImagem('');
                setEmail('');
                setPronome('');
                setContato('');
                setTime('');
            }}>
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
                <ListaSuspensa 
                    obrigatorio={true}
                    label='Nível hierárquico'
                    items={niveis} 
                    valor={nivel}
                    aoAlterado={valor => setNivel(valor)}/>
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
                    items={nomesTimes}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}/>
                <Botao texto='Criar card' />
            </form>
            )}
            {opcaoSelecionada === 'time' &&(
            <div className='formulario-container'>
            <form className="formulario" onSubmit={(evento) => {
                    evento.preventDefault()
                    aoCriarTime(nomeTime,corTime ,diretoriaSelecionada);
                    setNomeTime('');
                    setCorTime('');
                    setDiretoriaSelecionada('');
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
                        <ListaSuspensa
                        obrigatorio={true}
                        label='Diretoria' 
                        items={nomesDiretorias}
                        valor={diretoriaSelecionada}
                        aoAlterado={valor => setDiretoriaSelecionada(valor)}/>
                    <Botao texto='Criar Time' />
                </form>
            </div> 
            )}
            {opcaoSelecionada === 'diretoria' &&(
            <div className='formulario-container'>
                <form className='formulario' onSubmit={(evento)=>{
                    evento.preventDefault();
                    aoCriarDiretoria( nomeDiretoria);
                    setNomeDiretoria('')
                }}>
                    <h2>Criar Diretoria</h2>
                        <CampoTexto
                        obrigatorio={true}
                        label='Nome da Diretoria'
                        placeholder='Digite o nome da diretoria'
                        valor={nomeDiretoria}
                        aoAlterado={valor => setNomeDiretoria(valor)}
                        />
                    <Botao texto='Criar diretoria' />
                </form>
            </div>    
            )}
        </section>
    )
}


export default Formulario

