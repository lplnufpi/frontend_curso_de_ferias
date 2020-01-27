import React, { Component } from 'react';
import '../styles/App.css';

class IncrementarCorpus extends Component {

  constructor() {
    super();
    this.state = {
      categories: ["Computação", "Enfermagem", "Letras"]
    }
  }

  handleSubmit = event => {
    event.preventDefault()

    console.log("PAS")
  }

  render() {
    return (
      <div className="gameboy">
        <div className="screen-cont">
          <div className="screen">
            <div className="header">Processamento de linguagem Natural</div>
            <div className="animated-text">PLN<div className="copy"></div>
              <form onSubmit={this.handleSubmit}>
                <label>Escolha uma categoria</label>
                <select>
                  {this.state.categories.map((cat, key) => {
                    return <option key={key}>{cat}</option>
                  })}
                </select>
                <br />
                <label>Cole o novo corpus</label>
                <br />
                <textarea rows="6" placeholder="blablabla..."></textarea>
                <button type="submit">Incrementar</button>
              </form>
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
}

export default IncrementarCorpus;
