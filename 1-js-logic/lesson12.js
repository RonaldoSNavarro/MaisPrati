let serie = {
    nome: "The Boys",
    genero: ["Ação", "Paródia", "Heróis"],
    nrTemporadas: 4,
    status: "Em andamento",
    classificacao: 18,
    nrEpisodios: {
        temp1: 10,
        temp2: 10,
        temp3: 15

    },

    mostrarCaracteristicas: function(){
        return("O nome da série é: " + this.nome + " E sua classificação é +" + this.classificacao)
        
    }
}

// console.log(serie.mostrarCaracteristicas())

let livro = {
    titulo: "O Hobbit",
    autor: "J. R. R. Tolkien",
    year: 1925,
    mostrarCaracteristicas: function() {
        return(this.titulo + " foir escrito por " + this.autor)
    }
}

// console.log(livro.mostrarCaracteristicas())

let carro = {
    nome: "Herby",
    modelo: "Fusca",
    velocidadeMaxima: 500,
    ano: 1953,

    acelerar: function() {
        return("Acelerando com o pé no porão")
    }
}

// console.log(carro)
// console.log(carro.acelerar())

let motor = "1000"
let nome = "Bmw s1000rr"
let tipo = "esportiva"

let moto = {
    nome: nome,
    tipo: tipo,
    motor: motor
}

// console.log(moto)

let atleta = {
    nome: "Rayssa Leal",
    esporte: "Skate street",
    idade: 16
}

atleta.nacionalidade = "Brasil"
atleta.medalhas = {
    ouro: 10,
    prata: 1,
    bronze: 1
}

atleta.celebrarVitoria = () => {return "Ganhei!"}

// console.log(atleta)
// console.log(atleta.celebrarVitoria())

let obj1 = {
    nome: "Bruce",
    profissao: "Batman"
}

let obj2 = obj1

obj2.companheiro = "Robin"

// console.log(obj1)
// console.log(obj2)

function computador(processador, gpu, ram, armazenamento) {
    this.processador = processador
    this.gpu = gpu
    this.ram = ram
    this.armazenamento = armazenamento

    this.turnOn = function() {
        console.log(`O ${this.processador} está funcionando!`)
    }

    this.mostrarEspecificacoes = function() {
        return(`processador: ${this.processador}
            gpu: ${this.gpu}
            ram: ${this.ram}
            armazenamento: ${this.armazenamento}`)
    }
}

//let pc = new computador("Pentium", "4090", "16GB", "500GB SSD")
// console.log(pc.mostrarEspecificacoes())

function jogos(titulo, genero, anoLancamento, empresa, jogar) {
    return {
        titulo,
        genero,
        anoLancamento,
        empresa,
        jogar
    }
}

let jogo1 = jogos("Final Fantasy", "RPG", "1997", "Square Soft", () => console.log("Jogando"))

// console.log(jogo1.jogar())

// for in, for of, forEach

let carros = {
    modelo: "Buggati",
    ano: 2010,
    cor: "Preto"
}

for(let key in carros) {
    //console.log(`${key}: ${carros}`)
}

const jogadores = ['Pelé', 'Cr7', 'Messi']

for(let jogador of jogadores) {
    console.log(jogador)
}