import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Colaborador from "../Colaborador";
import './ListaColaboradores.css';

const ListaColaboradores = () => {
  const [colaboradores, setColaboradores] = useState([]);
  const [colaboradoresPorTime, setColaboradoresPorTime] = useState({});
  const [timesPorDiretoria, setTimesPorDiretoria] = useState({});
  const [carregando, setCarregando] = useState(true); // Novo estado para controle de carregamento

  useEffect(() => {
    buscarDados();
  }, []);

  const buscarDados = async () => {
    try {
      const [diretoriasResponse, timesResponse, colaboradoresResponse] = await Promise.all([
        axios.get('http://localhost:3001/diretoria'),
        axios.get('http://localhost:3001/time'),
        axios.get('http://localhost:3001/colaborador')
      ]);

      const diretorias = diretoriasResponse.data;
      const times = timesResponse.data;
      const colaboradores = colaboradoresResponse.data;

      const timesPorDiretoria = {};

      for (const diretoria of diretorias) {
        timesPorDiretoria[diretoria.nome] = times
          .filter(time => time.diretoria_nome === diretoria.nome)
          .map(time => time.nome);
      }

      setTimesPorDiretoria(timesPorDiretoria);
      console.log(timesPorDiretoria);

      const colaboradoresPorTime = {};

      for (const time of times) {
        colaboradoresPorTime[time.nome] = colaboradores.filter(colaborador => colaborador.time === time.nome);
      }
      
      setColaboradoresPorTime(colaboradoresPorTime);
      console.log(colaboradoresPorTime);
      
      setCarregando(false); // Marca o carregamento como concluído
    } catch (error) {
      console.log('Erro ao buscar dados: ', error);
    }
  };

  const aoDeletar = (nome) => {
    axios
      .delete(`http://localhost:3001/colaborador/${nome}`)
      .then(response => {
        console.log(response.data);
        buscarDados();
      })
      .catch(error => {
        console.log('Erro ao deletar colaborador: ', error);
      });
  };

  const editarColaborador = (nome, cargo, nivel, imagem, email, pronome, contato, time) => {
    const colaboradorEditado = {
      nome,
      cargo,
      nivel,
      imagem,
      email,
      pronome,
      contato,
      time
    };
    axios
      .put(`http://localhost:3001/colaborador/${nome}`, colaboradorEditado)
      .then(response => {
        console.log('Colaborador atualizado', response.data);
        buscarDados();
      })
      .catch(error => {
        console.log('Erro ao atualizar colaborador: ', error);
      });
  };

  if (carregando) {
    return <div>Loading...</div>; // Exibe a mensagem de carregamento enquanto os dados estão sendo buscados
  }

  return (
    <div>
      {Object.entries(timesPorDiretoria).map(([diretoria, times]) => (
        <div key={diretoria}>
          <h2>{diretoria}</h2>
          {times.map(time => (
            <div key={time} className="time-container">
              <h3>{time}</h3>
              <div className="cards-container">
                {colaboradoresPorTime[time]?.map(colaborador => (
                  <div key={colaborador.nome} className="card-colaborador">
                    <Colaborador
                      key={colaborador.nome}
                      nome={colaborador.nome}
                      cargo={colaborador.cargo}
                      nivel={colaborador.nivel}
                      imagem={colaborador.imagem}
                      email={colaborador.email}
                      pronome={colaborador.pronome}
                      contato={colaborador.contato}
                      time={colaborador.time}
                      aoDeletar={aoDeletar}
                      aoEditar={editarColaborador}
                      {...colaborador}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ListaColaboradores;
