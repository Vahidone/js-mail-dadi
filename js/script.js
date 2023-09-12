
// ---------------EMAIL-------------------------


// creare una variabile della lista delle email presenti 

const autorizzateEmails= ['ospite1@esempio.com', 'ospite2@esempio.com', 'ospite3@esempio.com', 'ospite4@esempio.com', 'ospite5@esempio.com' ];
let message;
// decidere dove va stampato il messaggio 
const printMessage = document.getElementById('print-message');

// il bottone di verifica 
const btnValidation = document.getElementById('button-verifica')
// il bottone di reset 
btnReset = document.getElementById('button-reset');

// dare una funzione al buttone di verifica 
btnValidation.addEventListener('click', function () {
  // chiedere all'utente di inserire la sua email 
  const inputEmail = document.getElementById('input-email').value;

  // operazione di CONTROLLO E STAMPA

if (autorizzateEmails.includes(inputEmail)) {
  message = 'Accesso consentito. Benvenuto!';
  printMessage.innerHTML = message;
}
else {
  message = 'Accesso negato. Indirizzo email non è autorizzato';
  printMessage.innerHTML = message;
  console.log(message);
}

});

// operazione di  RESET 
btnReset.addEventListener('click', function () {
  printMessage.classList.add('d-none');
  location.reload()
});


// ---------------GIOCO DI DADI--------------------


