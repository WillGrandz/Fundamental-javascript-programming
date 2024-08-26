/*
    Fråga 1 (if)

    Förklara vad det blir för utskrift. Skriv kommentarer till koden rad för rad 
    som förklarat varför det blir den utskrift som det blir.
*/

// Deklarerar och tilldelar värdet 10 till variabeln tal1.
var tal1 = 10;

// Deklarerar och tilldelar värdet 20 till variabeln tal2.
var tal2 = 20;

// Om tal1 är lika med 10...
if (tal1 == 10) {
  // Eftersom villkoret är sant så tilldelas värdet av tal1 till tal2 vilket är 10. 
  tal2 = tal1;
}

// Om tal2 är större än 10...
if (tal2 > 10) {
  // Eftersom tal2 är 10 från föregående if-sats så kommer detta block inte att köras.
  alert("hej");
} else {
  // Eftersom föregående if-sats inte var sann så visas "hmm" och 5 tilldelas till tal1.
  alert("hmm");
  tal1 = 5;
}

// Om tal1 är större än eller lika med tal2, eller om tal2 är lika med 10.
if (tal1 >= tal2 || tal2 == 10) {
  // Eftersom tal1 är 5 och tal2 är 10 så kommer detta block köras och visa "Glad påsk!".
  alert("Glad påsk!");
} else if (tal1 == tal2) {
  // Eftersom föregående if-sats var sann så kommer detta block inte att köras.
  alert("God jul!");
}




/*
    Fråga 2 (for)

    Förklara vad det blir för utskrift. Skriv kommentarer till koden rad för rad 
    som förklarat varför det blir den utskrift som det blir.
*/

// Deklarerar och tilldelar värdet 10 till variabeln tal1.
var tal1 = 10;

// Deklarerar och tilldela värdet 20 till variabeln tal2.
var tal2 = 20;

// En for-loop som itererar från i=0 till i<tal2.
for (var i = 0; i < tal2; i++) {
  // Kollar om i är större än tal1 och inte lika med 13.
  if (i > tal1 && i != 13) {
    // Om villkoret är sant så visas värdet av i med en "alert" meddelande.
    alert(i);
  }
}




/*
    Fråga 3 (function)

    Förklara vad det blir för utskrift. Skriv kommentarer till koden rad för rad 
    som förklarat varför det blir den utskrift som det blir.
*/

// Funktion som tar in studentens poäng, minimipoäng för G och minimipoäng för VG och returnerar betyget.
function getGrade(studentPoints, minPointsForG, minPointsForVG) {
    // Om studentens poäng är mindre än minimipoäng för G.
    if (studentPoints < minPointsForG) {
      // Returnerar "U" (Underkänd)
      return "U";
    }
    // Annars om studentens poäng är mindre än minimipoäng för VG.
    else if (studentPoints < minPointsForVG) {
      // Returnerar "G" (Godkänd)
      return "G";
    }
    // Annars när inget av ovanstående villkor är uppfyllt, dvs. studenten har nått minimipoäng för VG.
    else {
      // Returnerar "VG" (Väl godkänd)
      return "VG";
    }
}
  
// Visar resultatet av getGrade-funktionen för olika studentpoäng.
alert(getGrade(5, 10, 16)); // Resultat: "U".
alert(getGrade(12, 10, 16)); // Resultat: "G".
alert(getGrade(18, 10, 16)); // Resultat: "VG".

// Anropar getGrade-funktionen och spara resultatet i variabeln grade.
var grade = getGrade(8, 10, 16);

// Om betyget är "U" och visa lämpligt meddelande
if (grade == "U") {
alert("Tyvärr, du fick " + grade + " och behöver göra omexamination.");
}




/*
    Fråga 4 (array)

    Förklara vad det blir för utskrift. Skriv kommentarer till koden rad för rad 
    som förklarat varför det blir den utskrift som det blir.
*/

// Skapar en array 'jul' med olika element.
var jul = ["Hajar som hajar", "Snö", "Julklapp", "Gran"];

// Tilldelar ett nytt värde till index 4 i arrayen 'jul'.
jul[4] = "Snöängel";

// Lägger till nya element "Glögg" och "Pepparkakshus" i slutet av arrayen 'jul'.
jul.push("Glögg");
jul.push("Pepparkakshus");

// Tar bort det första elementet i arrayen 'jul'.
jul.shift();

// Visar det första elementet i arrayen 'jul'.
alert(jul[0]); // Förväntat resultat: "Snö"

// Använder en for-loop för att visa varje element i arrayen 'jul'.
for (var i = 0; i < jul.length; i++) {
  alert(jul[i]);
}

// Genererar ett slumpmässigt index för att hämta ett slumpat element från arrayen 'jul'.
var slumptal = Math.floor(Math.random() * jul.length);

// Visar det slumpade elementet tillsammans med en meddelandetext.
alert("Slumpade nyckelen till julfriden: " + jul[slumptal]);


