# Lorenzo Zambardi — Personal Website

Sito personale di Lorenzo Zambardi, studente di Scienze Matematiche per l'Intelligenza Artificiale alla Sapienza di Roma e sviluppatore software.

## Caratteristiche

*   **Design**: tema dark con effetti glassmorphism, micro-animazioni e gradienti.
*   **Multilingua**: italiano e inglese, gestiti lato client in `js/translations.js`.
*   **Nessun framework**: solo HTML, CSS e JavaScript vanilla; nessuna build richiesta.
*   **Responsive**: adattabile a desktop, tablet e mobile.

## Struttura del Progetto

*   `index.html`: la struttura della pagina.
*   `css/style.css`: stili, variabili CSS e animazioni.
*   `js/main.js`: cambio lingua, animazioni, cursore personalizzato e invio del modulo di contatto.
*   `js/translations.js`: testi in italiano e inglese.
*   `CV/`: sorgente LaTeX e PDF del curriculum.
*   `img/`: immagini e favicon.

## Sviluppo locale

Essendo un sito statico, basta aprire `index.html` nel browser oppure avviare un server locale:

```bash
python3 -m http.server 8000
```

## Deploy

Il sito viene pubblicato su GitHub Pages dal branch `main` (cartella root). Per aggiornarlo:

```bash
git add .
git commit -m "descrizione della modifica"
git push origin main
```

GitHub Pages ricostruisce il sito automaticamente dopo ogni push.

## Modulo di contatto

Il modulo usa [FormSubmit](https://formsubmit.co/) in modalità AJAX. L'indirizzo di destinazione deve essere attivato tramite il link presente nell'email di FormSubmit prima di poter ricevere messaggi. Il modulo include honeypot, controllo del tempo di compilazione, cooldown lato client e una checkbox di consenso; su hosting statico non è possibile aggiungere un rate limit lato server.

## Privacy

Nome, email e messaggio sono usati esclusivamente per rispondere e non sono condivisi con terzi. I dati transitano attraverso FormSubmit, che li consegna all'indirizzo del proprietario del sito.
