// ESERCIZIO
CALCOLO DEL PREZZO DEL BIGLIETTO DEL TRENO:
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va stampato in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Ricordatevi un metodo che abbiamo visto durante le lezioni precedenti.


// DATI
chiedo all'utente il numero di chilometri che vuole percorrerre 
chiedo all'utente la sua età 
prezzo intero del biglietto: 0,21€ al km
sconto del 20% per i minorenni
sconto del 40% per gli over 65


//ESECUZIONE LOGICA
calcolo il prezzo intero del biglietto in base ai chilometri che vuole percorrere:
    - prezzo intero del biglietto: (num. km x 0,21)

calcolo in base alla sua età se è applicabile uno sconto:
    - prezzoFinaleDelBiglietto;
    - se (età <18) {
        prezzo finale del biglietto = (prezzo intero del biglietto / 100 * 20)
    } altrimenti se (età > 65) {
        prezzo finale del biglietto = (prezzo intero del biglietto /100 * 40)
    }


// OUTPUT
stampo il prezzo finale del biglietto (con due duecimali, per indicare i centesimi sul prezzo):
    -log (prezzoFinale.toFixed(2))