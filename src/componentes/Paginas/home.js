import Banner from "../Banner/Banner"
import Rodape from "../Rodape"
import Time from "../Time"
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ListaColaboradores from "../ListaColaboradores";


function Home() {

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
]);

const [colaboradores , setColaboradores] = useState([]);  
function mudarCorDoTime(cor, nome){
    setTimes(times.map(time => {
    if(time.nome === nome){
        time.corSecundaria = cor;
}
    return time;
    })); 
}

return (
    <div>
      <Banner />
      <div className="times">
        {times.map(time => (
          <Time 
            mudarCor={mudarCorDoTime}
            key={time.nome} 
            nome={time.nome} 
            corPrimaria={time.corPrimaria} 
            corSecundaria={time.corSecundaria}
            colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
          />
        ))}
          <ListaColaboradores />

      </div>
      <Rodape />
    </div>
);
}

export default Home;
