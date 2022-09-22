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
Beskriv din kod på en hög abstraktionsnivå. En kort beskrivning av dina viktigaste klasser och metoder. Skapa gärna ett klassdiagram som bild. Använd det ni lärt er så här långt i 1dv607. Kommunicera så att jag kan förstå.<br>
<br>
REST API som underlättar för andra programmerare som ska bygga någon applikation som har med raiding att göra. Mitt API har 5st endpoints och alla returnerar information. Allt ifrån billigaste till snabbaste sättet att förstöra dörrar och väggar i spelet Rust. NOTE: dörrar är behandlade på exakt samma sätt som väggar. Viktigaste klassen är nog controller klassen som kallar på alla metoder efter att progammeraren har använt REST API:et. En annan viktig class är calculator som beräknar billigaste och snabbaste sättet att förstöra väggar/dörrar.

Applikationen är ett REST API som används för att ta reda på hur mycket det kostar att förstöra väggar/dörrar, hur mycket det kostar att bygga dom olika väggarna samt vilka material man ska använda. API:et är inriktat till programmerare som vill göra en App utefter mitt API. Applikationen består utav många olika metoder och klasser men dom två viktigaste är controller classen som kallar på alla olika metoder efter usern har använt API:et. calculator classen och metoderna är också väldigt viktiga det är classen som innehåller metoderna som räknar ut både billigaste och snabbaste sättet att förstöra en vägg/dörr samt vilka material du ska använda. 
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
|**wallHealth** Namn på variabel som är en väggs liv 'health-bar'             | **Use Pronounceable Namnes** Namnet är kort, lättläst och lätt att uttala <br> **Use Intention-Revealing Names** Namnet beskriver klockrent vad variablen innehåller vilket är exakt vad som står. Livet på en vägg.   |

​
### Funktioner
​
| Metodnamn och förklaring  | Reflektion                                   |
| -------------------  | ---------------------------------------------|
| **calculateCheapEfficentRaidWay** <br> metod namn som räknar ut billigaste sättet att förstöra en vägg utan att det tar alldelles för lång tid. 'cheap efficent'https://github.com/kalleandreasson/L1-raidingCalc/blob/97a7044412f486109ac30c1449df73270ca02c68/src/calculator/calculator.js#L4                     |  **Method Names** Metod har ett tydligt verb som är calculate. <br> **Use Intention-Revealing Names** Namnet på metoden förklara exakt vad metoden gör vilket är att räkna utt snabbaste sättat att förstöra en vägg som endån är effektivt<br> **Do One Thing** Metoden räknar ut billigaste men effektivaste sättet att förstöra en vägg samt lägger till sakerna som används för att förstöra väggen i en String. Alltså gör inte metoden en sak. Hade varit extremt om jag kallade på en metod som bara gjorde det lilla men endån.|
| **getStoneWall**<br> Namn på metod där ett stone wall objekt hämtas ut https://github.com/kalleandreasson/L1-raidingCalc/blob/97a7044412f486109ac30c1449df73270ca02c68/src/matrix/BuildingResources.js#L17|  **Use Intention-Revealing Names** namnet förklarar exakt vad som händer, du hämtar ett stone wall objekt.<br> **Use Searchable Names** Namnet innehåller inga siffror eller konstiga tecken. Namnet är tydligt och därför lättsökt vilket är viktigt för jag har många get metoder.<br> **Do One Thing** Metoden gör exakt en sak vilket är att hämta och returna ett objekt, inget mer. <br> **Small!** Metoden är liten.                                             |
|**fastestRaidWay** Räknar ut snabbaste sättet att förstöra en vägg https://github.com/kalleandreasson/L1-raidingCalc/blob/750c671b02a7a749604e2a92405cd650279e14e3/src/controllers/calc-controller.js#L126 |  **Switch Statements** Metoden har 8st if-statements vilket är allt annat än clean code, dessutom så upprepas dom if satserna i en annan metod. Detta är verkligen en 'good-enough' lösning. Jag kom helt enkelt inte på en bättre lösning som fortfarande var enkel att förstå. Jag valde helt enkelt lättläslighet över DRY - dont repeat yourself.                  |
​
## Laborationsreflektion
Reflektera över uppgiften utifrån ett kodkvalitetsperspektiv. Använd begrepp ifrån boken. <br>
<br>
Jag har gjort mitt bästa för att skriva så bra kod som möjligt när det kommer till variabel/metod/klass namn. Jag tycker namnet är i dom flesta fallen bra. En regel som jag har tänkt på extra mycket är **Don't Be Cute** samt **Use Pronounceable Names**. Varför jag just har fokuserat på dom är för att det blir betydligt lättare att diskutera koden om den är lätt att utala samt att den inte innehåller skämt. Någonting som jag tyvär inte har lyckats lika bra med är **Swtich Statements**. Jag har alldeles för många if statements i mina metoder på vissa ställen. Detta är en 'good-enough' lösning. Jag kom tyvär inte på en annan lösning som fortfarande var lättläst. **Small!** Har jag följt hyfsat bra också. Det beror lite på hur extrem man är. **Do One Thing** Har följts halvt som halvt. Vissa metoder gör exakt bara en sak och inget mer, medans vissa andra gör lite mer. 
