let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', '']; // 9 spaces on the board
let gameActive = true;


const statusDisplay = document.getElementById('status');
const boardDisplay = document.getElementById('board');
const resetButton = document.getElementById('resetButton');


const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];


function renderBoard() {
  boardDisplay.innerHTML = '';
  gameBoard.forEach((cell, index) => {
    const cellElement = document.createElement('div');
    cellElement.classList.add('cell');
    cellElement.textContent = cell;
    cellElement.addEventListener('click', () => handleCellClick(index));
    boardDisplay.appendChild(cellElement);
  });
}


function handleCellClick(index) {
  if (gameBoard[index] !== '' || !gameActive) {
    return; 
  }
  gameBoard[index] = currentPlayer;
  renderBoard();
  checkGameStatus();
  switchPlayer();
}

function switchPlayer() {
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  statusDisplay.textContent = `Player ${currentPlayer}'s turn`;
}

function checkGameStatus() {
  for (let combination of winningCombinations) {
    const [a, b, c] = combination;
    if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
      gameActive = false;
      statusDisplay.textContent = `Player ${currentPlayer} wins!`;
      return;
    }
  }
  

  if (!gameBoard.includes('')) {
    gameActive = false;
    statusDisplay.textContent = 'It\'s a draw!';
  }
}


resetButton.addEventListener('click', () => {
  gameBoard = ['', '', '', '', '', '', '', '', ''];
  gameActive = true;
  statusDisplay.textContent = `Player X's turn`;
  renderBoard();
});

renderBoard();
