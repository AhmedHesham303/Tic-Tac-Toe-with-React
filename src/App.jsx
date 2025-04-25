import Player from "./components/player";
import GameBaord from "./components/GameBoard";
import Log from "./components/Log";
import { useState } from "react";
function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState("X");
  function handelSelectSquare(rowIndex, colIndex) {
    setActivePlayer((currActive) => (currActive === "X" ? "O" : "X"));
    setGameTurns((prevTurns) => {
      let curPlayer = "X";
      if (prevTurns.length > 0 && prevTurns[0].player === "X") {
        curPlayer = "O";
      }
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: curPlayer },
        ...prevTurns,
      ];
      return updatedTurns;
    });
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="player1"
            symbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            initialName="player2"
            symbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
        <GameBaord onSelectSquare={handelSelectSquare} turns={gameTurns} />
      </div>
      <Log />
    </main>
  );
}

export default App;
