(function(){
  "use strict";
  window.Minesweeper = window.Minesweeper || {};

  var GameComponent = React.createClass({
    getInitialState: function() {
      var board = new Minesweeper.Board(10, 10);
      return { board: board, gameOver: false, gameWon: false }
    },
    updateGame: function() {
      //logic will go here
    },
    render: function() {
      return (
        <BoardComponent board={this.state.board} update={this.updateGame} />
      );
    }
  });

  var BoardComponent = React.createClass({
    render: function() {
      var rows = this.props.board.grid.map(function(el) {
        var rowContents = el.map(function(el2) {
          return (
            <TileComponent/>
          )
        });
        return (
          <div className="row">
            {rowContents}
          </div>
        )
      })

      return (
        <div className="grid">
         {rows}
        </div>
      )
    }
  })

  var TileComponent = React.createClass({
    render: function() {
      return (
        <span> T </span>
      )
    }
  })

  React.render(
    <GameComponent />,
    document.getElementById('container')
  )


})();
