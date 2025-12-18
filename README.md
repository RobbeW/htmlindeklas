# HTML in de Klas

Auteur: Robbe Wulgaert · aiindeklas.be / robbewulgaert.be  
© 2025 Robbe Wulgaert

Demo: gebruik de [GitHub Pages-link](https://robbew.github.io/htmlindeklas/) van deze repository, of download de volledige code en draai lokaal.

## Doel

Deze webapplicatie stelt leerlingen (±12–14 jaar) in staat om:

- Op een laagdrempelige, visuele manier te leren hoe HTML-webpagina’s zijn opgebouwd.
- Stap voor stap oefeningen te maken met scaffolding (startcode) per oefening.
- Direct een live preview te zien van hun webpagina (zonder externe tools).
- Feedback te krijgen via automatische controles op HTML-structuur en vereiste elementen.
- Hun werk lokaal te bewaren (geen account, geen cloud).
- Per oefening een HTML-bestand te exporteren om lokaal te testen.
- Een volledige reeks te exporteren naar één PDF met code, statistieken en verificatiegegevens.

## Vereisten

- Geen installatie nodig: werkt volledig in de browser, zowel via GitHub Pages als lokaal.

### Software & browser

- Google Chrome of een moderne Chromium/Edge-browser voor beste compatibiliteit.
- Lokaal openen kan, maar sommige browsers beperken bepaalde download/functies. Chrome werkt het meest voorspelbaar.

## Installatie en gebruik

### 1. Downloaden en starten

- Download of clone deze repository naar jouw toestel, of
- gebruik de webpagina die bij deze repository hoort (GitHub Pages).

### 2. Aan de slag

- Kies een oefening via de knoppen bovenaan (1, 2, 3, ...).
- Schrijf je HTML in de ingebouwde editor. Elke oefening bevat startcode als scaffolding.
- Klik op **Render website**:
  - Je ziet het resultaat meteen in **Live preview**.
  - Je krijgt feedback over de vereiste structuur/onderdelen.
- De titel in het tabblad van de preview wordt automatisch afgeleid uit jouw `<title>` en verschijnt als “pseudo-tab” onder *Live preview*.

### 3. Individuele export (HTML)

- Klik op **Exporteer jouw HTML** om jouw huidige oefening als `.html` op te slaan.
- Dit bestand kan je lokaal openen om te testen in je eigen browser.

### 4. Individuele export (PDF) na een correcte oplossing

- Als je oefening correct is, krijg je een keuze:
  - **Exporteer oefening (PDF)**, of
  - **Bewaar en ga verder** naar de volgende oefening.

### 5. Reeks exporteren naar één PDF

- Klik bovenaan op **Reeks exporteren naar PDF**.
- Resultaat: één PDF-bestand met per oefening:
  - titel van de oefening
  - status (correct/niet correct)
  - HTML-code
  - titel van de pagina (uit `<title>`)
  - statistieken (pogingen + tijd)
  - verificatiegegevens (datum/tijd, pagina-URL, browser, verificatie-id)

### 6. Vooruitgang wissen

- Klik op **Vooruitgang wissen**.
- Kies:
  - alleen huidige oefening, of
  - volledige reeks (inclusief opgeslagen metingen en snapshots).

## Oefeningen aanpassen

Alle oefeningen staan in `index.html` als eenvoudige JavaScript-objecten (`EXERCISES`).  
Per oefening kan je aanpassen:

- `title` (titel in de interface)
- `markdown` (instructies)
- `starter` (startcode)
- `eval` (controlelijst met vereisten)

De evaluatie werkt via transparante checks (bijv. doctype aanwezig, tags aanwezig, minimum aantal list-items, verplichte attributes op `img`, enz.).

## Leerkrachtentips

- Batch export levert één PDF per leerling/sessie. Dat is bruikbaar als bewijsstuk of evaluatiebasis.
- De verificatiegegevens en statistieken zijn bedoeld om de context van het werk te documenteren (pogingen en tijd per oefening).

## Licentie & copyright

© 2025 Robbe Wulgaert, aiindeklas.be / robbewulgaert.be  
Alle rechten voorbehouden.  
Niet herdistribueren zonder schriftelijke toestemming van de auteur.  
Gebruik in eigen klas is vrij mits duidelijke en expliciete naamsvermelding van de auteur en Sint-Lievenscollege.

## Vragen, bugs of feedback
Voor alle vragen, opmerkingen, bug reports of suggesties:
👉 Join de Discord-server: [Klik hier!](https://discord.com/invite/U77FKEQfC6)
