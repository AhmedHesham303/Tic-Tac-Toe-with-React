const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBaord({ onSelectSquare, turns }) {
  let gameBoard = initialGameBoard;
  for (const turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }
  // const [gameBoard, setGameBoard] = useState(initialGameBoard);

  // function handelSelectSquare(rowId, colId) {
  //   setGameBoard((prevGameBoard) => {
  //     const updatedBoard = prevGameBoard.map((row) => [...row]);
  //     updatedBoard[rowId][colId] = activePlayerSymbol;
  //     return updatedBoard;
  //   });

  //   onSelectSquare();
  // }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowId) => (
        <li key={rowId}>
          <ol>
            {row.map((playerSymbol, colId) => (
              <li key={colId}>
                <button onClick={() => onSelectSquare(rowId, colId)}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
