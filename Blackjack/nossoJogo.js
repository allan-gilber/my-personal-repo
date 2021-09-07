/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

let maoDoUsuario = []
let maoDaMaquina = []

let devoContinuar = true
let primeiraRodada = true


let somaDeTodasAsCartasDoUsuario = 0
let somaDeTodasAsCartasDoComputador = 0

let cartaDoUsuario
let cartaDoComputador

console.log( "Seja bem-vindx!")
console.log("Vamos jogar uma partida de Blackjack/Vinte-e-um?")

let iniciarOjogo = confirm("Deseja iniciar uma nova rodada?")

if (iniciarOjogo){
   primeiroRound()
} 
else{
   oJogoAcabou()
}

function primeiroRound(){
   if (primeiraRodada){
      console.log("função primeira rodada")
      
      maoDoUsuario = [comprarCarta(), comprarCarta()]
      maoDaMaquina = [comprarCarta(), comprarCarta()]

      console.log(maoDoUsuario)
      console.log(maoDaMaquina)
      
      let valorDasCartasDoUsuario = maoDoUsuario.map(a => a.valor)

      somaDeTodasAsCartasDoUsuario = somaDosValores(valorDasCartasDoUsuario)

      let valorDasCartasDoComputador = maoDaMaquina.map(a => a.valor)

      somaDeTodasAsCartasDoComputador = somaDosValores(valorDasCartasDoComputador)

      primeiraRodada = false   
   }
}

function somaDosValores(array) {
   let sum = 0;
   for (let a of array) {
      sum += a;
   }
   return sum;

}
   
if (!primeiraRodada){

   console.clear()

   let cartasIniciaisDoUsuario = maoDoUsuario.map(a => a.texto)
   
   let cartasIniciaisDaMaquina = maoDaMaquina.map(a => a.texto)

   console.log(`Você iniciou com as seguintes cartas: ${cartasIniciaisDoUsuario.join()}. Total de pontos: ${somaDeTodasAsCartasDoUsuario}`)
   
   console.log(`A Banca/Dealer iniciou com as seguintes cartas: ${cartasIniciaisDaMaquina.join()}. Total de pontos: ${somaDeTodasAsCartasDoComputador}`)
   
   let continuar = confirm("Você deseja comprar uma carta?")

   if(continuar){
      rodada()
      } else{
         quemGanhou()
      }

}

function rodada(){

   console.clear()

   cartaDoUsuario = comprarCarta()

   cartaDoComputador = comprarCarta()
   
   console.log(`Você tirou a carta ${cartaDoUsuario.texto}.`)

   console.log(`A Banca/Dealer tirou a carta ${cartaDoComputador.texto}.`)
   
   maoDoUsuario.push(cartaDoUsuario)

   let cartasNaMaoDoUsuario = maoDoUsuario.map(a => a.texto)

   maoDaMaquina.push(cartaDoComputador)

   let cartasNaMaoDaMaquina = maoDaMaquina.map(a => a.texto)

   somaDeTodasAsCartasDoUsuario += cartaDoUsuario.valor

   somaDeTodasAsCartasDoComputador += cartaDoComputador.valor 
   
   console.log(`Após adicionar a carta tirada, você possui as seguintes cartas:", ${cartasNaMaoDoUsuario.join()}. Total de pontos: ${somaDeTodasAsCartasDoUsuario}`)

   console.log(`Após adicionar a carta tirada, a Banca/Dealer possui as seguintes cartas:",${cartasNaMaoDaMaquina.join()}. Total de pontos: ${somaDeTodasAsCartasDoComputador}`)

   fimDoJogo()

}



function fimDoJogo(){

   let teveEmpate = somaDeTodasAsCartasDoComputador === somaDeTodasAsCartasDoUsuario
   let oJogadorPerdeu = somaDeTodasAsCartasDoUsuario > 21
   let aMaquinaPerdeu = somaDeTodasAsCartasDoComputador > 21
   
   if ((oJogadorPerdeu && !aMaquinaPerdeu) && !teveEmpate){

      console.log(`Você estourou o limite de pontos. A pontuação final de ambos foi de ${somaDeTodasAsCartasDoUsuario} (Usuário) e ${somaDeTodasAsCartasDoComputador} (Banca/Dealer)`)

      console.log(`O jogo acabou! A Banca/Dealer foi a vencedora!`)

      devoContinuar = false

   } else if ((!oJogadorPerdeu && aMaquinaPerdeu) && !teveEmpate){

      console.log(`A Banca/Dealer estourou o limite de pontos. A pontuação final de ambos foi de ${somaDeTodasAsCartasDoUsuario} (usuário) e ${somaDeTodasAsCartasDoComputador} (Banca/Dealer)`)

      console.log(`O jogo acabou! O Usuário(a) foi o/a vencedor(a)!`)
      
      devoContinuar = false

   } else if(oJogadorPerdeu && aMaquinaPerdeu){

      console.log(`O jogo acabou! Ambos estouraram a pontuação. Vitória da Banca/Dealer. A pontuação final de ambos foi de ${somaDeTodasAsCartasDoUsuario} (usuário) e ${somaDeTodasAsCartasDoComputador} (Banca/Dealer)`)
      
      devoContinuar = false

   }
   
   devoIniciarAProximdaRodada()

}

function devoIniciarAProximdaRodada (){

   if (devoContinuar){

      let continuar = confirm("Você quer retirar outra carta?")

      if (continuar){

         rodada()

      } else {

         quemGanhou()

      }
   }
}

function quemGanhou(){

   let empate = Number(somaDeTodasAsCartasDoComputador) == Number(somaDeTodasAsCartasDoUsuario)

   if ((somaDeTodasAsCartasDoComputador > somaDeTodasAsCartasDoUsuario) && !empate){

   console.log(`Vitória da Banca/Dealer! Pontuação: Banca/Dealer ${somaDeTodasAsCartasDoComputador} ponto(s), Usuário ${somaDeTodasAsCartasDoUsuario} pontos.`)

   }

   if ((somaDeTodasAsCartasDoComputador < somaDeTodasAsCartasDoUsuario) && !empate) {

   console.log(`Vitória do Usuário! Pontuação: Usuário ${somaDeTodasAsCartasDoUsuario}  ponto(s), Banca/Dealer ${somaDeTodasAsCartasDoComputador} pontos`)

   }
}

if(somaDeTodasAsCartasDoUsuario === somaDeTodasAsCartasDoComputador){

   console.log(`Empate! Ambos terminaram com ${somaDeTodasAsCartasDoComputador}`)

}

function oJogoAcabou (){

   console.log("Fim do jogo!")
   console.log("O jogo acabou.")

}
