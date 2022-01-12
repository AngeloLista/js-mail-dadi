/* # Mail
Crea un array di email;
Chiedi all’utente la sua email.
controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato in console sull’esito del controllo. */


let emailList = ['marcorossi@gmail.com', 'vincenzoferrari@gmail.com', 'francescorusso@gmail.com'];

const userEmail = prompt('Inserisci la tua Email');

/* METODO CORTO
const risultato = emailList.includes(userEmail)

if (risultato) {
    console.log("La tua Email è presente nell'elenco")
} else {
    console.log("La tua Email non è presente nell'elenco")
}*/


let isAllowed = false;

for (let i = 0; i < emailList.length; i++) {
    if(userEmail === emailList[i]) {
        isAllowed = true;
    }
}

if (isAllowed) {
    console.log("La tua Email è presente nell'elenco")
} else {
    console.log("La tua Email non è presente nell'elenco")
}