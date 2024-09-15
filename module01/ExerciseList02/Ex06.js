// 6. Filtrando Arrays de Objetos
// ○ Objetivo: Crie um array de objetos funcionarios, onde cada objeto
// contém informações como nome, cargo, e salario. Use for of para filtrar
// e exibir apenas os funcionários cujo salário seja maior que um valor
// específico.

let funcionarios = [
    { nome: 'Pedro', cargo: 'Desenvolvedor', salario: 5000 },
    { nome: 'Luana', cargo: 'Designer', salario: 4000 },
    { nome: 'Rafael', cargo: 'Gerente', salario: 7000 }
];

let salarioMinimo = 4500;

for (let funcionario of funcionarios) {
    if (funcionario.salario > salarioMinimo) {
        console.log(`${funcionario.nome}, ${funcionario.cargo}, Salário: ${funcionario.salario}`);
    }
}