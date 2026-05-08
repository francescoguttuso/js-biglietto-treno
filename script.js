const prezzoPerKm = 0.21;
const eta = parseInt(prompt("Inserisci la tua età:"));
const km = parseFloat(prompt("Inserisci i chilometri da percorrere:"));
let prezzoBiglietto = km * prezzoPerKm;
let prezzoBigliettoMinori;
let prezzoBigliettoOver;

if (eta < 18) {
    prezzoBigliettoMinori = prezzoBiglietto * 0.8; //  sconto del 20% per i minorenni
    prezzoBigliettoMinori = prezzoBigliettoMinori.toFixed(2);
} else if (eta > 65) {
    prezzoBigliettoOver = prezzoBiglietto * 0.6; // sconto del 40% per gli over 65
    prezzoBigliettoOver = prezzoBigliettoOver.toFixed(2);
}


prezzoBiglietto = prezzoBiglietto.toFixed(2); // arrotonda a 2 decimali


if (eta < 18) {
    alert("Il prezzo del biglietto per i minorenni è: " + prezzoBigliettoMinori + "€");
} else if (eta > 65) {
    alert("Il prezzo del biglietto per gli over 65 è: " + prezzoBigliettoOver + "€");
} else {
    alert("Il prezzo del biglietto è: " + prezzoBiglietto + "€");
}


