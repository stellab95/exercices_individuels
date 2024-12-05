function isValidDate(date) {
    // Découper la date en parties (mois, jour, année) à partir de la chaîne
    //.map applique une fonction à chaque élément d'un tableau
    const [dd, mm, aaaa] = date.split('/').map(Number);
  
    // Vérifier que le mois, le jour et l'année sont des nombres valides
    if (isNaN(dd) || isNaN(mm) || isNaN(aaaa)) {
      return false;
    }
  
    // Vérifier les plages des valeurs : jour (1-31), mois (1-12), année (999-9999)
    if (dd < 1 || dd > 31 || mm < 1 || mm > 12 || aaaa < 999 || aaaa > 9999) {
      return false;
    }
  
    // Créer un objet Date pour vérifier si c'est une date valide
    // La méthode new Date gère les années bissextiles
    const objectDate = new Date(aaaa, mm - 1, dd);
  
    // Vérifier que les composantes de la date sont correctes
    return (
      objectDate.getFullYear() === aaaa &&
      objectDate.getMonth() === mm - 1 &&
      objectDate.getDate() === dd
      
    )
  }
  console.log(isValidDate("03/14/2001")); 
  console.log(isValidDate("29/02/2025")); 

  // [^0-9] correspond à "tout ce qui n'est pas un chiffre"
  // g = global => la recherche/remplacement s'applique à toute la chaîne
function isPalindrome(date) {
  const cleanedDate = date.replace(/[^0-9]/g, '');
  const len = cleanedDate.length;
  if (!isValidDate(date)) {
    return false;
  }
  for (let i = 0; i < len / 2; i++) {
    if (cleanedDate[i] !== cleanedDate[len - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome("11/02/2011")); // true
console.log(isPalindrome("12/02/2021")); // false 

function formatDateToString(date) {
  // Convertit un objet Date en chaîne de format "MM/DD/YYYY"
  const dd = String(date.getDate()).padStart(2, '0');
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const yyyy = date.getFullYear();
  return `${mm}/${dd}/${yyyy}`;
}

function getNextPalindromes(x) {
  const results = [];
  let currentDate = new Date();

  while (results.length < x) {
    currentDate.setDate(currentDate.getDate() + 1); // Passer au jour suivant
    const formattedDate = formatDateToString(currentDate);
    if (isPalindrome(formattedDate)) {
      results.push(formattedDate);
    }
  }

  return results;
}

// Exemple d'utilisation :
const nextPalindromes = getNextPalindromes(5);
console.log("Prochaines dates palindromes : ", nextPalindromes);