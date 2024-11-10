// Exercício: Simulador de mudança de cores automática

// Objetivo: Criar um componente que muda a cor do plano de fundo a cada
// 2 segundos usando o useEffect. A cor deve ser escolhida aleatoriamente, e o
// usuário deve poder iniciar e parar essa mudanã de cores com um botão.

import { useEffect, useState } from "react";

function ColorSimulator() {
    const [color, setColor] = useState("#FFFFFF");
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let interval;
        if (isRunning) {
            interval = setInterval(() => {
                const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
                setColor(randomColor);
            }, 2000);
        }

        return () => clearInterval(interval);
    }, [isRunning]);

    return (
        <div style={{ backgroundColor: color, height: "100vh" }}>
            <button onClick={() => setIsRunning(!isRunning)}>
                {isRunning ? "Parar" : "Iniciar"}
            </button>
        </div>
    );
}

export default ColorSimulator;