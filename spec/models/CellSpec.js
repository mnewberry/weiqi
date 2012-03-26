describe("Cell", function() {
  var cell = new Cell;

  describe("#is_empty", function() {
    it("should start as empty", function() {
      expect(cell.is_empty()).toEqual(true);
    });
    describe("after playing a piece", function() {
      it("should not be empty", function() {
        cell.play('black');
        expect(cell.is_empty()).toEqual(false);
      });
    });
  });

  describe("#play", function() {
    describe("when the cell is empty", function() {
      beforeEach(function() {
        cell.set('holds', null);
      });

      describe("when playing black", function(){
        it("should succeed", function() {
          expect(cell.play('black')).toEqual(true);
        });
      });
      describe("when playing white", function(){
        it("should succeed", function() {
          expect(cell.play('white')).toEqual(true);
        });
      });
      describe("when playing something bogus", function(){
        it("should succeed", function() {
          expect(function() {
            cell.play('baz')
          }).toThrow();
        });
      });
    });
    describe("when the cell is not empty", function() {
      beforeEach(function() {
        cell.set('holds', 'black');
      })
      it("should error", function() {
        expect(function() {
          cell.play('black')
        }).toThrow(new IllegalMoveError("Can only play in empty cells."));
      });
    });

  });
});