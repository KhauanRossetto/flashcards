import React, { useState } from 'react';
import NavBar from './Navbar';
import Pergunta from './Pergunta';
import Rodape from './Rodape';

function App() {
  const perguntas = [
    { pergunta: 'O que é JSX?', resposta: 'Uma extensão de linguagem do JavaScript' },
    { pergunta: 'O React é __', resposta: 'uma biblioteca JavaScript para construção de interfaces' },
    { pergunta: 'Componentes devem iniciar com __', resposta: 'letra maiúscula' },
    { pergunta: 'Podemos colocar __ dentro do JSX', resposta: 'expressões' },
    { pergunta: 'O ReactDOM nos ajuda __', resposta: 'interagindo com a DOM para colocar componentes React na mesma' },
    { pergunta: 'Usamos o npm para __', resposta: 'gerenciar os pacotes necessários e suas dependências' },
    { pergunta: 'Usamos props para __', resposta: 'passar diferentes informações para componentes' },
    { pergunta: 'Usamos estado (state) para __', resposta: 'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente' },
  ];

  const [respondidas, setRespondidas] = useState(0);

  const incrementarRespondidas = () => {
    setRespondidas((prev) => prev + 1);
  };

  return (
    <div className="conteudo">
      <NavBar />
      {perguntas.map((item, index) => (
        <Pergunta
          key={index}
          numero={index + 1}
          pergunta={item.pergunta}
          resposta={item.resposta}
          onResponder={incrementarRespondidas}
        />
      ))}
      <Rodape total={perguntas.length} concluidas={respondidas} />
    </div>
  );
}

export default App;