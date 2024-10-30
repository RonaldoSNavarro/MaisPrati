/*
Objetivo: Calcular a média das notas dos alunos de um professor e verificar se está
acimda da média de aprovação. Use um loop for...in para iterar sobre as propriedades
dentro do professor.grades.
Imprima se o professor está acimda da média de aprovação (considerando 6.0 como média).
*/

// const professor = {
//     name: "Tony Stark",
//     subject: "Physics",
//     grades: {
//         student1: 10.0,
//         student2: 8.0,
//         student3: 7.0
//     }
// }

// let sumGrades = 0
// let numberOfStudents = 0

// for(let student in professor.grades) {
//     sumGrades += professor.grades[student]
//     numberOfStudents++
// }

// let average = sumGrades / numberOfStudents

// console.log(`A nota média da turma é: ${average.toFixed(2)}`)
// console.log(average >= 6 ? `${professor.name} está acima da média.`
//     : `${professor.name} está abaixo da média`
// )

/*
Objetivo: Verificar e listar livros publicados antes de 2000.
Use um loop for...of para iterar sobre o array biblioteca.
Imprima o título e o ano dos livros que atendem a essa condição.
*/

// const library = [
//     {title: "O Hpbbit", author: "J. R. R. Tolkien", year: 1925},
//     {title: "Harry Potter: O Prisioneiro de Azkaban", author: "J. K. Rolling", year: 1999},
//     {title: "Nárnia", author: "C. S. Lweis", year: 2010}
// ]

// for(let book of library){
//     if(book.year < 2000){
//         console.log(`O livro ${book.title}, escrito por ${book.author}, foi publicado em ${book.year}`)
//     }
// }

/*
Objetivo: Contar a quantidade de filmes por gênero.
Use o método forEach para iterar sobre o array filmes.
Para cada filme, verifique se o gênero já existe no objeto de contagem.
Se existir, incremente a contagem; se não, adicione o gênero ao objeto
com a contagem inicial de 1.
*/

const movies = [
    {title: "Tropa de Elite", genre: "Ação"},
    {title: "Top Gun", genre: "Ação"},
    {title: "Interestelar", genre: "Sci-Fi"},
    {title: "O Senhor dos Anéis", genre: "Aventura"},
    {title: "O Poderoso Chefão", genre: "Máfia"},
    {title: "Vingadores Ultimato", genre: "Heróis"},
    {title: "Deadpool & Wolverine", genre: "Heróis"}
]

let genreCount = {}

movies.forEach(movie => {
    if(genreCount[movie.genre]){
        genreCount[movie.genre]++
    } else {
        genreCount[movie.genre] = 1
    }
})

for(let genre in genreCount){
    console.log(`Existem ${genreCount[genre]} filmes do gênero ${genre}`)
}