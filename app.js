// Inheritance class from doc.html
let cells = document.querySelectorAll(".row > div");

let turnCounter = 0;

const wins = [
  [cells[1], cells[2], cells[0]],
  [cells[3], cells[4], cells[5]],
  [cells[6], cells[7], cells[8]],
  [cells[0], cells[3], cells[6]],
  [cells[1], cells[4], cells[7]],
  [cells[2], cells[5], cells[8]],
  [cells[6], cells[4], cells[2]],
  [cells[0], cells[4], cells[8]]
];

//the aray that selects individual cell

// varable

for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", cellClicked);
}

function cellClicked(event) {
 
  if (event.target.textContent == "") {
    if (turnCounter % 2 == 0) {
      event.target.textContent = "X";
    } else {
      event.target.textContent = "O";
    }
    turnCounter++;
    checkWin();
  }
}

function checkWin() {
  for (let i = 0; i < wins.length; i++) {
    let oCount = 0;
    let xCount = 0;

    for (let j = 0; j < wins[i].length; j++) {
      if (wins[i][j].textContent == "X") {
        xCount++;
      } else if (wins[i][j].textContent == "O") {
        oCount++;
      }
    }

    if (xCount == 3) {
      alert("X IS WINNER");
    } else if (oCount == 3) {
      alert("O IS WINNER");
    } else if ((turnCounter <= 1), (turnCounter == 9)) {
     alert("D")
     break; //Loop continue w/o
    }
  }
}

