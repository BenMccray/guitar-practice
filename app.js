let correctNote = null;
let notes = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];

function showNote(z) {
    
    if (z.style.backgroundColor == "rgb(237, 94, 94)" 
            && z.style.color == "black") {
        z.style.color = "transparent";
        z.style.backgroundColor = "transparent";
    } else {
        if (correctNote != null) {
            evaluate(z);
        } else {
            z.style.color = "white";
            z.style.backgroundColor = "black";
        }
    }
    
}

function changeTopic(z) {
    correctNote = z.value;
}

function evaluate(z) {
    console.log(z.innerHTML);
    
    if (z.innerHTML == correctNote) {
        z.style.backgroundColor = "rgb(83, 239, 83)"
    } else {
       z.style.backgroundColor = "rgb(237, 94, 94)"
    }
    z.style.color = "black";
    
}

function resetBoard() {
    const board = document.getElementById("fretboard");
    const cells = board.getElementsByTagName("button");
    for (const cell of cells) {
        cell.style.backgroundColor = "transparent";
        cell.style.color = "transparent";
    }
}

function randomTopic() {
    oldTopic = document.getElementById(correctNote);
    random = notes[Math.floor(Math.random() * notes.length)];
    while (random == oldTopic) {
        random = notes[Math.floor(Math.random() * notes.length)];
    }
    console.log("old " + correctNote); console.log("new " + random);
    newTopic = document.getElementById(random);
    newTopic.checked = true;
    changeTopic(newTopic);
    resetBoard();
}

function freeMode() {
    var checked = document.getElementById(correctNote);
    checked.checked = false;
    correctNote = null;
    resetBoard();
}

function showBoard() {
    const board = document.getElementById("fretboard");
    const cells = board.getElementsByTagName("button");
    for (const cell of cells) {
        cell.style.color = "white";
        cell.style.backgroundColor = "black";
    }
}

function showSelected() {
    if (correctNote == null) {
        alert("Choose a note to show answers!!");
    } else {
        const board = document.getElementById("fretboard");
        const cells = board.getElementsByTagName("button");
        for (const cell of cells) {
            if (cell.innerHTML == correctNote) {
                showNote(cell);
            }
        }
    }

}