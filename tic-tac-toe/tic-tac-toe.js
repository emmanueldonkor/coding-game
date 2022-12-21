const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Constants for the game state
const X = 1; // X has played at this cell
const O = -1; // O has played at this cell
const BLANK = 0; // This cell is empty

// Constants for the player
const X_PLAYER = 1; // It is X's turn
const O_PLAYER = -1; // It is O's turn

// The game board
let board = [[BLANK, BLANK, BLANK], [BLANK, BLANK, BLANK], [BLANK, BLANK, BLANK]];

// The player whose turn it is
let player = X_PLAYER;

// The number of valid actions for this turn
let validActionCount = 0;

rl.on("line", line => {
  // Read the opponent's last action (-1, -1) for the first turn
  const [opponentRow, opponentCol] = line.split(" ").map(x => parseInt(x, 10));

  // Update the game state based on the opponent's last action
  if (opponentRow >= 0 && opponentCol >= 0) {
    board[opponentRow][opponentCol] = O;
    player = X_PLAYER;
  }

  // Read the number of valid actions for this turn
  validActionCount = parseInt(line, 10);

  // The list of valid actions
  const validActions = [];

  // Read the valid actions
  for (let i = 0; i < validActionCount; i++) {
    const [row, col] = line.split(" ").map(x => parseInt(x, 10));
    validActions.push([row, col]);
  }

  // The maximum and minimum scores for a terminal game state
  const MAX_SCORE = 1;
  const MIN_SCORE = -1;

  // The function to calculate the score of a terminal game state
  function calcScore(player) {
    // Check for a win by X
    for (let i = 0; i < 3; i++) {
     
