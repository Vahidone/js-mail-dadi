
// ---------------Esercizio EMAIL-------------------------


// creare una variabile della lista delle email presenti 

const autorizzateEmails= [
  'ospite1@esempio.com',
  'ospite2@esempio.com',
  'ospite3@esempio.com',
  'ospite4@esempio.com',
  'ospite5@esempio.com'
];


let message;
// decidere dove va stampato il messaggio 
const printMessage = document.getElementById('print-message');

// il bottone di verifica 
const btnValidation = document.getElementById('button-verifica')
// il bottone di reset 
const btnReset = document.getElementById('button-reset');



// dare una funzione al buttone di verifica 
btnValidation.addEventListener('click', function () {
  // chiedere all'utente di inserire la sua email 
  const inputEmail = document.getElementById('input-email').value;

  // operazione di CONTROLLO E STAMPA

if (autorizzateEmails.includes(inputEmail)) {
  message = 'Accesso consentito. Benvenuto!';
  printMessage.innerHTML = message;
  printMessage.classList.add('text-success');

  // dare una funzione al bottone GIOCA 
  bottonePlay.addEventListener('click', function () {
    let playerPoint = 0;
    let computerPoint = 0;
    let playerNumber = Math.floor(Math.random() * 6) + 1;
    let computerNumber = Math.floor(Math.random() * 6) + 1;
    playerPoint += playerNumber;
    computerPoint += computerNumber;
    const dadoPlayer = document.getElementById('dado-player');
    const dadoPc = document.getElementById('dado-pc');
    dadoPlayer.innerHTML = playerPoint;
    dadoPc.innerHTML =  computerPoint;
  
    // facciamo apparire i punteggi di player e di pc 
    dadoPlayer.classList.remove('d-none');
    dadoPlayer.classList.add('d-inline-block', 'bg-warning');
    dadoPc.classList.remove('d-none');
    dadoPc.classList.add('d-inline-block', 'bg-secondary', 'text-white');
  
  
    // aggiungo anche audio per i dadi 
    const dadiVoce = document.getElementById('dadi-audio');
    dadiVoce.innerHTML = dadiVoce.play(); 
  
    
  
    if (playerPoint > computerPoint) {
      message2 = 'BRAVOOOOOOOOOO Hai vinto :)';
      result.classList.add('text-white', 'bg-success', 'p-3')
  
    }else if (playerPoint < computerPoint ) {
      message2 = 'Oops!! Ha vinto il computer :(';
      result.classList.add('text-light', 'bg-secondary', 'p-3')
    }else {
      message2 = 'avete pareggiato';
      result.classList.add('text-primary', 'bg-light', 'p-3')
    }
    
    result.innerHTML = message2;
    
   });
}

else {
  message = "Accesso negato al Gioco dei dadi. L'indirizzo email non è autorizzato";
  printMessage.innerHTML = message;
  printMessage.classList.add('text-danger');
  document.getElementById('space-game').classList.add('bg-danger');
}

});

// operazione di  RESET 
btnReset.addEventListener('click', function () {
  printMessage.classList.add('d-none');
  location.reload()
});






// ---------------GIOCO DI DADI----------------------------

let message2;
const bottonePlay = document.getElementById('btn-play');
const result = document.getElementById('risultato');



 
//  dare una funzione reset al bottone Annulla 

const bottoneAnnulla = document.getElementById('btn-annulla');

bottoneAnnulla.addEventListener('click', function() {
  result.classList.add('d-none');
  location.reload();
});




 
 