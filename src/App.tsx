import React from 'react';
import { signup } from './services/axios';
import GlobalStyle from "./styles/global"


function App() {

  const user = {
    name: 'eros',
    email: 'testandoerror@gmail.com',
    nickname: 'apelido',
    password: '123456',
  };

  const testando = async () => {
    let response = await signup(user);
    console.log(response);
  };

  testando();

  return (
    <>
      <GlobalStyle/>
      <h1>Não sei mais nada de React</h1>


    </>





  )
}

export default App;
