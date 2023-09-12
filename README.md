# js-mail-dadi

### Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.

1. Creo una lista di utenti autorizzati con le email consentite (quindi uso array).
2. Chiedo all'utente di inserire la sua email e la salvo in una variabile. 
3. Faccio un controllo per vedere se email inserita dall'utente è presente nella lista di utenti.
4. Se la risposta è si, stampo per esempio "Accesso consentito. Benvenuto!".
5. Altrimenti stampo per esempio "Accesso negato. La tua email non è autorizzata.".

### Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.

1. Creo una variabile per punteggio del giocatore.
2. Creo un'altra variabile per punteggio del computer.
3. Genero un numero casuale compreso tra 1 e 6 per il giocatore e lo assegno, per esempio, a "numero_giocatore".
4. Genero un numero casuale compreso tra 1 e 6 per il computer e lo assegno, per esempio, a "pc-number".
5. Mostro il numero del giocatore e il numero del computer.
6. Aggiungo "player-number" al punteggio del giocatore.
7. Aggiungo "pc-number" al punteggio del computer.
8. Se il punteggio del giocatore è maggiore del punteggio del computer, allora:
9. Stampo un messaggio come "Il giocatore vince!"
10. Altrimenti, se il punteggio del computer è maggiore del punteggio del giocatore", allora:
11. Stampo un messaggio come "Il computer vince!"
12. Altrimenti stampo un messaggio come "È un pareggio!"
