// const numeros = [3,5,8,10]

// // const  valoresDobrados = numeros.map((valor)=> valor*2)
// // // console.log(numeros)
// // console.log(valoresDobrados)
const usuarios = [
    {nome:"João",idade:32},
    {nome:"Maria",idade:15},
    {nome:"Pedro",idade:21}
]

// const nomesUsuarios = usuarios.map(usuario => usuario.nome)
// console.log(nomesUsuarios)

const idadesUsuarios = usuarios.map(usuario => usuario.idade)
console.log(idadesUsuarios)

    for(let idade of idadesUsuarios){

        console.log(idade)
}

