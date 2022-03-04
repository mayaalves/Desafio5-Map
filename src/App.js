import React, { Component } from "react";

class App extends Component {
  state = {
    Cadastro: [
      {
        nome: "Bruna",
        idade: 25,
        telefone: "21 873465150"
      },
      {
        nome: "Rafael",
        idade: 40,
        telefone: "21 999465003"
      },
      {
        nome: "Maria Luisa",
        idade: 21,
        telefone: "21 889019754"
      },
      {
        nome: "Pedro",
        idade: 30,
        telefone: "21 877008860"
      },
      {
        nome: "Otavio",
        idade: 53,
        telefone: "21 877769029"
      },
      {
        nome: "Renato",
        idade: 33,
        telefone: "21 987865539"
      },
      {
        nome: "Mariana",
        idade: 19,
        telefone: "21 897465789"
      }
    ]
  };

  render() {
    return (
      <div>
        <h1>Cadastro de funcionários</h1>
        {this.state.Cadastro.map((item) => (
          <div>
            <p>Nome: {item.nome}</p>
            <p>Idade: {item.idade}</p>
            <p>Cargo em que atua: {item.telefone}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
