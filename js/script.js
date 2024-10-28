// INPUT
// inserisco i dati utente
const km = prompt ("Quanti km vuoi percorrere?");
const età = prompt ("Quanti anni hai?");
console.log(km, età);

numKm = parseInt(km);
numEtà = parseInt(età);
console.log(numKm, numEtà);

// mi accerto che l'utente inserisce dei numeri
if (isNaN(km, età)) {
    alert ("Errore, inserire un valore numerico!");
} else {
    // inserisco i dati
    let prezzoIntero = 0.21;
    console.log(prezzoIntero);
    
    
    // ESECUZIONE LOGICA
    // calcolo il prezzo intero in base ai km dell'utente
    prezzoIntero = (numKm * prezzoIntero);
    console.log(prezzoIntero);
    
    // calcolo lo sconto del biglietto 
    let sconto;
    if (numEtà < 18) {
        sconto = (prezzoIntero / 100 * 20);
    } else if (numEtà > 65) {
        sconto = (prezzoIntero / 100 * 40);
    } else {
        sconto = 0;
    }
    
    // calcolo il prezzo finale del biglietto
    const prezzoFinale = (prezzoIntero - sconto);
    
    
    // OUTPUT
    // stampo il prezzo finale con i numeri decimali
    console.log(prezzoFinale.toFixed(2));
}

