import { useState } from 'react';

import { v4 as uuidv4 } from 'uuid';
import Banner from '../Banner/Banner';
import Formulario from '../Formulario';
import Rodape from '../Rodape';
import Time from '../Time';


function Cadastro() {

  const [times, setTimes] = useState ([
    {
      id: uuidv4(),
      nome: 'Diretor Executivo',
      corPrimaria: '#57c278',
      corSecundaria: '#D9F7E9',
    },
    {
      id: uuidv4(),
      nome: 'Diretor',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF',
    },
    {
      id: uuidv4(),
      nome: 'Experiência',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2',
    },
    {
      id: uuidv4(),
      nome: 'Gratuidade',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8',
    },
    {
      id: uuidv4(),
      nome: 'I.M',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5',
    }
  ])

  const [colaboradores , setColaboradores] = useState([])
  
  function deletarColaborador(nome){
    setColaboradores(colaboradores.filter(colaborador => colaborador.nome !== nome))        
  }

  function mudarCorDoTime(cor, nome){
    setTimes(times.map(time => {
      if(time.nome === nome){
        time.corSecundaria = cor;
      }
      return time
    })); 
  }

  function cadastrarTime(novoTime){
    setTimes([...times, {...novoTime, id: uuidv4()}])
  }
  return (
    <div className="App">
      <Banner/>
      <Formulario 
        aoCriarTime={cadastrarTime} 
        times={times.map(time => time.nome)} 
        aoCadastrar={colaborador => setColaboradores([...colaboradores, colaborador])} />
        {times.map(time => <Time 
        mudarCor={mudarCorDoTime}
        key={time.nome} 
        nome= {time.nome} 
        corPrimaria = {time.corPrimaria} 
        corSecundaria = {time.corSecundaria}
        colaboradores = {colaboradores.filter(colaborador => colaborador.time === time.nome)}
        aoDeletar={deletarColaborador}
      />)}
      <Rodape />


    </div>
  );
}

export default Cadastro;