//Checks the winner of one match
function checkWinner(p1, p2) {
    if (p1 == p2) {
        return "PARI";
    } else {

        if (p1 == "CARTA") {
            return (p2 == "FORBICI" ? "P2" : "P1");
        }
        if (p1 == "FORBICI") {
            return (p2 == "SASSO" ? "P2" : "P1");
        }
        if (p1 == "SASSO") {
            return (p2 == "CARTA" ? "P2" : "P1");
        }

    }
}
//Button press -> it's p1 turn
function turnp1() {
    p1turn = true;
}
//Button press -> it's p2 turn
function turnp2() {
    p1turn = false;
    p2turn = true;
}
//Outcome of the game
function endgame() {
    p1turn, p2turn, game = false;
    results.style.display = "inline-block";
    document.getElementById('p1').innerHTML = sceltaP1;
    document.getElementById('p2').innerHTML = sceltaP2;
    if (sceltaP1 == undefined || sceltaP2 == undefined) {
        alert("Someone forgot how to play... Try again!");
        window.location.reload();
    }
    document.getElementById('results').innerHTML = "Winner is: " + checkWinner(sceltaP1, sceltaP2);
    document.getElementById('again').style.display = "inline-block";
}

//Starts the game
function playgame() {
    game = true;
    p1turn = true;
    p2turn = false;
    status = 0;
    aaa = document.getElementById("play_button");
    aaa.style.display = "none";
    p1move.style.display = "inline-block";
    p2move.style.display = "inline-block";
}

function doStuff(id) {
    if (p1turn) {

        document.getElementById('p1').innerHTML = valoreDefault;
        sceltaP1 = pool[id];

    }
    if (p2turn) {
        document.getElementById('p2').innerHTML = valoreDefault;
        sceltaP2 = pool[id];
    }
}

function flush() {
    container.children=(container.children.length>3?container.children.slice(0, 2).concat(container.children.splice(container.children.length - 1)):container.children);
}