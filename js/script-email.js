/* # Mail
Crea un array di email;
Chiedi all’utente la sua email.
controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato in console sull’esito del controllo. */


let emailList = ['marcorossi@gmail.com', 'vincenzoferrari@gmail.com', 'francescorusso@gmail.com'];

const userEmail = prompt('Inserisci la tua Email');

const risultato = emailList.includes(userEmail)

if (risultato) {
    console.log("La tua Email è presente nell'elenco")
} else {
    console.log("La tua Email non è presente nell'elenco")
}
