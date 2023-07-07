import { useState , useEffect  } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Formulario from '../Formulario';
import Rodape from '../Rodape';
import Time from '../Time';
import axios from 'axios';


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
  const [nomesTimes, setNomesTimes] = useState([])
  const [colaboradorEditando, setColaboradorEditando] = useState(null)
  const navigate  = useNavigate();

  useEffect(() =>{
    const token = localStorage.getItem('token');

    if(!token){
      navigate('/login')
    }
  },[navigate])

  const buscarTimes = () =>{
    axios.get('http://localhost:3001/time').then(response => {
        const nomes = response.data.map(time => time.nome);
        setNomesTimes(nomes);            
    })
    .catch(error => {
        console.log('Erro ao buscar times: ', error);
    });
};
useEffect(() => {
    buscarTimes();
}, []);    
const buscaColaboradores = () =>{
  axios.get('http://localhost:3001/colaborador').then(response =>{
      const colaboradores = response.data;

      colaboradores.forEach(colaborador => {
          const {nome, cargo, nivel,imagem,email,pronome,contato,time} = colaborador;
          const nomeColaborador = nome;
          const cargoColaborador = cargo;
          const nivelColaborador = nivel;
          const imagemColaborador = imagem;
          const emailColaborador = email;
          const pronomeColaborador = pronome;
          const contatoColaborador = contato;
          const timeColaborador = time;

      })
  })
  .catch(error => {
      console.log('Erro ao buscar colaborador: ', error)
  });
};
useEffect(()=>{
  buscaColaboradores();
},[]);

  function editarColaborador(nome, cargo, nivel,imagem,email,pronome,contato,time) {
    setColaboradorEditando(nome);
    const colaboradorEditado = {
      nome: nome,
      cargo: cargo,
      nivel: nivel,
      imagem: imagem,
      email: email,
      pronome: pronome,
      contato: contato,
      time:time
    };
    axios.put(`http://localhost:3001/colaborador/${nome}`, colaboradorEditado)
    .then(response =>{
      console.log('Colaborado atualizado: ',response.data);
      const colaboradoresAtualizados = colaboradores.map(colaborador =>{
        if(colaborador.nome === nome){
          return{
          ...colaborador,
          cargo:cargo,
          nivel:nivel,
          imagem:imagem,
          email: email,
          pronome: pronome,
          contato:contato,
          time:time
          };
        }else{
          return colaborador;
          }
        });
        setColaboradores(colaboradoresAtualizados)
      }).catch(error=>{
        console.log('Erro ao atualizar colaborador: ',error)
      });

      }


  function deletarColaborador(nome){
    axios.delete(`http://localhost:3001/colaborador/${nome}`).then(response =>{
      console.log(response.data);
    })
    .catch(error =>{
      console.log(error)
    })
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
        niveis={niveis.map(nivel => nivel.nome)}
        aoDeletar={deletarColaborador}
        aoEditar = {editarColaborador }
        />)
      <Rodape />


    </div>
  );
}

export default Cadastro;