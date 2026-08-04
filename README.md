# Lorenzo Zambardi - Personal Website

Sito web personale di Lorenzo Zambardi, studente di Statistica, Matematica e Intelligenza Artificiale alla Sapienza di Roma e sviluppatore software.

## Caratteristiche

*   **Design Moderno**: Tema Dark Premium con effetti Glassmorphism, micro-animazioni e gradienti.
*   **Multilingua**: Supporto nativo per Italiano e Inglese (gestito tramite JavaScript vanilla in `js/translations.js`).
*   **Performance**: Estremamente leggero, basato interamente su HTML, CSS e JS nativi. Nessun framework esterno.
*   **Responsive**: Adattabile a desktop, tablet e mobile.

## Istruzioni per il Deploy su GitHub Pages

Questo progetto è pronto per essere pubblicato gratuitamente su GitHub Pages utilizzando il dominio `lorenzozambardi.github.io`. Segui questi passaggi:

### 1. Crea il Repository su GitHub

1.  Accedi al tuo account GitHub.
2.  Crea un nuovo repository cliccando sul tasto **New**.
3.  **Importante**: Il nome del repository DEVE essere esattamente `lorenzozambardi.github.io`.
4.  Mantieni il repository **Public**.
5.  Non inizializzare il repository con README, .gitignore o licenze (lascia tutto vuoto) e clicca su **Create repository**.

### 2. Carica il codice

Apri il terminale nella cartella del progetto e lancia i seguenti comandi (sostituendo `<URL_DEL_TUO_REPO>` con l'URL fornito da GitHub, es: `https://github.com/lorenzozambardi/lorenzozambardi.github.io.git`):

```bash
git init
git add .
git commit -m "Primo rilascio del sito personale"
git branch -M main
git remote add origin <URL_DEL_TUO_REPO>
git push -u origin main
```

### 3. Attiva GitHub Pages

1.  Vai sulla pagina del tuo repository su GitHub.
2.  Clicca su **Settings** (Impostazioni) in alto.
3.  Nella barra laterale sinistra, sotto la sezione "Code and automation", clicca su **Pages**.
4.  Sotto "Build and deployment", seleziona **Deploy from a branch** come "Source".
5.  Sotto "Branch", seleziona `main` e `/ (root)` e clicca su **Save**.
6.  Attendi un paio di minuti. Vedrai comparire un avviso verde in alto nella pagina di configurazione di Pages con il link al tuo sito live: `https://lorenzozambardi.github.io/`.

## Struttura del Progetto

*   `index.html`: La struttura della pagina.
*   `css/style.css`: Tutti gli stili, variabili CSS e animazioni.
*   `js/main.js`: Logica per il cambio lingua, smooth scrolling e observer per le animazioni al fade-in.
*   `js/translations.js`: Dizionario dei testi in italiano e inglese. Puoi facilmente modificarli da qui.
