// Auto-extracted content for HTML in de Klas.
// Edit this file to update exercises without touching platform code.
window.HTMLK_CONTENT = {
  "version": 1,
  "project": "HTML in de Klas",
  "concepts": {
    "document_structure": {
      "label": "basisstructuur",
      "description": "Je bouwt een geldige HTML-pagina met doctype, html, head en body."
    },
    "metadata_title": {
      "label": "metadata en title",
      "description": "Je gebruikt de head en title om informatie over de pagina vast te leggen."
    },
    "text_structure": {
      "label": "tekststructuur",
      "description": "Je gebruikt koppen, alinea’s en tekstopmaak om inhoud duidelijk te structureren."
    },
    "attributes_media": {
      "label": "media en attributen",
      "description": "Je gebruikt attributen zoals src, alt en width om media correct te tonen."
    },
    "lists": {
      "label": "lijsten",
      "description": "Je ordent inhoud met ol, ul en li."
    },
    "embed": {
      "label": "ingesloten inhoud",
      "description": "Je voegt inhoud van buitenaf toe met een iframe."
    },
    "synthesis": {
      "label": "synthese",
      "description": "Je combineert meerdere HTML-bouwstenen in een eigen pagina."
    }
  },
  "chapters": [
    {
      "id": "basisstructuur",
      "title": "Basisstructuur",
      "order": 1,
      "description": "De eerste bouwstenen van een geldige HTML-pagina."
    },
    {
      "id": "tekststructuur",
      "title": "Tekststructuur",
      "order": 2,
      "description": "Koppen, alinea’s en eenvoudige tekstopmaak."
    },
    {
      "id": "media-lijsten",
      "title": "Media en lijsten",
      "order": 3,
      "description": "Afbeeldingen, attributen, lijsten en ingesloten inhoud."
    },
    {
      "id": "synthese",
      "title": "Synthese",
      "order": 4,
      "description": "Vrijere pagina’s waarin leerlingen de bouwstenen combineren."
    }
  ],
  "exercises": [
    {
      "title": "Oefening 1 — Basisstructuur HTML",
      "markdown": "# Basisstructuur HTML\n\n## Gegeven\nWanneer we een basiswebpagina willen maken, schrijven we eerst de **basisstructuur** neer van onze HTML-code.\n\nEen basis-HTML-pagina bestaat uit volgende **elementen**:\n- `<!DOCTYPE html>`\n- `<html>`\n- `<head>`\n- `<body>`\n- afsluitende `</html>`\n\n## Gevraagd\n- Schrijf hieronder de basisstructuur van een HTML-pagina.\n- Voeg deze onderdelen toe: doctype, html, head, body, afsluitende html-tag.\n\n> **Tips**\n> - Openen: `<tag>`\n> - Sluiten: `</tag>`",
      "starter": "<!DOCTYPE html>\n<...>\n\n\n</...>",
      "eval": {
        "enforceText": false,
        "checks": [
          {
            "kind": "doctype"
          },
          {
            "kind": "tag",
            "selector": "html",
            "sourceRequired": true
          },
          {
            "kind": "tag",
            "selector": "head",
            "sourceRequired": true
          },
          {
            "kind": "tag",
            "selector": "body",
            "sourceRequired": true
          }
        ]
      },
      "id": "ex01-basisstructuur",
      "chapterId": "basisstructuur",
      "concepts": [
        "document_structure"
      ],
      "estimatedMinutes": 5,
      "summary": "Basisstructuur van een HTML-pagina.",
      "order": 1
    },
    {
      "title": "Oefening 2 — Hallo wereld, hallo HTML!",
      "markdown": "# Hallo wereld, hallo HTML!\n\n## Gegeven\n\"Hello world\" is vaak de eerste output in een nieuwe taal.\n\n## Gevraagd\n- Schrijf de basisstructuur van een HTML-pagina.\n- Voeg in de body de tekst **Hallo Wereld!** toe.\n\n```\n...\n<body>\nHallo Wereld!\n</body>\n...\n```\n\n> Tip: juiste openingstags en sluitingstags.",
      "starter": "<!DOCTYPE html>\n<html lang=\"nl\">",
      "eval": {
        "enforceText": true,
        "checks": [
          {
            "kind": "doctype"
          },
          {
            "kind": "tag",
            "selector": "html",
            "sourceRequired": true
          },
          {
            "kind": "tag",
            "selector": "head",
            "sourceRequired": true
          },
          {
            "kind": "tag",
            "selector": "body",
            "sourceRequired": true
          },
          {
            "kind": "textContains",
            "selector": "body",
            "text": "Hallo Wereld",
            "textCheck": true
          }
        ]
      },
      "id": "ex02-hallo-html",
      "chapterId": "basisstructuur",
      "concepts": [
        "document_structure"
      ],
      "estimatedMinutes": 5,
      "summary": "Basisstructuur met zichtbare tekst in de body.",
      "order": 2
    },
    {
      "title": "Oefening 3 — Een Goede Titel",
      "markdown": "# Een Goede Titel\n\nDe `<title>` staat in de **head** en verschijnt op het tabblad. Dat is niet hetzelfde als een kop (`h1`) op je pagina.\n\n## Gevraagd\n- Schrijf een HTML-pagina voor jouw favoriete gerecht.\n- Gebruik de basisstructuur.\n- Zet in de head: `<title>Mijn Favoriete Gerecht</title>`\n- In de body: zet de tekst **Vegetarisch Kapsalon**.\n\n> Tip: juiste openingstags en sluitingstags.",
      "starter": "<!DOCTYPE html>",
      "eval": {
        "enforceText": true,
        "checks": [
          {
            "kind": "doctype"
          },
          {
            "kind": "tag",
            "selector": "html",
            "sourceRequired": true
          },
          {
            "kind": "tag",
            "selector": "head",
            "sourceRequired": true
          },
          {
            "kind": "tag",
            "selector": "body",
            "sourceRequired": true
          },
          {
            "kind": "tag",
            "selector": "title"
          },
          {
            "kind": "titleEquals",
            "value": "Mijn Favoriete Gerecht",
            "textCheck": true
          },
          {
            "kind": "textContains",
            "selector": "body",
            "text": "Vegetarisch Kapsalon",
            "textCheck": true
          }
        ]
      },
      "id": "ex03-title",
      "chapterId": "basisstructuur",
      "concepts": [
        "document_structure",
        "metadata_title"
      ],
      "estimatedMinutes": 7,
      "summary": "Verschil tussen de title in de head en zichtbare inhoud in de body.",
      "order": 3
    },
    {
      "title": "Oefening 4 — Koppen in HTML",
      "markdown": "# Koppen in HTML: Leren van Boeken en Kranten\n\nKoppen structureren je pagina: `h1` (hoofdkop), `h2` (subkop), ...\n\n## Gevraagd\n- Maak een pagina over jouw favoriete gerecht.\n- `<title>Mijn Favoriete Gerecht</title>`\n- In de body:\n  - `<h1>` met de naam van het gerecht\n  - `<h2>` met een subtitel (bv. \"Waarom dit mijn favoriet is\")\n\n```\n<body>\n  <h1>Vegetarisch Kapsalon</h1>\n  <h2>Waarom dit mijn favoriet is</h2>\n</body>\n```",
      "starter": "<!DOCTYPE html>",
      "eval": {
        "enforceText": false,
        "checks": [
          {
            "kind": "doctype"
          },
          {
            "kind": "tag",
            "selector": "html",
            "sourceRequired": true
          },
          {
            "kind": "tag",
            "selector": "head",
            "sourceRequired": true
          },
          {
            "kind": "tag",
            "selector": "body",
            "sourceRequired": true
          },
          {
            "kind": "tag",
            "selector": "title"
          },
          {
            "kind": "tag",
            "selector": "h1"
          },
          {
            "kind": "tag",
            "selector": "h2"
          },
          {
            "kind": "nonEmpty",
            "selector": "h1"
          },
          {
            "kind": "nonEmpty",
            "selector": "h2"
          }
        ]
      },
      "id": "ex04-koppen",
      "chapterId": "tekststructuur",
      "concepts": [
        "text_structure"
      ],
      "estimatedMinutes": 7,
      "summary": "Koppen gebruiken om een webpagina te structureren.",
      "order": 4
    },
    {
      "title": "Oefening 5 — Alinea's in HTML",
      "markdown": "# Alinea's in HTML: Vertel het Verhaal van je Gerecht\n\nAlinea's maak je met `<p>`.\n\n## Gevraagd\n- Maak een HTML-pagina over **Vegetarisch Kapsalon**.\n- `<title>Het Verhaal van achter het Kapsalon</title>`\n- In de body:\n  - `<h1>Vegetarisch Kapsalon</h1>`\n  - `<h2>De Geschiedenis</h2>`\n  - minstens 1 alinea (`p`) met een korte uitleg.",
      "starter": "<!DOCTYPE html>",
      "eval": {
        "enforceText": true,
        "checks": [
          {
            "kind": "doctype"
          },
          {
            "kind": "tag",
            "selector": "html",
            "sourceRequired": true
          },
          {
            "kind": "tag",
            "selector": "head",
            "sourceRequired": true
          },
          {
            "kind": "tag",
            "selector": "body",
            "sourceRequired": true
          },
          {
            "kind": "titleEquals",
            "value": "Het Verhaal van achter het Kapsalon",
            "textCheck": true
          },
          {
            "kind": "textEquals",
            "selector": "h1",
            "value": "Vegetarisch Kapsalon",
            "textCheck": true
          },
          {
            "kind": "textEquals",
            "selector": "h2",
            "value": "De Geschiedenis",
            "textCheck": true
          },
          {
            "kind": "tag",
            "selector": "p"
          },
          {
            "kind": "minTextLength",
            "selector": "p",
            "n": 20
          }
        ]
      },
      "id": "ex05-alineas",
      "chapterId": "tekststructuur",
      "concepts": [
        "text_structure"
      ],
      "estimatedMinutes": 8,
      "summary": "Alinea’s toevoegen en voldoende inhoud schrijven.",
      "order": 5
    },
    {
      "title": "Oefening 6 — Afbeeldingen in HTML",
      "markdown": "# Afbeeldingen in HTML: Breng je Gerecht tot Leven\n\nGebruik `<img>` met `src`, `alt` en `width`.\n\n## Gevraagd\n- Maak een pagina over **Kapsalon**.\n- `<title>Het Verhaal van Kapsalon</title>`\n- In de body:\n  - `<h1>Kapsalon</h1>`\n  - `<h2>De Geschiedenis</h2>`\n  - een alinea\n  - een afbeelding met `src`, `alt`, `width`",
      "starter": "<!DOCTYPE html>\n...\n\n  <img src=\"\" alt=\"Afbeelding van een schotel Kapsalon\" width=\"50%\">\n...",
      "eval": {
        "enforceText": true,
        "checks": [
          {
            "kind": "doctype"
          },
          {
            "kind": "tag",
            "selector": "html",
            "sourceRequired": true
          },
          {
            "kind": "tag",
            "selector": "head",
            "sourceRequired": true
          },
          {
            "kind": "tag",
            "selector": "body",
            "sourceRequired": true
          },
          {
            "kind": "titleEquals",
            "value": "Het Verhaal van Kapsalon",
            "textCheck": true
          },
          {
            "kind": "textEquals",
            "selector": "h1",
            "value": "Kapsalon",
            "textCheck": true
          },
          {
            "kind": "textEquals",
            "selector": "h2",
            "value": "De Geschiedenis",
            "textCheck": true
          },
          {
            "kind": "tag",
            "selector": "p"
          },
          {
            "kind": "minTextLength",
            "selector": "p",
            "n": 20
          },
          {
            "kind": "tag",
            "selector": "img"
          },
          {
            "kind": "attrPresent",
            "selector": "img",
            "attr": "src"
          },
          {
            "kind": "attrPresent",
            "selector": "img",
            "attr": "alt"
          },
          {
            "kind": "attrPresent",
            "selector": "img",
            "attr": "width"
          }
        ]
      },
      "id": "ex06-afbeeldingen",
      "chapterId": "media-lijsten",
      "concepts": [
        "attributes_media"
      ],
      "estimatedMinutes": 8,
      "summary": "Afbeeldingen toevoegen met src, alt en width.",
      "order": 6
    },
    {
      "title": "Oefening 7 — Geordende lijsten (ol)",
      "markdown": "# Geordende Lijsten in HTML: Stap-voor-stap Recepten\n\nGebruik `<ol>` met `<li>` items.\n\n## Gevraagd\n- Maak een pagina over **Vegetarisch Kapsalon**.\n- `<title>Het Verhaal van Kapsalon</title>`\n- In de body: `h1`, `h2` (\"Het Recept\"), alinea, afbeelding, en een **geordende lijst** met de stappen van het recept.",
      "starter": "<!DOCTYPE html>\n...\n\n  <img src=\"\" alt=\"Afbeelding van een schotel Kapsalon\" width=\"50%\">\n\n  <ol>\n    <li></li>\n  </ol>\n\n...",
      "eval": {
        "enforceText": false,
        "checks": [
          {
            "kind": "doctype"
          },
          {
            "kind": "tag",
            "selector": "html",
            "sourceRequired": true
          },
          {
            "kind": "tag",
            "selector": "head",
            "sourceRequired": true
          },
          {
            "kind": "tag",
            "selector": "body",
            "sourceRequired": true
          },
          {
            "kind": "tag",
            "selector": "ol"
          },
          {
            "kind": "minCount",
            "selector": "ol li",
            "n": 7
          },
          {
            "kind": "tag",
            "selector": "img"
          },
          {
            "kind": "attrPresent",
            "selector": "img",
            "attr": "src"
          },
          {
            "kind": "attrPresent",
            "selector": "img",
            "attr": "alt"
          },
          {
            "kind": "attrPresent",
            "selector": "img",
            "attr": "width"
          }
        ]
      },
      "id": "ex07-geordende-lijsten",
      "chapterId": "media-lijsten",
      "concepts": [
        "lists"
      ],
      "estimatedMinutes": 9,
      "summary": "Een stappenplan maken met een geordende lijst.",
      "order": 7
    },
    {
      "title": "Oefening 8 — Ongeordende lijsten (ul)",
      "markdown": "# Ongeordende Lijsten in HTML: Boodschappenlijstje\n\nGebruik `<ul>` met `<li>`.\n\n## Gevraagd\n- Maak een pagina over **Vegetarisch Kapsalon**.\n- Op deze pagina beschrijven we de items van ons boodschappenlijstje.\n- Gebruik: title, h1, h2, img, **ol** (stappen), **ul** (ingrediënten).\n- Voor de ul: minstens 6 ingrediënten.",
      "starter": "<!DOCTYPE html>\n...\n  <ol>\n    <li></li>\n  </ol>\n\n  <ul>\n    <li></li>\n  </ul>\n\n...",
      "eval": {
        "enforceText": false,
        "checks": [
          {
            "kind": "doctype"
          },
          {
            "kind": "tag",
            "selector": "html",
            "sourceRequired": true
          },
          {
            "kind": "tag",
            "selector": "head",
            "sourceRequired": true
          },
          {
            "kind": "tag",
            "selector": "body",
            "sourceRequired": true
          },
          {
            "kind": "tag",
            "selector": "ol"
          },
          {
            "kind": "minCount",
            "selector": "ol li",
            "n": 3
          },
          {
            "kind": "tag",
            "selector": "ul"
          },
          {
            "kind": "minCount",
            "selector": "ul li",
            "n": 6
          },
          {
            "kind": "tag",
            "selector": "img"
          },
          {
            "kind": "attrPresent",
            "selector": "img",
            "attr": "src"
          },
          {
            "kind": "attrPresent",
            "selector": "img",
            "attr": "alt"
          },
          {
            "kind": "attrPresent",
            "selector": "img",
            "attr": "width"
          }
        ]
      },
      "id": "ex08-ongeordende-lijsten",
      "chapterId": "media-lijsten",
      "concepts": [
        "lists"
      ],
      "estimatedMinutes": 9,
      "summary": "Een boodschappenlijst maken met een ongeordende lijst.",
      "order": 8
    },
    {
      "title": "Oefening 9 — Video toevoegen",
      "markdown": "# Video Toevoegen aan Jouw Webpagina\n\nGebruik een ingesloten video via `<iframe>` (bv. YouTube embed).\n\n## Gevraagd\n- Werk verder op je pagina van de vorige oefeningen.\n- Voeg een relevante video toe met `<iframe>`.",
      "starter": "<!-- Start vanuit jouw vorige oefening of gebruik deze basisstructuur. -->\n<!DOCTYPE html>\n<html lang=\"nl\">\n<head>\n  <title>Mijn pagina met video</title>\n</head>\n<body>\n\n</body>\n</html>",
      "eval": {
        "enforceText": false,
        "checks": [
          {
            "kind": "doctype"
          },
          {
            "kind": "tag",
            "selector": "html",
            "sourceRequired": true
          },
          {
            "kind": "tag",
            "selector": "head",
            "sourceRequired": true
          },
          {
            "kind": "tag",
            "selector": "body",
            "sourceRequired": true
          },
          {
            "kind": "tag",
            "selector": "iframe"
          },
          {
            "kind": "attrPresent",
            "selector": "iframe",
            "attr": "src"
          }
        ]
      },
      "id": "ex09-video",
      "chapterId": "media-lijsten",
      "concepts": [
        "embed",
        "attributes_media"
      ],
      "estimatedMinutes": 7,
      "summary": "Een video of andere externe inhoud insluiten met iframe.",
      "starterFromPrevious": true,
      "previousExerciseIdx": 7,
      "order": 9,
      "fallbackStarter": "\nStart met de code van jouw vorige oefening."
    },
    {
      "title": "Creatieve oefening 10 — Synthese: Favoriete gerecht",
      "markdown": "# Synthese - Jouw Eigen Favoriete Gerecht\n\n## Gevraagd\nMaak een HTML-pagina voor jouw eigen favoriete gerecht.\n\nZorg dat deze elementen aanwezig zijn:\n- `title`\n- `h1`, `h2`\n- minstens 1 `p`\n- `img` (src + alt + width)\n- `ol` (minstens 3 items)\n- `ul` (minstens 3 items)\n- `iframe` (met src)",
      "starter": "\n...",
      "eval": {
        "enforceText": false,
        "checks": [
          {
            "kind": "doctype"
          },
          {
            "kind": "tag",
            "selector": "html",
            "sourceRequired": true
          },
          {
            "kind": "tag",
            "selector": "head",
            "sourceRequired": true
          },
          {
            "kind": "tag",
            "selector": "body",
            "sourceRequired": true
          },
          {
            "kind": "tag",
            "selector": "title"
          },
          {
            "kind": "tag",
            "selector": "h1"
          },
          {
            "kind": "tag",
            "selector": "h2"
          },
          {
            "kind": "minCount",
            "selector": "p",
            "n": 1
          },
          {
            "kind": "tag",
            "selector": "img"
          },
          {
            "kind": "attrPresent",
            "selector": "img",
            "attr": "src"
          },
          {
            "kind": "attrPresent",
            "selector": "img",
            "attr": "alt"
          },
          {
            "kind": "attrPresent",
            "selector": "img",
            "attr": "width"
          },
          {
            "kind": "tag",
            "selector": "ol"
          },
          {
            "kind": "minCount",
            "selector": "ol li",
            "n": 3
          },
          {
            "kind": "tag",
            "selector": "ul"
          },
          {
            "kind": "minCount",
            "selector": "ul li",
            "n": 3
          },
          {
            "kind": "tag",
            "selector": "iframe"
          },
          {
            "kind": "attrPresent",
            "selector": "iframe",
            "attr": "src"
          }
        ]
      },
      "id": "ex10-synthese-gerecht",
      "chapterId": "synthese",
      "concepts": [
        "synthesis"
      ],
      "estimatedMinutes": 15,
      "summary": "Een eigen pagina maken met structuur, tekst, media, lijsten en embed.",
      "order": 10
    },
    {
      "title": "Creatieve oefening 11 — Synthese: Favoriete artiest",
      "markdown": "# Synthese - Jouw Favoriete Artiest\n\n## Gevraagd\nMaak een HTML-pagina voor jouw favoriete artiest.\n\nZorg dat aanwezig is:\n- `title` (tabblad)\n- `h1` hoofdtitel\n- minstens 2 subtitels (`h2`)\n- minstens 2 alinea's (`p`)\n- minstens 1 vet woord (`<b>` of `<strong>`)\n- minstens 1 schuingedrukt woord (`<i>` of `<em>`)\n- `img`\n- `iframe`\n- een lijst met albums (ol of ul) met minstens 3 items",
      "starter": "\n...",
      "eval": {
        "enforceText": false,
        "checks": [
          {
            "kind": "doctype"
          },
          {
            "kind": "tag",
            "selector": "html",
            "sourceRequired": true
          },
          {
            "kind": "tag",
            "selector": "head",
            "sourceRequired": true
          },
          {
            "kind": "tag",
            "selector": "body",
            "sourceRequired": true
          },
          {
            "kind": "tag",
            "selector": "title"
          },
          {
            "kind": "nonEmpty",
            "selector": "title"
          },
          {
            "kind": "tag",
            "selector": "h1"
          },
          {
            "kind": "nonEmpty",
            "selector": "h1"
          },
          {
            "kind": "minCount",
            "selector": "h2",
            "n": 2
          },
          {
            "kind": "minCount",
            "selector": "p",
            "n": 2
          },
          {
            "kind": "anySelector",
            "selectors": [
              "b",
              "strong"
            ]
          },
          {
            "kind": "anySelector",
            "selectors": [
              "i",
              "em"
            ]
          },
          {
            "kind": "tag",
            "selector": "img"
          },
          {
            "kind": "attrPresent",
            "selector": "img",
            "attr": "src"
          },
          {
            "kind": "attrPresent",
            "selector": "img",
            "attr": "alt"
          },
          {
            "kind": "tag",
            "selector": "iframe"
          },
          {
            "kind": "attrPresent",
            "selector": "iframe",
            "attr": "src"
          },
          {
            "kind": "anySelector",
            "selectors": [
              "ol",
              "ul"
            ]
          },
          {
            "kind": "minCountEitherList",
            "n": 3
          }
        ]
      },
      "id": "ex11-synthese-artiest",
      "chapterId": "synthese",
      "concepts": [
        "synthesis",
        "text_structure",
        "attributes_media"
      ],
      "estimatedMinutes": 18,
      "summary": "Een creatieve pagina over een artiest bouwen.",
      "order": 11
    },
    {
      "title": "Creatieve opdracht 12 — Synthese: Favoriete film",
      "markdown": "# Synthese - Jouw Favoriete Film\n\n## Gevraagd\nMaak een HTML-pagina voor jouw favoriete film.\n\nZorg dat aanwezig is:\n- `title`\n- `h1`\n- minstens 2 subtitels (`h2`)\n- minstens 2 alinea's (`p`)\n- minstens 1 vet en 1 schuingedrukt woord\n- `img`\n- `iframe`\n- lijst met minstens 5 acteurs (ol of ul)",
      "starter": "\n...",
      "eval": {
        "enforceText": false,
        "checks": [
          {
            "kind": "doctype"
          },
          {
            "kind": "tag",
            "selector": "html",
            "sourceRequired": true
          },
          {
            "kind": "tag",
            "selector": "head",
            "sourceRequired": true
          },
          {
            "kind": "tag",
            "selector": "body",
            "sourceRequired": true
          },
          {
            "kind": "tag",
            "selector": "title"
          },
          {
            "kind": "nonEmpty",
            "selector": "title"
          },
          {
            "kind": "tag",
            "selector": "h1"
          },
          {
            "kind": "nonEmpty",
            "selector": "h1"
          },
          {
            "kind": "minCount",
            "selector": "h2",
            "n": 2
          },
          {
            "kind": "minCount",
            "selector": "p",
            "n": 2
          },
          {
            "kind": "anySelector",
            "selectors": [
              "b",
              "strong"
            ]
          },
          {
            "kind": "anySelector",
            "selectors": [
              "i",
              "em"
            ]
          },
          {
            "kind": "tag",
            "selector": "img"
          },
          {
            "kind": "attrPresent",
            "selector": "img",
            "attr": "src"
          },
          {
            "kind": "attrPresent",
            "selector": "img",
            "attr": "alt"
          },
          {
            "kind": "tag",
            "selector": "iframe"
          },
          {
            "kind": "attrPresent",
            "selector": "iframe",
            "attr": "src"
          },
          {
            "kind": "anySelector",
            "selectors": [
              "ol",
              "ul"
            ]
          },
          {
            "kind": "minCountEitherList",
            "n": 5
          }
        ]
      },
      "id": "ex12-synthese-film",
      "chapterId": "synthese",
      "concepts": [
        "synthesis",
        "text_structure",
        "attributes_media"
      ],
      "estimatedMinutes": 18,
      "summary": "Een creatieve pagina over een film bouwen.",
      "order": 12
    },
    {
      "title": "Creatieve opdracht 13 — Synthese: Favoriete dier",
      "markdown": "# Synthese - Jouw Favoriete Dier\n\n## Gevraagd\nMaak een HTML-pagina voor jouw favoriete dier.\n\nZorg dat aanwezig is:\n- `title`\n- `h1`\n- minstens 2 subtitels (`h2`)\n- minstens 2 alinea's (`p`)\n- minstens 1 vet en 1 schuingedrukt woord\n- `img`\n- `iframe`\n- lijst met 5 naamvoorstellen (ol of ul)",
      "starter": "\n...",
      "eval": {
        "enforceText": false,
        "checks": [
          {
            "kind": "doctype"
          },
          {
            "kind": "tag",
            "selector": "html",
            "sourceRequired": true
          },
          {
            "kind": "tag",
            "selector": "head",
            "sourceRequired": true
          },
          {
            "kind": "tag",
            "selector": "body",
            "sourceRequired": true
          },
          {
            "kind": "tag",
            "selector": "title"
          },
          {
            "kind": "nonEmpty",
            "selector": "title"
          },
          {
            "kind": "tag",
            "selector": "h1"
          },
          {
            "kind": "nonEmpty",
            "selector": "h1"
          },
          {
            "kind": "minCount",
            "selector": "h2",
            "n": 2
          },
          {
            "kind": "minCount",
            "selector": "p",
            "n": 2
          },
          {
            "kind": "anySelector",
            "selectors": [
              "b",
              "strong"
            ]
          },
          {
            "kind": "anySelector",
            "selectors": [
              "i",
              "em"
            ]
          },
          {
            "kind": "tag",
            "selector": "img"
          },
          {
            "kind": "attrPresent",
            "selector": "img",
            "attr": "src"
          },
          {
            "kind": "attrPresent",
            "selector": "img",
            "attr": "alt"
          },
          {
            "kind": "tag",
            "selector": "iframe"
          },
          {
            "kind": "attrPresent",
            "selector": "iframe",
            "attr": "src"
          },
          {
            "kind": "anySelector",
            "selectors": [
              "ol",
              "ul"
            ]
          },
          {
            "kind": "minCountEitherList",
            "n": 5
          }
        ]
      },
      "id": "ex13-synthese-dier",
      "chapterId": "synthese",
      "concepts": [
        "synthesis",
        "text_structure",
        "attributes_media"
      ],
      "estimatedMinutes": 18,
      "summary": "Een creatieve pagina over een dier bouwen.",
      "order": 13
    },
    {
      "title": "Oefening 14 — Tekst exact namaken",
      "markdown": "\n# Basisstructuur HTML\n\n## Gegeven\n\nRichard Ayoade\n\n**Richard Ayoade** (<u>born 23 May 1977</u>) is a British comedian, actor, writer, director, and presenter. He played the role of socially awkward IT technician **Maurice Moss** in Channel 4 sitcom *The IT Crowd*(2006–2013), for which he won the 2014 **BAFTA** for Best Male Comedy Performance. \n\nAyoade has written three comedic film-focused books: ***Ayoade on Ayoade: A Cinematic Odyssey*** (2014), *<u>The Grip of Film</u>* (2017), and **<u>Ayoade on Top</u>** (2019), as well as the children's book ***<u>The Book That No One Wanted to Read</u>*** (2022), illustrated by Tor Freeman. \n\n## Gevraagd\n- Maak bovenstaande tekst zo **exact** mogelijk na in HTML",
      "starter": "<!DOCTYPE html>",
      "eval": {
        "enforceText": true,
        "checks": [
          {
            "kind": "doctype"
          },
          {
            "kind": "tag",
            "selector": "html",
            "sourceRequired": true
          },
          {
            "kind": "tag",
            "selector": "head",
            "sourceRequired": true
          },
          {
            "kind": "tag",
            "selector": "body",
            "sourceRequired": true
          },
          {
            "kind": "tag",
            "selector": "title"
          },
          {
            "kind": "textContains",
            "selector": "body",
            "text": "Richard Ayoade",
            "textCheck": true
          },
          {
            "kind": "minCount",
            "selector": "p",
            "n": 2
          },
          {
            "kind": "anySelector",
            "selectors": [
              "b",
              "strong"
            ]
          },
          {
            "kind": "anySelector",
            "selectors": [
              "i",
              "em"
            ]
          },
          {
            "kind": "tag",
            "selector": "u"
          }
        ]
      },
      "id": "ex14-tekst-namaken",
      "chapterId": "tekststructuur",
      "concepts": [
        "text_structure"
      ],
      "estimatedMinutes": 12,
      "summary": "Een gegeven tekst zo nauwkeurig mogelijk structureren met HTML.",
      "order": 14
    }
  ]
};
window.HTMLK_EXERCISES = window.HTMLK_CONTENT.exercises;
