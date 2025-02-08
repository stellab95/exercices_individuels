let input = document.querySelector('input')
let buttons = document.querySelectorAll('button')

let string = ""
console.log(buttons);

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault
        if(e.target.innerHTML == '='){ // target retourne l'élément où l'événement s'est produit
            string = eval(string) // fonction qui prend une chaîne de texte et l’interprète comme une instruction JS
            input.value = string
        } else if(e.target.innerHTML == 'C') {
            string = ""
            input.value = string
        } else {
            string += e.target.innerHTML
            input.value = string
        }
    })
})