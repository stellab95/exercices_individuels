const label = document.querySelector('label')
const button = document.querySelector('button')
const input = document.getElementById('input')
const span = document.querySelector('span')
const winner = document.getElementById('winner')

function matchesGame(){
  let numberOfMatches = 50
  let currentPlayer = 1
  span.innerHTML = `Il reste ${numberOfMatches} allumettes`
  label.innerHTML = `Joueur ${currentPlayer} choisis entre 1 et 6 allumettes`

  button.addEventListener('click', () => {
 
  if(input.value >= 1 && input.value <= 6){
    console.log(input.value)
    span.innerHTML= `Il reste ${numberOfMatches -= input.value} allumettes`
    input.value = ''

    if(numberOfMatches <= 0 ){
      span.style.display = "none"
      winner.innerHTML = `Le jeu est fini, joueur ${currentPlayer} a gagné`
      button.disabled = true
    }

  }else{
    alert("Merci de choisir entre 1 et 6 allumettes")
    input.value = ''
  }
  currentPlayer = currentPlayer === 1 ? 2 : 1;
  label.innerHTML = `Joueur ${currentPlayer} choisis entre 1 et 6 allumettes`
  console.log(currentPlayer)
  
  })
}
matchesGame()
 
  //while(numberOfMatches > 0){

    //let userChoice = prompt(`Joueur ${currentPlayer} choisis entre 1 et 6 allumettes`)
    // if(userChoice >= 1 && userChoice <= 6){
    //   numberOfMatches -= userChoice
    // }else{
    //   alert("Merci de choisir entre 1 et 6 allumettes")
    // }
    // console.log(userChoice)
    // console.log(numberOfMatches);
    //Si la condition currentPlayer === 1 est vraie (c'est le joueur 1), 
    //alors currentPlayer est mis à 2, ce qui signifie que c'est maintenant
    //au tour du joueur 2.
    //currentPlayer = currentPlayer === 1 ? 2 : 1;
    //console.log(currentPlayer)
    
  //}
  //console.log(`Le jeu est fini, joueur ${currentPlayer} a gagné`);
  //console.log(currentPlayer)
// }
// matchesGame()