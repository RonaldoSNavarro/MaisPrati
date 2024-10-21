// Exemplo de desestruturação de objeto aninhado

const desenvolvedor = {
    nome: 'Ronaldo',
    idade: 37,
    contato: {
      email: 'ronaldo.dev@example.com',
      endereco: {
        cidade: 'Belém',
        estado: 'PA',
        pais: 'Brasil'
      }
    },
    projetos: ['Website', 'App Mobile', 'API']
}

// 1. Desestruture nome e idade diretamente do objeto

const {nome, idade} = desenvolvedor

console.log(nome)
console.log(idade)

// 2. Extraia o email da propriedade contato

const {email} = desenvolvedor.contato
console.log(email)

// 3. Extraia cidade, estado e país do objeto aninhado endereço

const {cidade, estado, pais} = desenvolvedor.contato.endereco
console.log(cidade)
console.log(estado)
console.log(pais)

// 3. Extraia o primeiro e o segundo projeto da lista de projetos

const [primeiro, , terceiro] = desenvolvedor.projetos
console.log(primeiro)
console.log(terceiro)