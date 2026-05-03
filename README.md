# HTML in de Klas

Auteur: Robbe Wulgaert · aiindeklas.be / robbewulgaert.be  
© 2026 Robbe Wulgaert

Demo: gebruik de GitHub Pages-link van deze repository, of download de volledige code en draai lokaal via een eenvoudige webserver.

## Wat is dit?

HTML in de Klas is een lichte browseromgeving voor leerlingen die hun eerste webpagina's bouwen. De tool is bedoeld voor snel gebruik in de klas, studie of als korte opdracht naast een groter programmeertraject.

Leerlingen krijgen een opgave, schrijven HTML in de ingebouwde editor, zien meteen een live preview en krijgen automatische feedback op de gevraagde structuur. Alles blijft lokaal in de browser. Er zijn geen accounts, geen dashboard en geen installatie nodig.

## Projectstructuur

- `index.html`: productpagina met uitleg, plaats in de leerlijn en link naar de tool.
- `platform.html`: de eigenlijke oefenomgeving voor leerlingen.
- `content/catalog.json`: overzicht van hoofdstukken, concepten en oefeningen.
- `content/exercises.js`: oefeningen, startcode, checks en feedbackmetadata.
- `assets/vendor/`: lokale kopieën van de browserbibliotheken voor editor, Markdown, linting en PDF-export.
- `THIRD_PARTY_NOTICES.md`: overzicht van de gebruikte externe bibliotheken.
- `favicon.png`: projecticoon.

## Doelgroep

De webapplicatie richt zich vooral op leerlingen van ongeveer 12 tot 14 jaar die laagdrempelig willen oefenen met:

- basisstructuur van een HTML-pagina
- `head`, `title` en `body`
- koppen, alinea's en eenvoudige tekstopmaak
- afbeeldingen en attributen zoals `src`, `alt` en `width`
- geordende en ongeordende lijsten
- ingesloten inhoud via `iframe`
- creatieve synthese-oefeningen

## Features

- Opgave, editor, feedback en live preview in één scherm.
- HTML-formularium via de `?`-knop met korte syntaxhulp.
- Automatische controles via HTMLHint en eigen checks.
- Conceptfocus per oefening, bijvoorbeeld basisstructuur, tekststructuur of lijsten.
- Lokale opslag van code, status, pogingen en tijd.
- Reset van de huidige oefening of van de volledige reeks.
- Export van de huidige oefening als `.html`.
- PDF-export per oefening met code, previewtekst, conceptfocus, statistieken, verificatiegegevens en feedbackruimte voor de leerkracht.
- Gebundelde PDF-export van de reeks voor de huidige dag.
- Lokale vendorbestanden voor de belangrijkste browserbibliotheken, zodat de app minder afhankelijk is van CDN's tijdens de les.

## Aan de slag

### Via GitHub Pages

Open de productpagina en klik door naar de tool.

### Lokaal

Start bij voorkeur een eenvoudige lokale webserver in deze map:

```bash
python3 -m http.server 8000
```

Open daarna:

```text
http://127.0.0.1:8000/index.html
```

De app kan als statische site draaien. Voor de meest voorspelbare werking gebruik je Chrome of een moderne Chromium/Edge-browser.

## Oefeningen aanpassen

De oefeningen staan in `content/exercises.js`; `platform.html` laadt die inhoud tijdens het starten. Per oefening kan je aanpassen:

- `title`: titel in de interface
- `markdown`: opgave voor de leerling
- `starter`: startcode
- `eval`: controlelijst met vereisten
- `concepts`: conceptfocus voor feedback en PDF
- `summary`: korte samenvatting voor PDF-export

Het overzicht van hoofdstukken en concepten staat in `content/catalog.json`.

## Leerkrachtentips

- Gebruik de PDF-export als bewijs van werk of als basis voor feedback.
- De verificatiegegevens en statistieken geven context: wanneer werd het werk opgeslagen, hoeveel pogingen waren er en hoeveel tijd werd geregistreerd?
- De tool is bewust licht gehouden. Voor een volledige leeromgeving met accounts, dashboards en uitgebreide opvolging blijft een platform zoals Dodona geschikter.

## Licentie & copyright

© 2026 Robbe Wulgaert, aiindeklas.be / robbewulgaert.be  
Alle rechten voorbehouden.  
Niet herdistribueren zonder schriftelijke toestemming van de auteur.  
Gebruik in eigen klas is vrij mits duidelijke en expliciete naamsvermelding van de auteur en Sint-Lievenscollege.

## Vragen, bugs of feedback

Gebruik het contactformulier of de Discord-server om bugs, vragen of suggesties door te geven.
