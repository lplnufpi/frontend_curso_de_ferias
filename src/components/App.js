import React from 'react';
import '../styles/App.css';

import ItemAcao from './ItemAcao'

function App() {
  return (
    <div className="gameboy">
      <div className="screen-cont">
        <div className="screen">
          <div className="header">Processamento de linguagem Natural</div>
          <div className="animated-text">PLN<div className="copy"></div>
            <ItemAcao title="Analizar Texto" route="/analisar_texto" />
            <ItemAcao title="Cadastrar Categoria" route="/cadastrar_categoria" />
            <ItemAcao title="Incrementar Corpus" route="/incrementar_corpus" />
          </div>
        </div>
      </div>
      <div className="controls-cont">
        <div className="btn-direction">
          <div className="vertical"></div>
          <div className="horizontal"></div>
        </div>
        <div className="btn-AB">  </div>
      </div>
    </div>

  );
}

export default App;
