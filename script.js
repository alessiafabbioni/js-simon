// Visualizzare in pagina 5 numeri casuali.
// Da lì parte un timer di 30 secondi. Dopo 30 secondi i numeri scompaiono e l’utente deve inserire, i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
// Il layout lo decidete voi.
// Non perdetevi solo nei suoi dettagli da subito, ma date priorità a farlo funzionare.
// Poi se volete lo abbellite quanto volete, quando funziona tutto. :lipstick:
// Consigli del giorno:
    // * Pensate prima in italiano.
    // * Dividete in piccoli problemi la consegna.
    // * Individuate gli elementi di cui avete bisogno per realizzare il programma.
    // *Fate sempre una cosa sola alla volta, risolvendo un problema alla volta.
    // *OCIO che se arrivate al punto in cui stampate i numeri in pagina che poi devono sparire, ma la richiesta dei numeri all’utente la state facendo ancora con il prompt, su Chrome facile che non vi aggiorni la pagina nei tempi giusti (e quindi i numeri non scompaiano quando glielo dite voi).



//genero 5 numeri random e li faccio apparire sul Dom
    //funzione per generare numeri random
    //funzione per rimpiazzare i numeri nei bottoni
    //for loop per chiamare la funzione

document.addEventListener("DOMContentLoaded", function () {
    function genRandomNumber() {
        return Math.floor(Math.random() * 20) + 1;
    }

    let buttons = document.querySelectorAll("#numbersGenned .btn");
    let gennedNumbers = [];

    for (let i = 0; i < buttons.length; i++) {
        let randomN = genRandomNumber();
        buttons[i].textContent = randomN;

        gennedNumbers.push(randomN);
    }


    console.log("Numeri generati: ", gennedNumbers);
});

//imposto il timer e faccio sparire i bottoni
    //st timeout option

setTimeout(noButtons, 5000);

function noButtons() {
    let buttons = document.querySelectorAll("#numbersGenned .btn");

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].style.display = 'none';
    }
}

//quando il timer fa sparire i numeri il tag disabled sparisce e possiamo permettere alla 
//persona di inserire i numeri

setTimeout (noDisabled, 5000);

function noDisabled(){
    let input =document.querySelectorAll(".form-control");
    for (let i = 0; i < input.length; i++) {
        input[i].removeAttribute('disabled')
    }
}


//Quindi qui mi servirà una funzione che mi checca se i numeri che ho inserito sono gli stessi che erano usciti randomicamente all'inizio


//Cliccando su verifica:
    //Mi appare un Alert che mi dice quanti numeri ho azzeccato e quali (mostro direttamente i numeri?)


