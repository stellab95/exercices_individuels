//création d'une variable pour récupérer
//la valeur retournée par prompt
let userFirstname = prompt()

//ajout du paramètre hour qui permet de dire grâce à une 
//condition bonsoir au lieu de bonjour à partir de 18h
function sayHello(firstname, hour){
   
    if(hour >= 18){
        console.log(`Bonsoir ${firstname} !`);        
    }else{
        let message = "Bonjour !"
        message = `Bonjour ${firstname} !`

//modifie le h1 du document HTML en remplaçant
//Beyonce par le prénom de l'utilisateur
document.querySelector('h1').innerText = message;

        }
    }

//appel de la fonction sayHello qui corrige "Bonjour undefined"
sayHello('Beyonce')

//appels de la fonction sayHello pour tester différents paramètres
sayHello(`Beyonce`, 11);
sayHello(`Beyonce`, 18);
sayHello(`Beyonce`, 17);

//appel de la fonction qui récupère la valeur
//inscrite par l'utilisateur dans le prompt
sayHello(userFirstname)
