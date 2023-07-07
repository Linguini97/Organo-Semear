import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Colaborador from "../Colaborador";
import './ListaColaboradores.css'

const ListaColaboradores = () => {
    const [colaboradores, setColaboradores] = useState([]);

    useEffect(()=>{
        buscaColaboradores();
    }, []);

    const buscaColaboradores = () =>{
        axios.get('http://localhost:3001/colaborador')
        .then(response => {
            const colaboradores = response.data;
            setColaboradores(colaboradores);
        })
        .catch(error =>{
            console.log('Erro ao buscar colaboradores: ', error)
        });
    };
    const aoDeletar = (nome) =>{
        axios.delete(`http://localhost:3001/colaborador/${nome}`)
        .then(response =>{
            console.log(response.data);
            buscaColaboradores();
        })
        .catch(error =>{
            console.log('Erro ao deletar colaborador: ',error);
        });
    };
    const editarColaborador = (nome, cargo, nivel, imagem, email, pronome, contato, time) =>{
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
        axios.put(`http://localhost:3001/colaborador/${nome}`, colaboradorEditado)
        .then(response =>{
            console.log('Colaborador atualizado', response.data);
            buscaColaboradores();
        })
        .catch(error =>{
            console.log('Erro ao atualizar colaborador: ', error)
        });
    };
    const [colaboradoresPorTime, setColaboradoresPorTime] = useState({});
    const [timesPorDiretoria, setTimesPorDiretoria] = useState({});

    const buscarDiretorias = () =>{
        axios.get('http://localhost:3001/diretoria')
        .then(response => {
            const diretorias = response.data;

            if(diretorias){
            const timesPorDiretoria = {};
            diretorias.forEach(diretoria =>{
                const times = diretoria.times.map(time => time.nome);
                timesPorDiretoria[diretoria.nome] = times;
            });
            setTimesPorDiretoria(timesPorDiretoria)
        }
        })
        .catch(error => {
            console.log('Erro ao buscar diretorias: ',error);
        });
    };
    useEffect(()=>{
        buscarDiretorias();
    }, []);

    const buscarTimes = () => {
        axios.get('http://localhost:3001/time')
        .then(response =>{
            const times = response.data;
            const colaboradoresPorTime = {};

            times.forEach(time =>{
                const colaboradores = time.colaboradores;
                colaboradoresPorTime[time.nome] = colaboradores;
            });
            setColaboradoresPorTime(colaboradoresPorTime);
        })
        .catch(error =>{
            console.log('Erro ao buscar times: ', error);
        });
    };
    useEffect(() =>{
        buscarTimes()
    },[]);
    return(
        <div>
            {Object.entries(timesPorDiretoria).map(([diretoria, times]) => {
  return (
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
  );
})}

            </div>
);
}
export default ListaColaboradores;
