// CRIE UMA LÓGICA ABAIXO
let filme1 = {titulo: "A Árvore da Vida", genero: "Drama / Filosofia", ano: 2011, avaliacao: 10}
let filme2 = {titulo: "Clube da Luta", genero: "Drama / Existencialismo", ano: 1999, avaliacao: 9}
let filme3 = {titulo: "Sr. Ninguém", genero: "Ficção / Filosofia", ano: 2009, avaliacao: 10}
let filme4 = {titulo: "Her", genero: "Drama / Existencialismo", ano: 2013, avaliacao: 8}
let filme5 = {titulo: "Brilho Eterno de uma Mente Sem Lembranças", genero: "Romance / Reflexão", ano: 2004, avaliacao: 10}
let filme6 = {titulo: "Matrix", genero: "Ficção / Filosofia", ano: 1999, avaliacao: 10}
let filme7 = {titulo: "A Chegada", genero: "Ficção / Existencial", ano: 2016, avaliacao: 9}
let filme8 = {titulo: "O Show de Truman", genero: "Drama / Existencial", ano: 1998, avaliacao: 10}
let filme9 = {titulo: "Donnie Darko", genero: "Suspense / Existencial", ano: 2001, avaliacao: 9}
let filme10 = {titulo: "Inland Empire", genero: "Surrealismo / Filosofia", ano: 2006, avaliacao: 8}

const biblioteca = {filme1, filme2, filme3, filme4, filme5, filme6, filme7, filme8, filme9, filme10}

const notasLista = [
    filme1.avaliacao, filme2.avaliacao, filme3.avaliacao, filme4.avaliacao, filme5.avaliacao,
    filme6.avaliacao, filme7.avaliacao, filme8.avaliacao, filme9.avaliacao, filme10.avaliacao
]

let maiorNotaEncontrada = notasLista[0]

for(let indice = 1; indice < notasLista.length; indice++){
    if(notasLista[indice] > maiorNotaEncontrada){
        maiorNotaEncontrada = notasLista[indice]
    }
}

let posicaoMelhorFilme = notasLista.indexOf(maiorNotaEncontrada) + 1

let somaTotal = notasLista.reduce((acumulador, atual) => acumulador + atual, 0)

let mediaGeral = somaTotal / notasLista.length

console.log(`
    === Catálogo de Filmes ===
    1. ${filme1.titulo} - ${filme1.genero}
    2. ${filme2.titulo} - ${filme2.genero}
    3. ${filme3.titulo} - ${filme3.genero}
    4. ${filme4.titulo} - ${filme4.genero}
    5. ${filme5.titulo} - ${filme5.genero}
    6. ${filme6.titulo} - ${filme6.genero}
    7. ${filme7.titulo} - ${filme7.genero}
    8. ${filme8.titulo} - ${filme8.genero}
    9. ${filme9.titulo} - ${filme9.genero}
    10. ${filme10.titulo} - ${filme10.genero}

    Filme mais bem avaliado:
    ${biblioteca[`filme${posicaoMelhorFilme}`].titulo} (${maiorNotaEncontrada})

    Média geral das avaliações: ${mediaGeral}
`)
// === NÃO MODIFIQUE OU ADICIONE NADA ABAIXO ============
module.exports = { filme1, filme2, filme3, filme4, filme5, filme6, filme7, filme8, filme9, filme10 }