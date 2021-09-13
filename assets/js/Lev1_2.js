/* 
JS Vertiefung
CodeFlow Übung lev1_2: for loop Array


Aufgabenstellung


Erstelle ein Array mit den Zahlen 0-10 mit Hilfe einer Schleife.

Wenn wir mit Arrays arbeiten, müssen wir das Array initialisieren (let numArray = [];).
Verwende den Befehl push() im Schleifenkörper.
Gib numArray in der Konsole aus.
*/

let numArray = [];

for (let i = 0; i < 11; i++) {
    numArray.push(i)
}

console.log(numArray)