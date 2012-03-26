var Board = Backbone.Model.extend({
  defaults: {
    width: 9,
    cells: [],
    last_played: null
  },
  get_cell: function(x,y) {
    if(x < this.get('width') && y < this.get('width')){
      return this.get('cells')[x][y];
    }
    else {
      throw new Error("attempting to accessing outside of game board");
    }
  },
  play: function(color, x, y) {
    if(this.get("last_played") == color) { throw new IllegalMoveError("It's not your turn.") }
    this.get_cell(x,y).play(color);
    this.set("last_played", color);
    return true;
  },
  play_black: function(x,y) {
    return this.play("black", x, y);
  },
  play_white: function(x,y) {
    return this.play("white", x, y);
  },
  clear: function() {
    var new_board = this;
    var cells = [];
    for(x=0; x < new_board.get('width'); x++){
      cells.push([])
      for(y=0; y < new_board.get('width'); y++){
        cells[x].push(new Cell({x: x, y: y}));
      }
    }
    new_board.set('cells', cells)
  },
  initialize: function() {
    this.clear();
  },
});