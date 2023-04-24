import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';
import { v4 as uuidv4 } from 'uuid';
import Routes from './componentes/Paginas/routes';
import React from 'react';
import AppRoutes from './componentes/Paginas/routes';

function App() {
  return (
      <AppRoutes/>
  );
}

export default App
