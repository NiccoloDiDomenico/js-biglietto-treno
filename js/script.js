// INPUT
// inserisco i dati
let prezzoIntero = 0.21;
console.log(prezzoIntero);

// inserisco i dati utente
const km = prompt ("Quanti km vuoi percorrere?");
const età = prompt ("Quanti anni hai?");
console.log(km, età);


// mi accerto che l'utente inserisce dei numeri
if (isNaN(km) || isNaN(età)) {
    alert ("Errore, inserire un valore numerico!");
} else {
    // ESECUZIONE LOGICA

    // transformo in numeri i dati dell'utente
    numKm = parseInt(km);
    numEtà = parseInt(età);
    console.log(numKm, numEtà);

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
    

    const message = `Il prezzo del biglietto intero è ${prezzoIntero.toFixed(2)}€, sarà applicato uno sconto di ${sconto}€ ed il prezzo finale sarà di ${prezzoFinale.toFixed(2)}€`
    console.log(message);
}


