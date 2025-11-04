// CRIE UMA LÓGICA ABAIXO
 const prompt = require("pompt-sync") ()
 let producao = []

 let dias = parseInt(prompt("Quantos dias deseja registrar? "))
 for (let i = 0; i < dias; i++) {
    producao.push(parseInt(prompt(`Digite a quantidade produzida no dia ${i+1}:`)))
 }
 

 let total = 0

 for (let inicio = 0; inicio < producao.length; inicio++){
    total += producao[inicio]
 }

 let media = total / producao.length 

 let maior = producao[0]
 let menor = producao[0]

 for(let maiorOuMenor = 1; maiorOuMenor < producao.length; maiorOuMenor++){
    if(producao[maiorOuMenor] > maior) {
        maior = producao[maiorOuMenor]
    }
    if(producao[maiorOuMenor] < menor) {
        menor = producao[maiorOuMenor] 
    }
 } 
console.log(`
--- RELATÓRIO DE PRODUÇÃO ---
Produções registradas: ${producao}
Total produzido: ${total}
Média diária: ${media}
Maior produção: ${maior} (dia ${producao.indexOf(maior)+1})
Menor produção: ${menor} (dia ${producao.indexOf(menor)+1})
Ordem crescente: ${producao.sort((a, b) => a - b)}
Ordem decrescente:  ${producao.sort((a, b) => b - a)}

 `)

 if (media >= total / 2){
    console.log (`Produção estável!`)
 } else {
    console.log(`Produção abaixo do ideal.`)
 }