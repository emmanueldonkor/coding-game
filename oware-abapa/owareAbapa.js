// Solve the Oware game
function solveOware(board) {
  // Calculate the total number of seeds in the player's houses
  let totalSeeds = board.slice(0, 6).reduce((a, b) => a + b);

  // Check if the player can capture any seeds
  for (let i = 0; i < 6; i++) {
    // Skip houses with 0 seeds
    if (board[i] === 0) continue;

    // Calculate the number of seeds in the next house
    let nextSeeds = board[(i + 1) % 6];

    // Check if capturing is possible
    if (board[i] + nextSeeds === 2 || board[i] + nextSeeds === 3) {
      // Return the index of the current house
      return i;
    }
  }

  // If no capturing is possible, return the index of the house with the most seeds
  return board.slice(0, 6).indexOf(Math.max(...board.slice(0, 6)));
}

// Game loop
while (true) {
  // Read the board state from standard input
  let board = readline()
    .split(" ")
    .map((x) => parseInt(x));

  // Solve the Oware game and output the chosen house index
  console.log(solveOware(board));
}
