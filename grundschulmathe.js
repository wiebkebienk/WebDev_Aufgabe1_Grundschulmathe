//Start
alert("Grundschulmathe: Rechne die Aufgabe im Kopf und gib das Ergebnis ein. Beantworte mindestens vier von fünf richtig, um in das nächste Level zu aufzusteigen!");

//Zufallszahl (zwischen 1 und 20)
function randomNum() {
    return Math.floor(Math.random() * 21);
}

//Punkte am Anfang auf 0
points = 0;

//Funktion Rechenaufgabe
function sum(points = 0, runs = 0) {
    var num1 = randomNum();
    var num2 = randomNum();
    var solution = num1 + num2;
    runs++;
    var userAnswer = parseInt(prompt("Wie viel ist" + num1 + " + " + num2 + " ?"), 10);
    
    //richtige Antwort
    if (userAnswer === solution) {
        points += 1
        alert("Richtig! Du hast" + points + "/5 Punkte");
        //bei unter 5 Runden nächste Aufgabe
        if (runs < 5) {
            sum(points, runs);
        }
        //ins nächste Level
        else if (runs === 5 && points >= 4){
            alert("Du hast alle Aufgaben beantwortet und" + points + "/5 Punkten erreicht! Damit hast du das nächste Level erreicht!")
            subtraktion();
        }
        //nicht ins nächste Level
        else if (runs === 5 && points < 4) {
            alert("Du hast alle Aufgaben beantwortet und" + points + "/5 Punkten erreicht! Damit hast du leider zu wenige Punkte für das nächste Level! Du kannst jetzt von vorne anfangen. Versuch es einfach nochmal!")
            sum();
        }
    }

    //falsche Antwort
    else if (userAnswer !== solution) {
        alert("Falsch! Du hast" + points + "/5 Punkten");
        //bei unter 5 Runden nächste Aufgabe
        if (runs < 5){
            sum(points, runs);
        }
        //ins nächste Level
        else if (runs === 5 && points >= 4){
            alert("Du hast alle Aufgaben beantwortet und" + points + "/5 Punkten erreicht! Damit hast du das nächste Level erreicht!")
            subtraktion();
        }
        //nicht ins nächste Level
        else if (runs === 5 && points < 4) {
            alert("Du hast alle Aufgaben beantwortet und" + points + "/5 Punkten erreicht! Damit hast du leider zu wenige Punkte für das nächste Level! Du kannst jetzt von vorne anfangen. Versuch es einfach nochmal!")
            sum();
        }
    }
}

//Funktion Subtraktion
function subtraktion(points = 0, runs = 0) {
    var num1 = randomNum();
    var num2 = randomNum();
    var max = Math.max(num1, num2);
    var min = Math.min(num1, num2);
    var solution = max - min;
    runs++;
    var userAnswer = parseInt(prompt("Wieviel ist " + max + " - " + min + " ?"));

    //richtige Antwort
    if (userAnswer === solution) {
        points += 1
        alert("Richtig! Du hast" + points + "/5 Punkte");
        //bei unter 5 Runden nächste Aufgabe
        if (runs < 5) {
            subtraktion(points, runs);
        }
        //alle Fragen beantwortet
        else if (runs === 5 && points >= 4){
            alert("Du hast alle Aufgaben beantwortet und" + points + "/5 Punkten erreicht! Du hast die Aufgabe bestanden")
            return 0;
        }
    }

    //falsche Antwort
    else if (userAnswer !== solution) {
        alert("Falsch! Du hast" + points + "/5 Punkte");
        //bei unter 5 Runden nächste Aufgabe
        if (runs < 5){
            subtraktion(points, runs);
        }
        //alle Fragen beantwortet
        else if (runs === 5 && points >= 4){
            alert("Du hast alle Aufgaben beantwortet und" + points + "/5 Punkte erreicht.")
            return 0;
        }
    } 
}


//Aufruf Funktion Matheaufgabe
sum();