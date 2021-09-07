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
      // maoDaMaquina.push(cartaDoUsuario)
      // maoDoUsuario.push(cartaDoComputador)
      
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
   
   console.log(`A Máquina iniciou com as seguintes cartas: ${cartasIniciaisDaMaquina.join()}. Total de pontos: ${somaDeTodasAsCartasDoComputador}`)
   
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

   console.log(`A máquina tirou a carta ${cartaDoComputador.texto}.`)
   
   maoDoUsuario.push(cartaDoUsuario)

   let cartasNaMaoDoUsuario = maoDoUsuario.map(a => a.texto)

   maoDaMaquina.push(cartaDoComputador)

   let cartasNaMaoDaMaquina = maoDaMaquina.map(a => a.texto)

   somaDeTodasAsCartasDoUsuario += cartaDoUsuario.valor

   console.log("a soma de todas as cartas é:", somaDeTodasAsCartasDoUsuario)

   // somaDeTodasAsCartasDoUsuario = valorDaCartaDoUsuario

   somaDeTodasAsCartasDoComputador += cartaDoComputador.valor 

   console.log("a soma de todas as cartas é:", somaDeTodasAsCartasDoComputador)

   // somaDeTodasAsCartasDoComputador = Number(valorDaCartaDoComputador)
   
   console.log(`Após adicionar a carta tirada, você possui as seguintes cartas:", ${cartasNaMaoDoUsuario.join()}. Total de pontos: ${somaDeTodasAsCartasDoUsuario}`)

   console.log(`Após adicionar a carta tirada, a Máquina possui as seguintes cartas:",${cartasNaMaoDaMaquina.join()}. Total de pontos: ${somaDeTodasAsCartasDoComputador}`)



   fimDoJogo()
}



function fimDoJogo(){

   // console.log("função fimdojogo")

   let teveEmpate = somaDeTodasAsCartasDoComputador === somaDeTodasAsCartasDoUsuario
   let oJogadorPerdeu = somaDeTodasAsCartasDoUsuario > 21
   let aMaquinaPerdeu = somaDeTodasAsCartasDoComputador > 21
   
   if ((oJogadorPerdeu && !aMaquinaPerdeu) && !teveEmpate){

      console.log(`Você estourou o limite de pontos. A pontuação final de ambos foi de ${somaDeTodasAsCartasDoUsuario} (Usuário) e ${somaDeTodasAsCartasDoComputador} (Máquina)`)

      console.log(`O jogo acabou! A Máquina foi a vencedora!`)

      devoContinuar = false

   } else if ((!oJogadorPerdeu && aMaquinaPerdeu) && !teveEmpate){

      console.log(`A Máquina estourou o limite de pontos. A pontuação final de ambos foi de ${somaDeTodasAsCartasDoUsuario} (usuário) e ${somaDeTodasAsCartasDoComputador} (Máquina)`)

      console.log(`O jogo acabou! O Usuário(a) foi o/a vencedor(a)!`)
      
      devoContinuar = false

   } else if(oJogadorPerdeu && aMaquinaPerdeu){

      console.log(`O jogo acabou! Ambos estouraram a pontuação. Vitória da Máquina. A pontuação final de ambos foi de ${somaDeTodasAsCartasDoUsuario} (usuário) e ${somaDeTodasAsCartasDoComputador} (Máquina)`)
      
      devoContinuar = false

   }
   
   devoIniciarAProximdaRodada()
}

function devoIniciarAProximdaRodada (){

   // console.log("função devo iniciar proxima rodada")

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

   // console.log("função quemganhou")

   console.log(somaDeTodasAsCartasDoComputador)
   console.log(somaDeTodasAsCartasDoUsuario)

   let empate = Number(somaDeTodasAsCartasDoComputador) == Number(somaDeTodasAsCartasDoUsuario)

   if ((somaDeTodasAsCartasDoComputador > somaDeTodasAsCartasDoUsuario) && !empate){

   console.log(`Vitória da Máquina! Pontuação: Máquina ${somaDeTodasAsCartasDoComputador} ponto(s), Usuário ${somaDeTodasAsCartasDoUsuario} pontos.`)

   }

   if ((somaDeTodasAsCartasDoComputador < somaDeTodasAsCartasDoUsuario) && !empate) {

   console.log(`Vitória do Usuário! Pontuação: Usuário ${somaDeTodasAsCartasDoUsuario}  ponto(s), Máquina ${somaDeTodasAsCartasDoComputador} pontos`)

   }
}

if(somaDeTodasAsCartasDoUsuario === somaDeTodasAsCartasDoComputador){

   console.log(`Empate! Ambos terminaram com ${somaDeTodasAsCartasDoComputador}`)

}

function oJogoAcabou (){

   console.log("Fim do jogo!")
   console.log("O jogo acabou.")

}
