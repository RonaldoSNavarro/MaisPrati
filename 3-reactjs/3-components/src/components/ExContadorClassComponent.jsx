// Exercício proposto durante a aula 45 utilizando componente de classe
// Contador com mensagens de ciclo de vida
// Adicionado um limite máximo que desabilita o botão de incremento quando atingido
// Adicionado um limite mínimo que desabilita o botão de Decremento quando atingido
// Função de alerta para números múltiplos de 5

import { Component } from "react";

class ExContadorClassComponent extends Component {
    constructor(props) {
        super(props)
        this.state = { count: 0}
    }

    componentDidMount() {
        console.log("Componente montado!")
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("Componente atualizado! Propriedados e estados anteriores: " + prevProps, prevState)
    }

    componentWillUnmount(){
        console.log("O componente será desmontado!")
    }

    increment = () => {
        this.setState({ count: this.state.count + 1})
        if(this.state.count % 5 === 0){
            alert("Número multiplo de 5!")
        }
    }

    decrement = () => {
        if(this.state.count > 0){
            this.setState({ count: this.state.count - 1})
        }   
    }

    reset = () => {
        this.setState({ count: 0})
    }

    render() {
        return(
            <div>
                <p>Contagem: {this.state.count}</p>
                <button onClick={this.increment} disabled={this.state.count >= 10}>Incrementar</button>
                <button onClick={this.decrement} disabled={this.state.count === 0}>Decrementar</button>
                <button onClick={this.reset}>Resetar</button>
            </div>
        )

    }
}

export default ExContadorClassComponent