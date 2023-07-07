import { useState , useEffect  } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Formulario from '../Formulario';
import Rodape from '../Rodape';
import Time from '../Time';


function Cadastro() {

  const [times, setTimes] = useState ([])

  const [niveis, setNiveis] = useState([
    {
      nome: 'Líder'
    },
    {
      nome:'Sênior'
    },
    {
      nome: 'Pleno'
    },
    {
      nome:'Júnior'
    }
  ])

  const [colaboradores , setColaboradores] = useState([])
  const [colaboradorEditando, setColaboradorEditando] = useState(null)
  const navigate  = useNavigate();

  useEffect(() =>{
    const token = localStorage.getItem('token');

    if(!token){
      navigate('/login')
    }
  },[navigate])

  function editarColaborador(nome, nivel) {
    setColaboradores(colaboradores.filter(colaborador => colaborador.nome!== nome || colaborador.nivel !== nivel));
}

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
        niveis={niveis.map(nivel => nivel.nome)}
        aoCadastrar={colaborador => setColaboradores([...colaboradores, colaborador])} />
        {times.map(time => <Time 
        mudarCor={mudarCorDoTime}
        key={time.nome} 
        nome= {time.nome} 
        corPrimaria = {time.corPrimaria} 
        corSecundaria = {time.corSecundaria}
        colaboradores = {colaboradores.filter(colaborador => colaborador.time === time.nome)}
        aoDeletar={deletarColaborador}
        aoEditar = {editarColaborador }
        />)}
      <Rodape />


    </div>
  );
}

export default Cadastro;