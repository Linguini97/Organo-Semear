import {AiFillCloseCircle} from 'react-icons/ai'
import './Colaborador.css'

const Colaborador = ({nome, cargo, imagem, email,pronome,contato, corSecundaria, aoDeletar}) => {

    return(
        <div className='colaborador'>
            <AiFillCloseCircle 
                size={25} 
                className='deletar' 
                onClick={() => aoDeletar(nome)}
            />
            <div className='cabecalho' style={{backgroundColor: corSecundaria}} > 
                <img src={imagem} alt={nome} />
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h6>{pronome}</h6>
                <h5>{cargo}</h5>
                <h6>{contato}</h6>
                <h6>{email}</h6>
            </div>
        </div>
    )

}

export default Colaborador