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

console.log( "Sejam bem-vindx!")
console.log("Vamos jogar uma partida de Blackjack/Vinte-e-um?")

let iniciarOjogo = confirm("Deseja iniciar uma nova rodada?")

if (iniciarOjogo){
   primeiroRound()
} 
else{
   console.log("O jogo acabou.")
}

function primeiroRound(){
   if (primeiraRodada){

      for (i = 0; i < 2; i++){
         let cartaDoUsuario = comprarCarta()
         let cartaDoComputador = comprarCarta()

         maoDaMaquina.push(cartaDoUsuario)

         maoDoUsuario.push(cartaDoComputador)
         
         let valorDaCartaDoUsuario = Number(cartaDoUsuario.valor) + Number(somaDeTodasAsCartasDoUsuario)

         somaDeTodasAsCartasDoUsuario = valorDaCartaDoUsuario

         let valorDaCartaDoComputador = Number(cartaDoComputador.valor) + Number(somaDeTodasAsCartasDoComputador)

         somaDeTodasAsCartasDoComputador = Number(valorDaCartaDoComputador)
         }

         primeiraRodada = false   
   }
}

   
if (!primeiraRodada){

   let cartasIniciaisDoUsuario = maoDoUsuario.map(a => a.texto)
   
   let cartasIniciaisDaMaquina = maoDaMaquina.map(a => a.texto)

   console.log(`Você iniciou com as seguintes cartas ${cartasIniciaisDoUsuario.join()}. Total de pontos: ${somaDeTodasAsCartasDoUsuario}`)
   
   console.log(`A Máquina iniciou com as seguintes cartas ${cartasIniciaisDaMaquina.join()}. Total de pontos: ${somaDeTodasAsCartasDoUsuario}`)
   
   let continuar = confirm("Você deseja comprar uma carta?")
if(continuar){
   rodada(continuar)
   } else{
      quemGanhou()
   }
}

   function rodada(){

      cartaDoUsuario = comprarCarta()
   
      cartaDoComputador = comprarCarta()
      
      console.log(`Você tirou a carta ${cartaDoUsuario.texto}.`)
   
      console.log(`A máquina tirou a carta ${cartaDoComputador.texto}.`)
      
      maoDoUsuario.push(cartaDoUsuario)
   
      console.log("Após adicionar a carta, você possui as seguintes cartas:", maoDoUsuario)
   
      maoDaMaquina.push(cartaDoComputador)

      console.log("Após adicionar a carta, a máquina possui as seguintes cartas:",maoDaMaquina)
   
      let valorDaCartaDoUsuario = Number(cartaDoUsuario.valor) + Number(somaDeTodasAsCartasDoUsuario)
   
      somaDeTodasAsCartasDoUsuario = valorDaCartaDoUsuario
   
      console.log("total de pontos que você tem", somaDeTodasAsCartasDoUsuario)
   
      let valorDaCartaDoComputador = Number(cartaDoComputador.valor) + Number(somaDeTodasAsCartasDoComputador)
   
      somaDeTodasAsCartasDoComputador = Number(valorDaCartaDoComputador)
      
      console.log("total de pontos que a máquina tem", somaDeTodasAsCartasDoComputador)
   
      fimDoJogo()
   }



function fimDoJogo(){

   let oJogadorPerdeu = somaDeTodasAsCartasDoUsuario > 21
   let aMaquinaPerdeu = somaDeTodasAsCartasDoComputador > 21
   
   if ((!(oJogadorPerdeu) || !aMaquinaPerdeu) && oJogadorPerdeu){

      console.log(`Você estourou o limite de pontos. A pontuação final de ambos foi de ${somaDeTodasAsCartasDoUsuario} (usuário) e ${somaDeTodasAsCartasDoComputador} (Máquina)`)

      console.log(`O jogo acabou! A Máquina foi a vencedora!`)

   } if ((!(oJogadorPerdeu) || !aMaquinaPerdeu) && aMaquinaPerdeu){

      console.log(`A Máquina estourou o limite de pontos. A pontuação final de ambos foi de ${somaDeTodasAsCartasDoUsuario} (usuário) e ${somaDeTodasAsCartasDoComputador} (Máquina)`)

      console.log(`O jogo acabou! O Usuário(a) foi o/a vencedor(a)!`)

   } else { 
      devoIniciarAProximdaRodada()
}
}

function quemGanhou(){
   console.log(somaDeTodasAsCartasDoComputador)
   console.log(somaDeTodasAsCartasDoUsuario)

   let empate = Number(somaDeTodasAsCartasDoComputador) == Number(somaDeTodasAsCartasDoUsuario)

   console.log(empate)

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

function devoIniciarAProximdaRodada (){

   let continuar = confirm("Você quer retirar outra carta?")

   if (continuar){

   rodada()

   } else {

      quemGanhou()

   }
}
