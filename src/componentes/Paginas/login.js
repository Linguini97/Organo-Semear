import Banner from '../Banner/Banner';
import FormularioLogin from '../Formulario-Login';
import Rodape from '../Rodape';
import { useHistory } from 'react-router-dom';


function Login() {
  return (
    <div className="App">
      <Banner/>
      <FormularioLogin />
      <Rodape />


    </div>
  );
}

export default Login;