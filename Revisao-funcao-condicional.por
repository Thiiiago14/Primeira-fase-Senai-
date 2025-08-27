programa {

inclua biblioteca Matematica


  funcao inicio() {
   cadeia nome 
   real nota1, nota2, nota3, media, frequencia

   escreva("Digite o nome do aluno")
   leia(nome)

   escreva("Digite a primeira nota")
   leia(nota1)
   escreva("Digite a segunda nota")
   leia(nota2)
   escreva("Digite a terceira nota")
   leia(nota3)
   media = (nota1+nota2+nota3)/3

   media = Matematica.arredondar(media,2)

   escreva(media)
  // escreva(media)
  escreva("0 a 1, digite a frequencia")
  leia(frequencia)
  frequencia = frequencia * 100
  limpa()
  escreva(nome, "sua média final é: ", media, "\n E sua frequencia é", frequencia, "% \n")

  se(media>=7 e frequencia>=8){
    escreva("Aprovado!")
  }senao {
    escreva("Reprovado")
    
  }






   
  }
}
