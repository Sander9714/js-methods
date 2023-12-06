// METHODS Kopier hele oppgaven til vs code
const text = "  Javascript er vanskelig  ";

let replaceText = text.replace("vanskelig", "gøy");
console.log(replaceText);

let uppercase = text.toUpperCase();
console.log(uppercase);

let removeSpaces = text.trim();
console.log(removeSpaces);
/*
Bruk string methods på text til å:


Bytte ut ordet 'vanskelig' med ordet 'gøy'.


Gjør hele setningen om til store bokstaver.


Fjern mellomrom på begynnelsen og slutten av setningen.
*/

const number = 56123.321313;

let maxTwoDecimal = number.toPrecision(7);
console.log(maxTwoDecimal);

let numToString = number.toString();
console.log(numToString);
console.log(typeof numToString);

/*
Vi har ikke snakket om det, men prøv å bruke google for å finne frem til løsningen


Bruk number methods til å:


Begrense antall siffer etter desimalpunktet til 2


Konvertere tallet til en string
*/

const marvelHeroes = [
  "Spider-Man",
  "Thor",
  "Hulk",
  "Doctor Strange",
  "Iron Man",
];

marvelHeroes.push("Moon Knight");
console.log(marvelHeroes);

marvelHeroes.shift();
console.log(marvelHeroes);

marvelHeroes[2] = "Thanatos";
console.log(marvelHeroes);

const heroesString = marvelHeroes.join(" ! ");
console.log(heroesString);

/*
Bruk array methods til å:


Legge til en ny marvel helt på slutten av arrayet


Fjerne den første helten i arrayet (Spider-Man)


Bytt ut 'Doctor Strange' med 'Thanatos'


Slå sammen arrayet til en string med et utropstegn (!) mellom hver helt.
*/
