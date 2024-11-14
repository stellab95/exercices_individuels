let numberRange = prompt('Choisis un nombre entre 0 et 50')

function didIWin(givenNumber, numberRange){
    if(givenNumber < numberRange){
        //alert('Plus grand')
        return false
   }else if(givenNumber > numberRange){
        //alert('Plus petit')
        return false
   }else{
        // alert('Bravo ! Vous avez deviné le nombre')
   }
   return true
}

function gamePlay(){
   //let playAgain = true
   //while (playAgain){
   //let givenNumber = prompt('Saisissez un nombre')
   // playAgain = !didIWin(givenNumber, numberRange)
   //}

    const button = document.querySelector('button')
    const input= document.getElementById('guess')
    const counterAttempt = document.querySelector('span')
    const label = document.querySelector('label')
    let attempts = 0
    attempts++
     
    givenNumber = input.value
    button.addEventListener('click', () => {
      if(input.value > 50){
         alert('Merci de choisir un nombre entre 0 et 50 !') 
         input.value = ''
       }

       if(input.value === givenNumber){
         label.innerHTML = 'Bravo, tu as trouvé la bonne réponse !'
         button.style.display = "none"
       }else{
         label.innerHTML = 'Perdu, essaye encore !'
       }
       counterAttempt.innerHTML = `${attempts++}`;

       console.log(input.value) 
     })   
 }
 gamePlay()

