import React from 'react';
const StatusMessage = ({ winner, gamingBoard }) => {
  const { squares, isXNext } = gamingBoard;
  const noMovesLeft = squares.every(squareValue => squareValue !== null);
  const nextPlayer = isXNext ? 'X' : 'O';
  const renderStatusMessage = () => {
    if (winner) {
      return (
        <React.Fragment>
          Winner is {''}
          <span className={winner === 'X' ? 'text-green' : 'text-orange'}>
            {winner}
          </span>
        </React.Fragment>
      );
    }
    if (!winner && noMovesLeft) {
      return (
        <React.Fragment>
          <span className="text-orange">O</span> and{' '}
          <span className="text-green">X</span> tied
        </React.Fragment>
      );
    }
    if (!winner && !noMovesLeft) {
      return (
        <React.Fragment>
          Next Player is {''}
          <span className={isXNext ? 'text-green' : 'text-orange'}>
            {nextPlayer}
          </span>
        </React.Fragment>
      );
    }
    return null;
  };

  return <div className="status-message">{renderStatusMessage()}</div>;
};
export default StatusMessage;
