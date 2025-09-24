const prompt = require('prompt-sync')();

const usuarioValido = "Thiago"
const senhaValida = "1409"

while (true) {
  const usuario = prompt("Digite seu usuário: ")
  const senha = prompt("Digite sua senha: ")

  if (usuario === usuarioValido && senha === senhaValida) {
    console.log("Login realizado com sucesso!")
break
  } else {
    console.log("Usuário ou senha incorretos. Tente novamente.\n")
  }
}
