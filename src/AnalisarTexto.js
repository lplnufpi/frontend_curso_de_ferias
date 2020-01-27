import React, { Component } from 'react';
import './App.css';
import axios from 'axios'


export default class AnalisarTexto extends Component {

  constructor() {
    super();
    this.state = {
      analise: [],
      flag: false
    }
  }

  analisarTexto = () => {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const analise = res.data;
        this.setState({ analise, flag:true });
      })
  }

  render() {
    if (!this.state.flag) {
      return (
        <div className="gameboy">
          <div className="screen-cont">
            <div className="screen">
              <div className="header">Processamento de linguagem Natural</div>
              <div className="animated-text">PLN<div className="copy"></div>
                <div className="form-analise">
                  <textarea rows="10" placeholder="Cole aqui o texto que você deseja analisar"></textarea>
                  <br />
                  <a href="#" onClick={() => { this.analisarTexto() }}>Analisar</a>
                </div>
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
    }else {
      return (
        <div className="gameboy">
          <div className="screen-cont">
            <div className="screen">
              <div className="header">Processamento de linguagem Natural</div>
              <div className="animated-text">PLN<div className="copy"></div>
                <div className="form-analise">
                  {this.state.analise.map(item =>{
                    return item.name
                  })}
                  <br/>
                  <a href="/" >Home</a>
                </div>
                
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

  }
}
