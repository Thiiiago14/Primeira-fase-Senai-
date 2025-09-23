let idade 
idade = Number(prompt("Digite sua idade"))
if(idade <15){
    alert("Não pode votar!")
}else if(idade ==16 || idade ==17){
    alert("voto facultativo")
}else if(idade >= 18 && idade<=65){
    alert("Obrigatorio votar")
}else if(idade > 65){
    alert("Voto facultativo")
}
console.log(idade)