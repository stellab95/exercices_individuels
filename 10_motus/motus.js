export function tryWord(word, base) {
	// TODO: fix jeu sensible à la casse.

  	let wellPlaced = [];
    let notInWord = [];
    let missplaced = [];
    
  	let arrayBase = base.toLowerCase().split('');
    let arrayWord = word.toLowerCase().split('');
    
		for (let i = 0; i < arrayWord.length; i++) {
      if (arrayBase[i] === undefined){
        continue;
      }
    	if (arrayWord[i] === arrayBase[i]) {
      	wellPlaced.push(arrayWord[i])
      }	else if (arrayBase.includes(arrayWord[i])){
        missplaced.push(arrayWord[i])
      } else {
        notInWord.push(arrayWord[i])
      }
    }
    return { wellPlaced: wellPlaced, missplaced: missplaced, notInWord: notInWord }
}

function guess() {
	let word = document.getElementById("word").value
  let base = 'dictionnaire'
	let result = tryWord(word, base)
  document.getElementById("word").value = ''
 	document.getElementById("try").innerText = word
  document.getElementById("well").innerText = 'Bien placé 😍: '+result.wellPlaced.join(', ')
  document.getElementById("miss").innerText = 'Mal placé 👀: '+result.missplaced.join(', ')
  document.getElementById("not").innerText = 'Pas dans le mot 😩: '+result.notInWord.join(', ')
  if (result.wellPlaced.length === base.length) {
	  document.getElementById("win").innerText = 'Vous avez gagné'
  }
}