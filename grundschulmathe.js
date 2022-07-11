//Start
alert("Grundschulmathe: Rechne die Aufgabe im Kopf und gib das Ergebnis ein. Beantworte mindestens vier von fünf richtig, um in das nächste Level zu aufzusteigen!");

//Zufallszahl (zwischen 1 und 20)
function randomNum() {
    return Math.floor(Math.random() * 21);
}

//Punkte am Anfang auf 0
points = 0;



//Funktion Addition
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
            alert("Du hast alle Aufgaben beantwortet und" + points + "/5 Punkte erreicht! Damit hast du das nächste Level erreicht!")
            subtraktion();
        }
        //nicht ins nächste Level
        else if (runs === 5 && points < 4) {
            alert("Du hast alle Aufgaben beantwortet und" + points + "/5 Punkte erreicht! Damit hast du leider zu wenige Punkte für das nächste Level! Du kannst jetzt von vorne anfangen. Versuch es einfach nochmal!")
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
            alert("Du hast alle Aufgaben beantwortet und" + points + "/5 Punkte erreicht! Damit hast du das nächste Level erreicht!")
            subtraktion();
        }
        //nicht ins nächste Level
        else if (runs === 5 && points < 4) {
            alert("Du hast alle Aufgaben beantwortet und" + points + "/5 Punkte erreicht! Damit hast du leider zu wenige Punkte für das nächste Level! Du kannst jetzt von vorne anfangen. Versuch es einfach nochmal!")
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
    var userAnswer = parseInt(prompt("Wie viel ist " + max + " - " + min + " ?"));

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
            alert("Du hast alle Aufgaben beantwortet und" + points + "/5 Punkte erreicht! Du hast die Aufgabe bestanden und kommst in das nächste Level")
            multiplikation();
        }
        else if (runs === 5 && points < 4) {
            alert("Du hast alle Aufgaben in diesem Level beantwortet und" + points + "/5 Punkte erreicht! Damit hast du leider zu wenige Punkte für das nächste Level! Du kannst jetzt von vorne anfangen. Versuch es einfach nochmal!")
            subtraktion();
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
            alert("Du hast alle Aufgaben in diesem Level beantwortet und" + points + "/5 Punkte erreicht, damit kommst du in das nächste Level!.")
            multiplikation();
        }
        else if (runs === 5 && points < 4) {
            alert("Du hast alle Aufgaben in diesem Level beantwortet und" + points + "/5 Punkte erreicht! Damit hast du leider zu wenige Punkte für das nächste Level! Du kannst jetzt von vorne anfangen. Versuch es einfach nochmal!")
            subtraktion();
        }
    } 
}

//Multiplikation
function multiplikation(points = 0, runs = 0) {
    var num1 = randomNum();
    var num2 = randomNum();
    var solution = num1 * num2;
    runs++;
    var userAnswer = parseInt(prompt("Wie viel ist " + num1 + " * " + num2 + " ?"), 10);

    //Richtige Antwort
    if (userAnswer === solution) {
        points += 1
        alert("Richtig! Du hast" + points + "/5 Punkte");
        //bei unter 5 Runden nächste Aufgabe
        if (runs < 5) {
            multiplikation(points, runs);
        }
        //alle Aufgaben beantwortet
        else if (runs === 5 && points >= 4) {
            alert("Du hast alle Aufgaben in diesem Level beantwortet und" + points + "/5 Punkte erreicht! Du hast die Aufgabe bestanden und kommst in das nächste Level")
            Division();
        }
        else if (runs === 5 && points < 4) {
            alert("Du hast alle Aufgaben in diesem Level beantwortet und" + points + "/5 Punkte erreicht! Damit hast du leider zu wenige Punkte für das nächste Level! Du kannst jetzt von vorne anfangen. Versuch es einfach nochmal!")
            multiplikation();
        }
    }
    //Falsche Antwort
    else if (userAnswer !== solution) {
        alert("Falsch! Du hast" + points + "/5 Punkte");
        //bei unter 5 RUnden nächste Aufgabe
        if (runs < 5) {
            multiplikation(points, numberOfRuns);
        }
        //alle Aufgaben beantwortet
        else if (runs === 5 && points >= 4) {
            alert("Du hast alle Aufgaben in diesem Level beantwortet und" + points + "/5 Punkte erreicht! Du hast die Aufgabe bestanden und kommst in das nächste Level")
            Division();
        }
        else if (runs === 5 && points < 4) {
            alert("Du hast alle Aufgaben in diesem Level beantwortet und" + points + "/5 Punkte erreicht! Damit hast du leider zu wenige Punkte für das nächste Level! Du kannst jetzt von vorne anfangen. Versuch es einfach nochmal!")
            multiplikation();
        }

    }
}

//Division
function Division(points = 0, runs = 0) {
    var num1 = randomNum();
    var num2 = randomNum();
    var solution = num1 / num2;
    
    //NUmmer 1 und 2 dürfen keinen Rest hinterlassen (Ganze Zahlen als Ergebnis)
    if (num1 % num2 == 0) {
        runs++;
        var userAnswer = parseInt(prompt("Wieviel ist " + num1 + " / " + num2 + " ?"), 10);
        //Richtige Antwort
        if (userAnswer === solution) {
            points += 1
            alert("Richtig! Du hast " + points + "/5 Punkte");
            //Bei unter 5 Runden nächste Aufgabe
            if (runs < 5) {
                Division(points, runs);
            }
            //Alle Aufgaben erledigt
            else if (runs === 5 && points >= 4) {
                alert("Du hast alle Aufgaben in diesem Level beantwortet und" + points + "/5 Punkte erreicht! Du hast Grundschulmathe abgeschlossen")
                return 0;
            }
            else if (runs === 5 && points < 4) {
                alert("Du hast alle Aufgaben in diesem Level beantwortet und" + points + "/5 Punkte erreicht! Damit hast du leider zu wenige Punkte, um Grundschulmathe abzuschließen! Du kannst jetzt von vorne anfangen. Versuch es einfach nochmal!")
                Division();
            }
        }
        //Falsche Antwort
        else if (userAnswer !== solution) {
            alert("Falsch! Du hast " + points + "/5 Punkte");
            //bei unter 5 Runden nächste Aufgabe
            if (runs < 5) {
                Division(points, runs);
            }
            //alle Aufgaben erledigt
            else if (runs === 5 && points >= 4) {
                alert("Du hast alle Aufgaben in diesem Level beantwortet und" + points + "/5 Punkte erreicht! Du hast Grundschulmathe abgeschlossen")
                return 0;
            }
            else if (runs === 5 && points < 4) {
                alert("Du hast alle Aufgaben in diesem Level beantwortet und" + points + "/5 Punkte erreicht! Damit hast du leider zu wenige Punkte, um Grundschulmathe abzuschließen! Du kannst jetzt von vorne anfangen. Versuch es einfach nochmal!")
                Division();
            }
    
        }
    }
    //Wenn Rest überbleibt von vorne mit neuen Zahlen 
    else {
        Division(points, runs);
    }
}

//Aufruf Funktion Matheaufgabe
sum();