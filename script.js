const prezzoPerKm = 0.21;
const eta = parseInt(prompt("Inserisci la tua età:"));
const km = parseFloat(prompt("Inserisci i chilometri da percorrere:"));
let prezzoBiglietto = km * prezzoPerKm;

if (eta < 18) {
    prezzoBiglietto = prezzoBiglietto * 0.8; //  sconto del 20% per i minorenni

} else if (eta > 65) {
    prezzoBiglietto = prezzoBiglietto * 0.6; // sconto del 40% per gli over 65

}

prezzoBiglietto = prezzoBiglietto.toFixed(2);
alert("Il prezzo del biglietto è: " + prezzoBiglietto + "€");



