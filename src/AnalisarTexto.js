import React from 'react';
import './App.css';

function AnalisarTexto() {
  return (
    <div className="gameboy">
      <div className="screen-cont">
        <div className="screen">
          <div className="header">Processamento de linguagem Natural</div>
          <div className="animated-text">PLN<div className="copy"></div>
            <form className="form-analise">
              <textarea rows="10" placeholder="Cole aqui o texto que você deseja analisar"></textarea>
              <br/>
              <input type='submit'></input>
            </form>
          </div>
        </div>
      </div>
      <div className="controls-cont">
        <div className="btn-direction">
          <div className="vertical"></div>
          <div className="horizontal"></div>
        </div>
        <div className="btn-AB"></div>
      </div>
    </div>
  );
}

export default AnalisarTexto;
