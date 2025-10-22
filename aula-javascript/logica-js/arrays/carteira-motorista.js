const prompt = require("prompt-sync")()

const idade = parseFloat(prompt("Digite sua idade: "))
const CNH = parseFloat(prompt("Digite 1 se tem CNH, ou 0 se não: "))

if(idade >= 18 && CNH === 1){
    console.log("Aprovado para cnh")
}else
    console.log("Reprovado para ter cnh")
    