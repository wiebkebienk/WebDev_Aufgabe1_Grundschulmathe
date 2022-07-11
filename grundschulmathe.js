//Start
alert("Grundschulmathe: Rechne die Aufgabe im Kopf und gib das Ergebnis ein!");

//Zufallszahl zwischen 1 und 20
function randomNum() {
    return Math.floor(Math.random() * 21);
}

//Funktion Rechenaufgabe
function sum() {
    var num1 = randomNum();
    var num2 = randomNum();
    var solution = num1 + num2;
    var userAnswer = parseInt(prompt("Wie viel ist " + num1 + " + " + num2 + " ?"), 10);
    
//Antwort, ob die Aufgabe richtig ist
    if (userAnswer === solution) {
        alert("Richtig!");
    }
    else {
        alert("Falsch!");
    }
}

//Aufruf Funktion Matheaufgabe
sum();