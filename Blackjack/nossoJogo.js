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



console.log( "Boas vindas ao jogo de Blackjack")
let iniciarOjogo = confirm("Quer iniciar uma nova rodada??")

let pontuacaoDaMaquina = []
let pontuacaoDoUsuario = []

if (iniciarOjogo){
   rodada()
} else{
   console.log("O jogo acabou.")
  }

  
  


function rodada(){   
     
   let primeiraCartaDoUsuario = comprarCarta()
   let segundaCartaDoUsuario = comprarCarta()
   let primeiraCartaDaMáquina = comprarCarta()
   let segundaCartaDaMáquina = comprarCarta()
   pontuacaoDaMaquina = primeiraCartaDaMáquina.valor + segundaCartaDaMáquina.valor 
   pontuacaoDoUsuario = primeiraCartaDoUsuario.valor + segundaCartaDoUsuario.valor

   console.log(`Usuário - cartas: ${primeiraCartaDoUsuario.texto}, ${segundaCartaDoUsuario.texto} - pontuação ${pontuacaoDoUsuario}`)

   console.log(`Máquina - cartas: ${primeiraCartaDaMáquina.texto}, ${segundaCartaDaMáquina.texto} - pontuação ${pontuacaoDaMaquina}`)  
   
   fimDoJogo()}

   
function fimDoJogo(){

   let oJogadorPerdeu = pontuacaoDoUsuario > 21
   let aMaquinaPerdeu = pontuacaoDaMaquina > 21
   
   if ((!(oJogadorPerdeu) || !aMaquinaPerdeu) && oJogadorPerdeu){
      console.log(`Você estourou o limite de pontos. A pontuação final de ambos foi de ${pontuacaoDoUsuario} (usuário) e ${pontuacaoDaMaquina} (Máquina)`)
      console.log(`O jogo acabou! A Máquina foi a vencedora!`)
   } if ((!(oJogadorPerdeu) || !aMaquinaPerdeu) && aMaquinaPerdeu){
      console.log(`A Máquina estourou o limite de pontos. A pontuação final de ambos foi de ${pontuacaoDoUsuario} (usuário) e ${pontuacaoDaMaquina} (Máquina)`)
      console.log(`O jogo acabou! O Usuário(a) foi o/a vencedor(a)!`)
   } else { 
      quemGanhou()

function quemGanhou () {
  
   let empate = pontuacaoDaMaquina === pontuacaoDoUsuario

  if (pontuacaoDaMaquina > pontuacaoDoUsuario) {
     console.log(`Vitória da Máquina! Pontuação: Máquina ${pontuacaoDaMaquina} ponto(s), Usuário ${pontuacaoDoUsuario} ponto(s).`)
  }
  if (pontuacaoDaMaquina < pontuacaoDoUsuario) {
   console.log(`Vitória do Usuário! Pontuação: Máquina ${pontuacaoDaMaquina} ponto(s), Usuário ${pontuacaoDoUsuario} ponto(s)`)
}
}
}
}
