import { useState } from 'react';
import {AiFillCloseCircle, AiFillEdit} from 'react-icons/ai'
import './Colaborador.css'
import ListaSuspensa from '../ListaSuspensa';
import axios from 'axios';

const Colaborador = ({nome, cargo, imagem ,niveis, email,pronome,contato, corSecundaria, aoDeletar, aoEditar}) => {

    const [editando, setEditando] = useState(false);
    const [nivel, setNivel] = useState(niveis)
    const [dadosEditados, setDadosEditados] = useState({
        nome:nome,
        cargo:cargo,
        nivel:nivel,
        imagem:imagem,
        email:email,
        pronome:pronome,
        contato:contato
    });
    const handleInputChange = (event) => {
        const{name , value} = event.target;
        setDadosEditados({...dadosEditados, [name]: value});
    };
    const handleSubmit = (event) =>{
        event.preventDefault();
        aoEditar(dadosEditados);
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
                <img src={imagem} alt={nome} />
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h6>{pronome}</h6>
                <h5>{cargo}</h5>
                <h5>{nivel}</h5>
                <h6>{contato}</h6>
                <h6>{email}</h6>
            </div>
        </div>
    )

}

export default Colaborador