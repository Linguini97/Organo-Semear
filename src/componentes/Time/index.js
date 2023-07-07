import Colaborador from '../Colaborador'
import './Time.css'

const Time = ({ colaboradores, nome, corPrimaria, corSecundaria, aoDeletar, mudarCor, aoEditar }) => {

    return (
        (colaboradores.length) > 0 ?
            <section className='time' style={{ backgroundColor: corSecundaria }}>
                <input onChange={evento =>mudarCor(evento.target.value, nome)} value={corSecundaria} type='color' className='input-color' />

                <h3 style={{ borderColor: corPrimaria }}>{nome}</h3>
                <div className='colaboradores'>
                    {colaboradores.map(colaborador => {
                        return <Colaborador corDeFundo={corPrimaria} key={colaborador.nome} nome={colaborador.nome} pronome={colaborador.pronome} contato={colaborador.contato} cargo={colaborador.cargo} email={colaborador.email} imagem={colaborador.imagem} aoDeletar={aoDeletar} aoEditar={aoEditar}/>
                    })}
                </div>
            </section>
            : ''
    )
}

export default Time
