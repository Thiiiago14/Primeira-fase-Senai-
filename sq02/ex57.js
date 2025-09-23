
let diarias
let valorPorDia
let totalBruto , totalLiquido
let desconto10 , desconto15 , multa=150

diarias = Number(prompt("Quantos dias:"))
if(diarias <=5){
valorPorDia = 100
}else if(diarias <=10){
    valorPorDia = 90
}else{
    valorPorDia = 80
}

totalBruto = diarias * valorPorDia
console.log (totalBruto)

desconto10 = totalBruto * 10/100
desconto15 = totalBruto * 15/100


totalLiquido = totalBruto - (desconto10 + desconto15) + multa


alert("Numero de dias :" + diarias + 
    "\nvalor por diaria: R$" + valorPorDia + 
    "\ntotal bruto: R$" + totalBruto + 
    "\nDesconto especial: R$" + desconto10 + 
    "\nDesconto convênio: R$" + desconto15 + 
    "\nMulta: R$" + multa + "\n=========" + 
    "\ntotal a pagar: R$" + totalLiquido)
