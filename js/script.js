
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

let message2;
const bottonePlay = document.getElementById('btn-play');
const result = document.getElementById('risultato');
// dare una funzione al bottone GIOCA 

 bottonePlay.addEventListener('click', function () {
  let playerPoint = 0;
  let computerPoint = 0;
  let playerNumber = Math.floor(Math.random() * 6) + 1;
  let computerNumber = Math.floor(Math.random() * 6) + 1;
  playerPoint += playerNumber;
  computerPoint += computerNumber;
  const dadiVoce = document.getElementById('dadi-audio');
  dadiVoce.innerHTML = dadiVoce.play(); 

  

  if (playerPoint > computerPoint) {
    message2 = 'Hai vinto tu';

  }else if (playerPoint < computerPoint ) {
    message2 = 'Ha vinto il computer';
  }else {
    message2 = 'hai pareggiato';
  }
  
  result.innerHTML = message2;
  
 });


//  dare una funzione reset al bottone Annulla 

const bottoneAnnulla = document.getElementById('btn-annulla');

bottoneAnnulla.addEventListener('click', function() {
  result.classList.add('d-none');
  location.reload();
});




 
 