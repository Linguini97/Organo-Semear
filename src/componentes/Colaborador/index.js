    import { useState, useEffect  } from 'react';
    import {AiFillCloseCircle, AiFillEdit} from 'react-icons/ai'
    import './Colaborador.css'
    import ListaSuspensa from '../ListaSuspensa';
    import axios from 'axios';
    

    const Colaborador = (niveis, corSecundaria, aoDeletar, aoEditar) => {

        const [editando, setEditando] = useState(false);
        const [nivel, setNivel] = useState(niveis);
        const [nome, setNome] = useState([]);
        const [cargo, setCargo] = useState([]);
        const [imagem, setImagem] = useState([]);
        const [email, setEmail] = useState([]);
        const [pronome, setPronome] = useState([]);
        const [contato, setContato] = useState([]);
        const [time, setTime] = useState([]);

        const [colaboradores, setColaboradores] = useState([]);
        const [dadosEditados, setDadosEditados] = useState({
            nome:nome,
            cargo:cargo,
            nivel:nivel,
            imagem:imagem,
            email:email,
            pronome:pronome,
            contato:contato
        });


        const buscaColaboradores = () =>{
            axios.get('http://localhost:3001/colaborador').then(response =>{
                const colaboradores = response.data;

                colaboradores.forEach(colaborador => {
                    const {nome, cargo, nivel,imagem,email,pronome,contato} = colaborador;
                    const nomeColaborador = nome;
                    const cargoColaborador = cargo;
                    const nivelColaborador = nivel;
                    const imagemColaborador = imagem;
                    const emailColaborador = email;
                    const pronomeColaborador = pronome;
                    const contatoColaborador = contato
                })
            })
            .catch(error => {
                console.log('Erro ao buscar colaborador: ', error)
            });
        };
        useEffect(()=>{
            buscaColaboradores();
        },[]);
        const handleInputChange = (event) => {
            const{name , value} = event.target;
            setDadosEditados({...dadosEditados, [name]: value});
        };
        const handleSubmit = (event) =>{
            event.preventDefault();
            aoEditar(nome, cargo, nivel, imagem, email, pronome, contato, time);
            setEditando(false);

        };
        if(editando){
            return(
                <div className='colaborador'>
                    <form>
                        <div className='cabecalho' style={{backgroundColor: corSecundaria}}>
                            <img src={imagem} alt={nome}/>
                        </div>
                        <div className='editar'>
                            <input type='text' name='nome' value={dadosEditados.nome} onChange={handleInputChange}/>
                            <input type='text' name='cargo' value={dadosEditados.cargo} onChange={handleInputChange}/>
                            <ListaSuspensa 
                                obrigatorio={true}
                                items={niveis} 
                                valor={nivel}
                                onChange={handleInputChange}/>
                            <input type='text' name='nivel' value={dadosEditados.nivel} onChange={handleInputChange}/>
                            <input type='text' name='imagem' value={dadosEditados.imagem} onChange={handleInputChange}/>
                            <input type='text' name='email' value={dadosEditados.email} onChange={handleInputChange}/>
                            <input type='text' name='pronome' value={dadosEditados.pronome} onChange={handleInputChange}/>
                            <input type='text' name='contato' value={dadosEditados.contato} onChange={handleInputChange}/>
                            <button onClick={handleSubmit}>Salvar</button>
                        </div>
                    </form>
                </div>
            )
        }
        if(colaboradores === null){
            return <div>Caregando...</div>
        }
        
        const colaborador = colaboradores.find((colab) => colab.nome === nome);

        return(
            <div className='colaborador'>
                <div className='acoes'>
                    <AiFillCloseCircle 
                        size={25} 
                        className='deletar' 
                        onClick={() => aoDeletar(nome)}
                    />
                    <AiFillEdit
                        size={25} 
                        className='editar' 
                        onClick={() => setEditando(true)}
                    />
                </div>
                <div className='cabecalho' style={{backgroundColor: corSecundaria}} > 
                    <img src={colaborador.imagem} alt={colaborador.nome} />
                </div>
                <div className='rodape'>
                    <h4>{colaborador.nome}</h4>
                    <h6>{colaborador.pronome}</h6>
                    <h5>{colaborador.cargo}</h5>
                    <h5>{colaborador.nivel}</h5>
                    <h6>{colaborador.contato}</h6>
                    <h6>{colaborador.email}</h6>
                </div>
            </div>
        )

    }

    export default Colaborador

