/* 
Aufgabenstellung


Erstelle einen Loop mit do...while.
Es sollen die Nummern von 1 bis 5 im Dokument ausgeben werden.
*/
//for und while sind Kopf gesteuerte Schleifen. Die Schleife wird dann nur betreten wenn eine bestimmte Bedingung erfüllt ist Bsp. i= 0; i < 10; i++. Die Schleife wird solange ausgeführt wie i kleiner als 10 ist.  

//Do-while ist ein Fußgesteurte Schleife. Die Schleife wird betreten und abgefragt. 


/* var i = 0;
do {
    i += 1;
    //Das ist die Austrittkarte für die Schleife. Ansonsten wenn da i + = 1 nicht drinnen bsteht, werde ich ein Deadloop erzeugen. Da es in einer mind. ca. 1 Mio. pro Sek. durchläuft und das den Explorer blockiert. Schießt den Browser weg, musst mit dem Task Manager dan schließen nicht probieren - Klaus
    console.log(i);
} while (i < 5); */

// also mit do wird die Schleife betreten/eingeleitet und mit += 1, wird es um eins erhöht. Die Schlange wird solange durchlaufen bis es immer noch kleiner als 5 ist wegen dem while. 

let i = 1;
do {
    document.write("The number is " + i + "<br>");
    console.log("The number is " + i);
    i++;
}while (i < 6);
