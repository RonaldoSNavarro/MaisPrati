// 5. Calculando Valores em Arrays de Objetos
// ○ Objetivo: Crie um array de objetos alunos, cada um com propriedades
// nome, nota1, e nota2. Use for of para calcular a média das notas de cada
// aluno e exibir o nome do aluno junto com sua média.

let alunos = [
    { nome: 'Ana', nota1: 8, nota2: 7 },
    { nome: 'Bruno', nota1: 6, nota2: 5 },
    { nome: 'Carla', nota1: 9, nota2: 8 }
];

for (let aluno of alunos) {
    let media = (aluno.nota1 + aluno.nota2) / 2;
    console.log(`${aluno.nome} tem média ${media}`);
}