// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65

// dichiaro le variabili
var nome;
var cognome;
var kilometriDaPercorrere;
var eta;
var prezzoBiglietto;
// assegno un valore alle variabili
nome = prompt('Inserisci il tuo nome');
cognome = prompt('cognome');
kilometriDaPercorrere = parseInt(prompt('Quanti km devi percorrere?'));
eta = parseInt(prompt('Quanti anni hai?'));
prezzoBiglietto = kilometriDaPercorrere * 0.21;

// verifico che le lettere iniziali del nome e del cognome sono maiuscolo e il resto minuscolo e senza spazi
var nomeMinuscoloAttaccato;
var nomeLetteraMaiuscola;
var cognomeMinuscoloAttaccato;
var cognomeLetteraMaiuscola;

nomeMinuscoloAttaccato = nome.toLowerCase().trim();
cognomeMinuscoloAttaccato = nome.toLowerCase().trim();
nomeLetteraMaiuscola = nomeMinuscoloAttaccato.charAt(0).toUpperCase();
cognomeLetteraMaiuscola = cognomeMinuscoloAttaccato.charAt(0).toUpperCase();


// dichiaro delle variabili per applicare lo sconto
var sconto20;
var sconto40;
var sconto20Applicato;
var sconto40Applicato;

// assegno un valore
sconto20 = (prezzoBiglietto * 20) / 100;
sconto40 = (prezzoBiglietto * 40) / 100;
sconto20Applicato = prezzoBiglietto - sconto20;
sconto40Applicato = prezzoBiglietto - sconto40;

// istruzioni condizionali e stampo in html sia l'intestatario sia il prezzo del biglietto effettivo
var spesaFinale = prezzoBiglietto;

if (eta <= 17) {
  spesaFinale = sconto20Applicato;
} else if (eta >= 66) {
  spesaFinale = sconto40Applicato;
}

document.getElementById('costo').innerHTML += spesaFinale + '€';