//Start
alert("Grundschulmathe: Rechne die Aufgabe im Kopf und gib das Ergebnis ein!");

//Zufallszahl zwischen 1 und 20
function randomNum() {
    return Math.floor(Math.random() * 21);
}

//Punkte am Anfang auf 0
points = 0;

//Funktion Rechenaufgabe
function sum(points = 0, runs = 0)  {
    var num1 = randomNum();
    var num2 = randomNum();
    var solution = num1 + num2;
    runs++;
    var userAnswer = parseInt(prompt("Wie viel ist " + num1 + " + " + num2 + " ?"), 10);
    
    //richtige Antwort
    if (userAnswer === solution) {
        points += 1
        alert("Richtig! Du hast" + points + "/5 Punkte");
        //nach 5 Aufgaben wird beendet
        if (runs < 5) {
            sum(points, runs);
        }
        else if (runs === 5){
            alert("Du hast alle Aufgaben beantwortet und" + points + "/5 Punkten erreicht!")
            return 0;
        }
    }

    //falsche Antwort
    else if (userAnswer !== solution) {
        alert("Falsch! Du hast" + points + "/5 Punkten");
        //nach 5 Aufgaben wird beendet
        if (runs < 5){
            sum(points, runs);
        }
        else if (runs === 5){
            alert("Du hast alle Aufgaben beantwortet und" +points + "/5 Punkten erreicht!")
            return 0;
        }
    }
}

//Aufruf Funktion Matheaufgabe
sum();