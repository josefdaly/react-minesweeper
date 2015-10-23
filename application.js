(function(){
  window.Minesweeper = window.Minesweeper || {};

  var Game = Minesweeper.Game = React.createClass({
    getInitialState: function() {
      return { board: [], gameOver: false, gameWon: false }
    },
    updateGame: function() {

    },
    render: function() {
      return (
        <Board board={this.state.board} update={this.updateGame} />
      );
    }
  });


})();
