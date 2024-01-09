//Chiedo l'età all'utente
const agePassenger = parseInt(prompt('Quanti anni hai?'));
console.log(agePassenger);

//Chiedo all'utente quanti km deve percorrere
const travelKm = parseInt(prompt('Quanti km devi percorrere?'));
console.log(travelKm);

//Assegno una variabile alla tariffa base del biglietto
const baseTicket = 0.21;

//Calcolo il prezzo totale del biglietto
const totalTicketPrice = (baseTicket * travelKm).toFixed(2);
console.log(totalTicketPrice);

//Calcolo gli sconti
const youngDiscount = (totalTicketPrice * 20 / 100);
const elderDiscount = (totalTicketPrice * 40 / 100);

//Applico gli sconti ai biglietti
const youngTicket = (totalTicketPrice - youngDiscount).toFixed(2);
const elderTicket = (totalTicketPrice - elderDiscount).toFixed(2);
console.log(youngTicket);
console.log(elderTicket);

//Richiamo l'elemento per stampare il risultato
const finalTicketPrice = document.getElementById('final-ticket-price');

//In base all'età stampo il risultato
if (agePassenger < 18) {
  finalTicketPrice.innerText = `Il tuo biglietto costa ${youngTicket}€`;
} else if (agePassenger > 65) {
  finalTicketPrice.innerText = `Il tuo biglietto costa ${elderTicket}€`;
} else {
  finalTicketPrice.innerText = `Il tuo biglietto, senza sconti applicati, costa ${totalTicketPrice}€`;
}
