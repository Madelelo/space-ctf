# Hvordan lage en CTF 
## En kombo av JavaScript og datasikkerhet

CTF står for "capture the flag" og er en slags digital rebus hvor spillerne må løse forskjellige gåter for å finne "flagg" de kan bruke til å komme videre. 

[Sjekk ut min Space CTF her](https://madelelo.github.io/space-ctf/)

## Steg 0: Velg et tema og en historie
For eksempel, valgte jeg verdensrommet for min CTF og tar spilleren med på en reise til forskjellige planeter.

## Steg 1: Sett opp en prosjektmappe
- Opprett en prosjektmappe
- Inne i denne mappen skal du lage følgende filer: 
   - En `index.html`-fil
   - En `styles.css`-fil for styling
   - En `script.js`-fil for JavaScript

## Steg 2: Strukturer HTML-filene
- **Index (landing page)** (`index.html`):
   - Dette vil fungere som introduksjonen til din CTF. Forklar temaet ditt og send spilleren til første oppgave
- **Oppgavesider**:
   - Hver oppgaveside bør inneholde en kort beskrivelse av utfordringen, en input-boks for brukere til å sende inn sitt svar, og en knapp for å sjekke om svaret er riktig.
   - Eksempelstruktur for hver oppgave: `oppgave1.html`, `oppgave2.html`, `oppgave3.html` osv. 

## Steg 3: Implementer JavaScript-logikk
- Lag en funksjon i `script.js` for å sjekke om spillerens svar er riktig for hver oppgave. For eksempel `sjekkSvar(oppgaveNummer)`.

## Steg 4: Design oppgavene
**Oppgave 1: Encoding**
- Lag en oppgave med koding (f.eks. Base64) og legg til oppgaven i `oppgave1.html`.
- Skriv kode for å hente svar fra brukeren og sjekke det. Hvis svaret er riktig, lenk til neste oppgave.
- Lag et hint og skjul det på siden.

**Oppgave 2: Kryptering**
- Lag en oppgave med kryptering (f.eks. Caesar Cipher) og legg til oppgaven i `oppgave2.html`.
- Skriv kode for å hente svar fra brukeren og sjekke det. Hvis svaret er riktig, lenk til neste oppgave.
- Lag et hint og skjul det på siden.

**Oppgave 3: Steganografi**
- Lag en oppgave med steganografi og legg til oppgaven i `oppgave3.html`.
  For å lage et bilde med en skjult melding kan du bruke følgende kode i terminalen:
  `cat originalImage.jpg zipFileWithMessageTxt.zip > stegonographyImage.jpg`.
- Skriv kode for å hente svar fra brukeren og sjekke det. Hvis svaret er riktig, lenk til neste oppgave.
- Lag et hint og skjul det på siden.

## Steg 5: Design sidene
 Legg til passende design til ditt tema i `styles.css`

## Steg 6: Test og feilsøk
- **Test hver oppgave**: Sørg for at alle oppgavene fungerer som de skal
- **Test navigasjon**: Sørg for at alle lenker fungerer

## Steg 7: Legg til kryptering til svarene dine
Gjør det vanskeligere for spillerne å finne svarene i JavaScripten på siden. For eksempel ved å bruke `atob()`. Eller se: [https://obfuscator.io/#code](https://obfuscator.io/#code).

## Steg 8: Legg til flere oppgaver og ha det gøy!
Her er det bare å legge til flere oppgaver! Bruk verktøy og teknikker du har lært i datasikkerhet til å finne på nye oppgaver, og bruk det du har lært i JavaScript-kurset til å legge det ut. 
