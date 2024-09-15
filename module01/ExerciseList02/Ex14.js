// 14. Manipulando Objetos Complexos
// ○ Objetivo: Crie um objeto empresa com uma propriedade departamentos,
// que é um array de objetos. Cada departamento tem um nome e uma lista
// de funcionarios. Use for in e for of para iterar sobre os departamentos
// e seus funcionários, exibindo o nome de cada funcionário junto com o
// departamento ao qual pertence.

let empresa = {
    departamentos: [
        { nome: 'TI', funcionarios: ['João', 'Maria'] },
        { nome: 'RH', funcionarios: ['Ana', 'Paulo'] }
    ]
};

for (let dept in empresa.departamentos) {
    let departamento = empresa.departamentos[dept];
    for (let funcionario of departamento.funcionarios) {
        console.log(`${funcionario} trabalha no departamento de ${departamento.nome}`);
    }
}