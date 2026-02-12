import { useState } from "react";

const WIN_SCORE = 20; // change anytime

export default function LudoBoard() {
  const [moves, setMoves] = useState({
    blue: 0,
    yellow: 0,
    green: 0,
    red: 0,
  });

  const [winner, setWinner] = useState(null);

  const handleMove = (color) => {
    if (winner) return; // stop after win

    const newScore = moves[color] + 1;

    setMoves({ ...moves, [color]: newScore });

    if (newScore >= WIN_SCORE) {
      setWinner(color);
    }
  };

  const resetGame = () => {
    setMoves({ blue: 0, yellow: 0, green: 0, red: 0 });
    setWinner(null);
  };

  return (
    <div className="container">
      <h2 className="title">🎲 Ludo Game</h2>

      {winner ? (
        <h3 className="winner">
          🏆 {winner.toUpperCase()} Wins!
        </h3>
      ) : (
        <p className="subtitle">First to reach {WIN_SCORE} wins</p>
      )}

      <div className="board">
        {Object.keys(moves).map((color) => (
          <div key={color} className={`row ${color}`}>
            <p>
              {color.toUpperCase()} moves = {moves[color]}
            </p>

            <button onClick={() => handleMove(color)}>
              +1 Move
            </button>
          </div>
        ))}
      </div>

      <button className="reset" onClick={resetGame}>
        Reset Game
      </button>
    </div>
  );
}