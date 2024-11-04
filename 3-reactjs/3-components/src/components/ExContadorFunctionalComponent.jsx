// Exercício proposto durante a aula 45 utilizando componente de funcional
// Contador com mensagens de ciclo de vida
// Adicionado um limite máximo que desabilita o botão de incremento quando atingido
// Adicionado um limite mínimo que desabilita o botão de Decremento quando atingido
// Função de alerta para números múltiplos de 5


import { useState, useEffect } from "react";

function ExContadorFunctionalComponent () {
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log("Componente montado")
        return() => {console.log("Componente será desmontado")}
    }, [])

    useEffect(() => {
        console.log("Componente atualizado!")
    }, [count])

    const increment = () => {
        setCount(count + 1)
        if(count % 5 === 0) {
            alert("Número multiplo de 5!")
        }
    }

    const decrement = () => {
        setCount(count - 1)
    }

    const reset = () => {
        setCount(0)
    }

    return (
        <div>
            <p>Contagem: {count}</p>
        
        <button onClick={increment} disabled={ count >= 23}>Incrementar</button>
        <button onClick={decrement} disabled={ count === 0 }>Decrementar</button>
        <button onClick={reset}>Reset</button>
        </div>
    )

}

export default ExContadorFunctionalComponent