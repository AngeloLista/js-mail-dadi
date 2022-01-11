/* # Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Stampare in console i tiri di dado e il risultato.
BONUS
Stampare i risultati in pagina oltre che in console!
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve?
Consigli del giorno:
1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
3. si, ma noi cosa vogliamo fare?
4. torniamo a scrivere in italiano
5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
*/


const userNumber = Math.floor(Math.random() * 6) + 1;
const computerNumber = Math.floor(Math.random() * 6) + 1;

console.log(`Lancio dei dadi...`);
console.log(`All'utente è uscito il numero ${userNumber}`);
console.log(`Al computer è uscito il numero ${computerNumber}`);

let message = ''

if (userNumber > computerNumber) {
    console.log("Il vincitore è l'Utente")   
    message = "Il vincitore è l'Utente." 
} else if (computerNumber > userNumber) {
    console.log("Il vincitore è il Computer") 
    message = "Il vincitore è il Computer."   
} else {
    console.log("La partita è finita in pareggio")
    message = "La partita è finita in pareggio."
}


document.getElementById("user").innerHTML = `All'utente è uscito il numero ${userNumber}.`;
document.getElementById("computer").innerHTML = `Al computer è uscito il numero ${computerNumber}.`;
document.getElementById("winner").innerHTML = message;

