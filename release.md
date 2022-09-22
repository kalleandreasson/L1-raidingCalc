# Mall för inlämning laboration 1, 1dv610
​
## Checklista
  - [x] Jag har skrivit all kod och reflektioner själv. Jag har inte använt mig av andras kod för att lösa uppgiften.
  - [x] Mina testresultat är skrivna utifrån utförd testning ( och inte teoretiskt: "det bör fungera" :) )
  - [x] Koden är objektorienterad
  - [x] Jag har skrivit en modul som riktar sig till programmerare
​
## Egenskattning och mål
  - [x] Jag är inte klar eftersom jag vet att jag saknar något. (Då skall du inte lämna in! Lämna då istället in på restlaboration.)
  - [x] Jag eftersträvar med denna inlämning godkänt betyg (E-D)
    - [x] De flesta testfall fungerar
    - [x] Koden är förberedd på Återanvändning
    - [x] All kod samt historik finns i git 
    - [x] Kodkvaliterskraven är ifyllda
    - [x] Reflektion är skriven utifrån bokens kapitel 
  - [ ] Jag eftersträvar med denna inlämning högre betyg (C-B) och anser mig uppfylla alla extra krav för detta. 
    - [ ] Samtliga testfall är skrivna    
    - [ ] Testfall är automatiserade
    - [ ] Det finns en tydlig beskrivning i hur modulen skall användas (i git)
    - [ ] Kodkvalitetskraven är varierade 
  - [ ] Jag eftersträvar med denna inlämning högsta betyg (A) 
​
Förtydligande: Examinator kommer sätta betyg oberoende på vad ni anser. 
​
## Återanvändning
Beskriv hur du anpassat din kod och instruktioner för att någon annan programmerare skall kunna använda din modul. Om du skrivit instruktioner för din användare, länka till dessa. Om inte, beskriv här hur någon skall göra för att använda din modul.

Jag har byggt ett API med 5st endpoints med base API endpoint: https://cscloud7-246.lnu.se/rust-raid-calc/ <br>
/costAll - GET<br>
/cost - POST<br>
/buildCost - POST<br>
/raidCheapestWay - POST<br>
/raidFastestWay - POST<br>
I repot finns det en fil som heter 'exampleApp.js' där alla API endpoints demonstreras att dom fungerar.<br>

Tanken är att min module kommer hjälpa folk som bygger appar som kretsar runt spelet Rust. Min module skickar tillbaka json response med information om hur man bäst förstör väggar i Rust. Samt information om hur mycket en vägg kostar att bygga. 

​
## Beskrivning av min kod
Beskriv din kod på en hög abstraktionsnivå. En kort beskrivning av dina viktigaste klasser och metoder. Skapa gärna ett klassdiagram som bild. Använd det ni lärt er så här långt i 1dv607. Kommunicera så att jag kan förstå.
​
## Hur jag testat
Beskriv hur du kommit fram till om din kod fungerar.<br>
<br>
Jag har testat mina API endpoints ett flertal gånger med hjälp av Postman.

​
### Testfall
Lista de enskilda testfallen. **Fetmarkera** sådant som du själv fyllt i. En rad per testfall. Om ni använder vertyg för testning kan ni ha en bild här med testrapporten. Tänk på att kommunicera till mig. Vad fungerar?, vad fungerar inte? Hur är det testat? Vilka delar testas inte? <br>
​<br>
Jag har utfört manuella tester på alla mina API endpoints, jag har dokumenterat allt i filen som heter Testrapport.md
​
​
## Kodkvalitetskrav
​
**Fetmarkera** de "regler" som används ur CC. Ni kan frångå tabellformat om ni vill. Skapa direktlänkar till er kod där det är lämpligt. Skriv så att jag kan förstå.
​
### Namngivning
​
| Namn och förklaring  | Reflektion                                   |
| -------------------  | ---------------------------------------------|
| **damageArray**<br> Namn på property i objekt | **Make Meaningful Distinctions** Jag använder ett variable word vilket är 'Array' om jag hade haft ett bättre namn hade jag inte behövt ha 'Array' i namnet.<br> **Avoid Disinformation** Namnet har inga felaktiga ledtrådar. Man fattar klart och tydligt att det är en lista med skada/skador.<br> **Use Pronounceable Namnes** Namnet är kort, lättläst och lätt att uttala |
| **getStoneWall** Namn på metod |  **Use Intention-Revealing Names** namnet förklarar exakt vad som händer, du hämtar ett stone wall objekt.<br> **Use Searchable Names** Namnet innehåller inga siffror eller konstiga tecken. Namnet är tydligt och därför lättsökt vilket är viktigt för jag har många get metoder.                                             |
​
### Funktioner
​
| Metodnamn och förklaring  | Reflektion                                   |
| -------------------  | ---------------------------------------------|
|                      |                                              |
​
## Laborationsreflektion
Reflektera över uppgiften utifrån ett kodkvalitetsperspektiv. Använd begrepp ifrån boken. 
