import React, { useState } from 'react';

function Pergunta({ numero, pergunta, resposta, onResponder }) {
  const [etapa, setEtapa] = useState(1);
  const [respostaFinal, setRespostaFinal] = useState(null);
  const [respondido, setRespondido] = useState(false);

  const avancarEtapa = () => {
    if (etapa < 3 && respostaFinal === null) {
      setEtapa(etapa + 1);
    }
  };

  const finalizarResposta = (tipo) => {
    if (!respondido) {
      setRespondido(true);
      onResponder();
    }
    setRespostaFinal(tipo);
    setEtapa(1);
  };

  const getClasseTextoFinal = () => {
    if (respostaFinal === 'erro') return 'texto-pergunta texto-vermelho';
    if (respostaFinal === 'quase') return 'texto-pergunta texto-laranja';
    if (respostaFinal === 'acerto') return 'texto-pergunta texto-verde';
    return 'texto-pergunta';
  };

  const getIconeFinal = () => {
    if (respostaFinal === 'erro') return 'close-circle-outline';
    if (respostaFinal === 'quase') return 'help-circle-outline';
    if (respostaFinal === 'acerto') return 'checkmark-circle-outline';
    return 'play-outline';
  };

  const iconeClicavel = etapa !== 1 || respostaFinal === null;

  return (
    <div className={
      etapa === 1
        ? 'caixa-pergunta'
        : etapa === 2
        ? 'bloco-resposta'
        : 'bloco-resposta-grande'
    }>
      {etapa === 3 ? (
        <>
          <p className="texto-topo">{resposta}</p>
          <div className="botoes-resposta">
            <button className="botao vermelho" onClick={() => finalizarResposta('erro')}>Não lembrei</button>
            <button className="botao laranja" onClick={() => finalizarResposta('quase')}>Quase não lembrei</button>
            <button className="botao verde" onClick={() => finalizarResposta('acerto')}>Zap!</button>
          </div>
        </>
      ) : (
        <>
          <span className={getClasseTextoFinal()}>
            {etapa === 2 ? pergunta : `Pergunta ${numero}`}
          </span>
          <button
            className={etapa === 2 ? 'icone-inferior' : 'botao-icon'}
            onClick={iconeClicavel ? avancarEtapa : undefined}
            disabled={!iconeClicavel}
          >
            <ion-icon name={etapa === 2 ? 'sync-outline' : getIconeFinal()}></ion-icon>
          </button>
        </>
      )}
    </div>
  );
}

export default Pergunta;