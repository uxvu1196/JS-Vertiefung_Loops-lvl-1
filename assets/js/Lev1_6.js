/* 
Aufgabenstellung


Wir wollen ein Array von Bildern erstellen und die Dateinamen von image_1.jpg bis image_100.jpg sollen ausgeben werden.
Deklariere die Variable retArray als leeres Array.
Schreibe eine for-Schleife.
Nutze den push() Befehl.
*/

let retArray = [];

for (let i = 1; i < 101; i++) {
    retArray.push("image_" + i +".jpg")
}

console.log(retArray)


//Schleifenkopf und innerhalb dem ist der Schleifenkörper 
//Ich sollte auf einzelne Elemente im fertigen Array zugreifen, deswegen console.log im Schleifenkörper
//Das Array wurde innerhalb der Schleife zusammengebaut, und anschließend ausgegeben. Da auch push Befehl innerhalb des Schleifenkörpers angegeben worden ist. 