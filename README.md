# Cenni di D3.JS

## Cosa è
D3.js è una libreria open source per la manipolazione dei dati HTML.

- Utilizza dati statici (locali) o li legge da un server remoto.

## Formati Supportati
- Array, Oggetti, CSV, JSON, XML, ecc.

**Nota:** Useremo Plotly.js.

## Funzioni

- `d3.csv()`: Richiesta HTTP ad un URL e caricamento del file CSV,
  attraverso un callback converte i dati in oggetti.
- `d3.json()`: Stessa cosa per JSON.
- `d3.xml()`: Stessa cosa per XML.

### Sintassi
```js
d3.csv(url, [row], [callback]);
```
- **url** → URL del file CSV.
- **[row]** → Funzione di conversione per cambiare la rappresentazione dati.
- **[callback]** → (opzionale) Funzione di callback eseguita una volta caricato il file.

---

# Dataset

## Cosa è
Un dataset è una collezione di dati (esempi) contenuti in un database relazionale, indicato con una lettera `X`.

### Esempio
Una riga del dataset è caratterizzata da un insieme di valori detti *features*.

## Cardinalità
Il numero di esempi contenuti nel dataset è indicato con `||X||`.

### Utilizzo del dataset
È possibile estrarre esempi specifici, come il primo esempio:
```js
x0 = (5.1, 3.5, 1.4, 0.2, "Setosa");
```
Nel caso del dataset IRIS, la cardinalità è pari a 150, ovvero contiene 150 esempi.

---

# DOM API

## Concetto di Interfacce
L'**UI** è la componente di un sistema che si colloca tra l'utente e la macchina, offrendo un punto di accesso all'utente.

- Un'interfaccia ben progettata riduce gli errori degli utenti.
- La progettazione dell'interfaccia è fondamentale per una buona esperienza utente.

## User Interface vs User Experience

La progettazione **UX** riguarda:
- Identificazione dell'utente.
- Analisi del pubblico di destinazione.
- Definizione dei flussi.
- Sviluppo di architetture, informazioni e prototipi.

La progettazione **UI** applica le decisioni della UX in elementi visivi e interazioni.

## JS e DOM (Document Object Model)

Con **JavaScript**:
- Si può accedere e manipolare il DOM (rappresentazione della pagina nel browser).

Il **DOM**:
- Permette al codice di accedere ai contenuti testuali o elementi della pagina come oggetti JavaScript.

### DOM API
L'interfaccia di programmazione usata per modificare "al volo" il contenuto HTML o CSS degli elementi del documento.

Gli elementi della pagina web sono **nodi** (tag).

### Tipologie di nodi
- **Elemento:** `<h1>`, `<p>`, `<ul>`...
- **Testo:** Contenuto testuale all'interno dei tag.
- **Documento:** `<!DOCTYPE html>`
- **Commento:** `<!-- -->`
- **Istruzione:** `<?php echo $nome?>`

### Accesso ai nodi
```js
document.getElementById()
document.getElementsByTagName()
document.getElementsByClassName()
document.getElementsByName()
```

### Aggiungere un nodo
1. Creare un nuovo elemento:
```js
let e = document.createElement("nome");
```
2. Impostare attributi, stili, ecc.
3. Aggiungere il nuovo elemento al DOM:
```js
parent.appendChild(e);
parent.insertBefore(e, riferimento);
```

---

# Gradiente Lineare

## Definizione
Un **gradiente lineare** è una funzione a valori reali vettoriale che rappresenta il vettore delle derivate parziali di una funzione.

## Gradiente in JS
In JavaScript, i gradienti sono modelli di colore da assegnare a `fillStyle()` o `strokeStyle()` prima di utilizzare le funzioni grafiche.

### Sintassi
```js
let gradiente = ctx.createLinearGradient(x1, y1, x2, y2);
gradiente.addColorStop(P, colore);
```
- **`createLinearGradient(x1, y1, x2, y2)`**: Specifica le coordinate dei due punti tra cui verrà applicato il gradiente lineare.
- **`addColorStop(P, colore)`**: Aggiunge le posizioni (da `0` a `1`) dove cambia il colore.



APPUNTI ALDOBRANDINI:

# JavaScript DOM e Gradiente

## DOM API

JS può accedere al DOM (Document Object Model), che determina come la pagina web è rappresentata dal browser (Testo ed elementi della pagina tramite oggetti).

### Interfaccia utente
- **UX (User Experience)**: Identificazione dell’utente, analisi del pubblico, definizione dei flussi, sviluppo architetture, ecc.
- **UI (User Interface)**: Applica l’UX in elementi visivi e interazioni.

### DOM API
Interfaccia di programmazione che permette di modificare l’HTML e il CSS del documento.  
Gli elementi della pagina (tag) sono chiamati **nodi**.

#### Tipi di nodi
| Tipo di nodo | Esempio |
|-------------|---------|
| **Elemento** | `<h1>`, `<p>`, `<ul>` |
| **Testo** | `<p> Testo </p>` |
| **Documento** | `<!doctype html>` |
| **Commento** | `<!-- -->` |
| **Istruzione** | `<?php echo $testo ?>` |

### Accedere a un elemento
| Metodo | Descrizione |
|--------|------------|
| `document.getElementById(id)` | Prende un elemento con l’ID specificato |
| `document.getElementsByTagName(tag)` | Prende tutti gli elementi con il tag specificato e restituisce un array |
| `document.getElementsByClassName(class)` | Prende tutti gli elementi con la classe specificata e restituisce un array |

### Creare, aggiungere e rimuovere elementi
| Metodo | Descrizione |
|--------|------------|
| `document.createElement(tag)` | Crea un elemento HTML |
| `document.createTextNode(testo)` | Crea un nodo di testo |
| `elemento.appendChild(elemento)` | Aggiunge un elemento a un altro elemento |
| `elemento.textContent` | Ritorna il testo contenuto nell’elemento |
| `elemento.removeChild(elementoFiglio)` | Rimuove un elemento figlio, ma non lo elimina dalla memoria |
| `elemento.replaceChild(nuovoElemento, vecchioElemento)` | Sostituisce un elemento figlio con un altro |
| `elemento.insertBefore(nuovoElemento, elementoEsistente)` | Inserisce un elemento prima di un altro |

## Gradiente lineare
Il gradiente è un vettore che rappresenta la variazione di colore su un'area.

### Creazione di un gradiente
```js
var gradient = ctx.createLinearGradient(x1, y1, x2, y2);
gradient.addColorStop(0, "colore1");
gradient.addColorStop(1, "colore2");


---

JavaScript Plotly

Introduzione a Plotly

Plotly permette di creare vari tipi di grafici in JavaScript.
Per usarlo, includere la libreria nel <head> del progetto:

<script src="https://cdn.plot.ly/plotly-3.0.0.min.js" charset="utf-8"></script>

Creazione di un grafico

<div id="MyPlot" style="width:100%; max-width: 700px;"></div>

Definizione dei dati

var xArray = [val1, val2, val3];
var yArray = [val1, val2, val3];

var data = [{
    x: xArray,
    y: yArray,
    mode: "lines+markers",
    type: "scatter",
    name: "Esempio"
}];

Layout del grafico

var layout = {
    title: "Titolo del Grafico",
    xaxis: { title: "Asse X" },
    yaxis: { title: "Asse Y" },
    plot_bgcolor: "lightgrey"
};

Creazione del grafico

Plotly.newPlot("MyPlot", data, layout);

D3 e Dataset

D3.js è una libreria JavaScript per manipolare dati HTML.


