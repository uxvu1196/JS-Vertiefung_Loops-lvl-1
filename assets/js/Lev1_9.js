/* 
Aufgabenstellung


Im Kommentarbereich ist ein Array mit Wörtern.
Dein Ziel ist es, nur die Wörter ins HTML zu schreiben, bei denen die Länge des Wortes mit der Zahl des Inputfeld übereinstimmt.

Verwende ein Loop oder eine Arraymethode.

Bonus: Erstelle ein weiteres Input-Feld, in dem der User neue Wörter zu dieser Sammlung hinzufügen kann. (Die hinzugefügten Wörter sind leider nur bis zum refresh des Browsers vorhanden)
*/

let words = ['hallo', 'Auto', 'Waschmaschine', 'Schrank', 'Katze', 'Beispiel', 'Eltern', 'Fenster', 'Geburtstag', 'Himmel', 'schwimmen', 'Zeitung']

function result() {
    let ergebnis = document.getElementById("number").value;
    console.log(ergebnis)
    let laenge = words.filter(word => word.length == ergebnis);
    let xy = document.getElementById("result")
    xy.innerHTML = laenge
      //wir vergleichen auf Gleicheit, filter() erstellt ein neues Array mit allen Elementen, die den von der bereitgestellten Funktion implementierten Test bestehen. EIn = ist  eine Zuweisung, == ist vergleichen 
}

