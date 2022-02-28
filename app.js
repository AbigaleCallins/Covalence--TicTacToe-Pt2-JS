// Inheritance class from doc.html
let cells = document.querySelectorAll(".row > div");
let btn = document.querySelectorAll("#resetGame");
let turnCounter = 0;
let resetGame = false;

const wins = [
  [cells[1], cells[2], cells[0]],
  [cells[3], cells[4], cells[5]],
  [cells[6], cells[7], cells[8]],
  [cells[0], cells[3], cells[6]],
  [cells[1], cells[4], cells[7]],
  [cells[2], cells[5], cells[8]],
  [cells[6], cells[4], cells[2]],
  [cells[0], cells[4], cells[8]],
];

//the aray that selects individual cell
for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", cellClicked);
}

function cellClicked(event) {
  let cell = event.target;

  if (cell.textContent == "") {
  }
  if (turnCounter % 2 == 0) {
    cell.textContent = "X";
  } else {
    cell.textContent = "O";
  }
  turnCounter++;
  checkWin();
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
    //Loop continues w/o draw parameters
    if (xCount >= 3) {
      alert("X Wins!");
      resetGame = true;
    } else if (oCount == 3) {
      alert("O Wins!");
      resetGame = true;
    }
  }

if (resetGame == false && turnCounter == 9) {
  alert("DRAW");
  resetGame = true;
}
}

function newGame() {
  if (resetGame === true) {
    location.reload();
  }
}
