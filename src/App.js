import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';

function App() {

  const times = [
    {
      nome: 'Diretor Executivo',
      corPrimaria: '#57c278',
      corSecundaria: '#D9F7E9',
    },
    {
      nome: 'Diretor',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF',
    },
    {
      nome: 'Experiência',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2',
    },
    {
      nome: 'Gratuidade',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8',
    },
    {
      nome: 'I.M',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5',
    }
  ]

  const [colaboradores , setColaboradores] = useState([])
  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner/>
      <Formulario times ={times.map(time => time.nome)} aoColaboradorCadastrado ={colaborador => aoNovoColaboradorAdicionado(colaborador)} />
      {times.map(time => <Time 
      key={time.nome} 
      nome= {time.nome} 
      corPrimaria = {time.corPrimaria} 
      corSecundaria = {time.corSecundaria}
      colaboradores = {colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />)}


    </div>
  );
}

export default App;
