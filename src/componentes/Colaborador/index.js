import { useState, useEffect } from 'react';
import { AiFillCloseCircle, AiFillEdit } from 'react-icons/ai';
import './Colaborador.css';
import ListaSuspensa from '../ListaSuspensa';

const Colaborador = ({
  niveis,
  corSecundaria,
  aoDeletar,
  aoEditar,
  nome,
  cargo,
  nivel,
  imagem,
  email,
  pronome,
  contato,
  time
}) => {
  const [editando, setEditando] = useState(false);
  const [dadosEditados, setDadosEditados] = useState({
    nome,
    cargo,
    nivel,
    imagem,
    email,
    pronome,
    contato,
    time
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setDadosEditados({ ...dadosEditados, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    aoEditar(
      dadosEditados.nome,
      dadosEditados.cargo,
      dadosEditados.nivel,
      dadosEditados.imagem,
      dadosEditados.email,
      dadosEditados.pronome,
      dadosEditados.contato,
      dadosEditados.time
    );
    setEditando(false);
  };

  useEffect(() => {
    setDadosEditados({
      nome,
      cargo,
      nivel,
      imagem,
      email,
      pronome,
      contato,
      time
    });
  }, [nome, cargo, nivel, imagem, email, pronome, contato, time]);

  if (editando) {
    return (
      <div className="colaborador">
        <form>
          <div className="cabecalho" style={{ backgroundColor: corSecundaria }}>
            <img src={dadosEditados.imagem} alt={dadosEditados.nome} />
          </div>
          <div className="editar">
            <input
              type="text"
              name="nome"
              value={dadosEditados.nome}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="cargo"
              value={dadosEditados.cargo}
              onChange={handleInputChange}
            />
            <ListaSuspensa
              obrigatorio={true}
              items={niveis}
              valor={dadosEditados.nivel}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="imagem"
              value={dadosEditados.imagem}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="email"
              value={dadosEditados.email}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="pronome"
              value={dadosEditados.pronome}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="contato"
              value={dadosEditados.contato}
              onChange={handleInputChange}
            />
            <button onClick={handleSubmit}>Salvar</button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="colaborador">
      <div className="acoes">
        <AiFillCloseCircle size={25} className="deletar" onClick={() => aoDeletar(nome)} />
        <AiFillEdit size={25} className="editar" onClick={() => setEditando(true)} />
      </div>
      <div className="cabecalho" style={{ backgroundColor: corSecundaria }}>
        <img src={dadosEditados.imagem} alt={dadosEditados.nome} />
      </div>
      <div className="rodape">
        <h4>{dadosEditados.nome}</h4>
        <h6>{dadosEditados.pronome}</h6>
        <h5>{dadosEditados.cargo}</h5>
        <h5>{dadosEditados.nivel}</h5>
        <h6>{dadosEditados.contato}</h6>
        <h6>{dadosEditados.email}</h6>
      </div>
    </div>
  );
};

export default Colaborador;
