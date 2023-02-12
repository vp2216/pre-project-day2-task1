let play;
let gameNo = 1;

const game = document.getElementById("gameNo");
game.innerHTML = `Game ${gameNo}`;

const sq1 = document.getElementById("sq1");
const sq2 = document.getElementById("sq2");
const sq3 = document.getElementById("sq3");
const sq4 = document.getElementById("sq4");
const sq5 = document.getElementById("sq5");
const sq6 = document.getElementById("sq6");
const sq7 = document.getElementById("sq7");
const sq8 = document.getElementById("sq8");
const sq9 = document.getElementById("sq9");

const turn1 = document.getElementById("player1turn");
const turn2 = document.getElementById("player2turn");
turn1.style.display = "block";

function victory(player) {
  const main = document.getElementById("mainBox");
  main.style.display = "none";
  main.setAttribute("disabled", true);
  const box = document.getElementById("messageBox");
  const message = document.getElementById("message");
  if (player === "Draw") {
    message.innerHTML = "It was a draw match";
  } else {
    message.innerHTML = `Congragulation ${player}, you have won this game!`;
  }
  box.style.display = "flex";
}

function message() {
  const main = document.getElementById("mainBox");
  main.style.display = "block";
  const box = document.getElementById("messageBox");
  const message = document.getElementById("message");
  box.style.display = "none";
  message.innerHTML = "";
}

function gameClick(e) {
  const point1 = document.getElementById("player1point");
  const point2 = document.getElementById("player2point");
  const sq = document.getElementById(e);
  if (sq.innerHTML) return;
  if (play === undefined) {
    play = "X";
    sq.innerHTML = play;
    turn1.style.display = "none";
    turn2.style.display = "block";
  } else if (play === "X") {
    play = "O";
    sq.innerHTML = play;
    turn1.style.display = "block";
    turn2.style.display = "none";
  } else {
    play = "X";
    sq.innerHTML = play;
    turn1.style.display = "none";
    turn2.style.display = "block";
  }
  const metrix = [
    [sq1.innerHTML, sq2.innerHTML, sq3.innerHTML],
    [sq4.innerHTML, sq5.innerHTML, sq6.innerHTML],
    [sq7.innerHTML, sq8.innerHTML, sq9.innerHTML],
  ];
  if (
    (metrix[0][0] == "X" && metrix[0][1] == "X" && metrix[0][2] == "X") ||
    (metrix[1][0] == "X" && metrix[1][1] == "X" && metrix[1][2] == "X") ||
    (metrix[2][0] == "X" && metrix[2][1] == "X" && metrix[2][2] == "X") ||
    (metrix[0][0] == "X" && metrix[1][1] == "X" && metrix[2][2] == "X") ||
    (metrix[0][2] == "X" && metrix[1][1] == "X" && metrix[2][0] == "X") ||
    (metrix[0][0] == "X" && metrix[1][0] == "X" && metrix[2][0] == "X") ||
    (metrix[0][1] == "X" && metrix[1][1] == "X" && metrix[2][1] == "X") ||
    (metrix[0][2] == "X" && metrix[1][2] == "X" && metrix[2][2] == "X")
  ) {
    point1.innerHTML = parseInt(point1.innerHTML) + 1;
    const player = "Player 1";
    victory(player);
    sq1.innerHTML = "";
    sq2.innerHTML = "";
    sq3.innerHTML = "";
    sq4.innerHTML = "";
    sq5.innerHTML = "";
    sq6.innerHTML = "";
    sq7.innerHTML = "";
    sq8.innerHTML = "";
    sq9.innerHTML = "";
    gameNo++;
    game.innerHTML = `Game ${gameNo}`;
    play = "";
    turn1.style.display = "block";
    turn2.style.display = "none";
  } else if (
    (metrix[0][0] == "O" && metrix[0][1] == "O" && metrix[0][2] == "O") ||
    (metrix[1][0] == "O" && metrix[1][1] == "O" && metrix[1][2] == "O") ||
    (metrix[2][0] == "O" && metrix[2][1] == "O" && metrix[2][2] == "O") ||
    (metrix[0][0] == "O" && metrix[1][1] == "O" && metrix[2][2] == "O") ||
    (metrix[0][2] == "O" && metrix[1][1] == "O" && metrix[2][0] == "O") ||
    (metrix[0][0] == "O" && metrix[1][0] == "O" && metrix[2][0] == "O") ||
    (metrix[0][1] == "O" && metrix[1][1] == "O" && metrix[2][1] == "O") ||
    (metrix[0][2] == "O" && metrix[1][2] == "O" && metrix[2][2] == "O")
  ) {
    point2.innerHTML = parseInt(point2.innerHTML) + 1;
    const player = "Player 2";
    victory(player);
    sq1.innerHTML = "";
    sq2.innerHTML = "";
    sq3.innerHTML = "";
    sq4.innerHTML = "";
    sq5.innerHTML = "";
    sq6.innerHTML = "";
    sq7.innerHTML = "";
    sq8.innerHTML = "";
    sq9.innerHTML = "";
    gameNo++;
    game.innerHTML = `Game ${gameNo}`;
    play = "";
    turn1.style.display = "block";
    turn2.style.display = "none";
  } else if (
    metrix[0][0] &&
    metrix[0][0] &&
    metrix[1][0] &&
    metrix[2][0] &&
    metrix[0][1] &&
    metrix[1][1] &&
    metrix[2][1] &&
    metrix[0][2] &&
    metrix[1][2] &&
    metrix[2][2]
  ) {
    const player = "Draw";
    victory(player);
    sq1.innerHTML = "";
    sq2.innerHTML = "";
    sq3.innerHTML = "";
    sq4.innerHTML = "";
    sq5.innerHTML = "";
    sq6.innerHTML = "";
    sq7.innerHTML = "";
    sq8.innerHTML = "";
    sq9.innerHTML = "";
    gameNo++;
    game.innerHTML = `Game ${gameNo}`;
    play = "";
    turn1.style.display = "block";
    turn2.style.display = "none";
  }
}
