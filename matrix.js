define([], function() {
  function Matrix(n) {
    // Square matrix n x n
    this.matrix = [];

    // Initialize to zeroes
    for (var i = 0; i < n; ++i) {
      var row = [];
      for (var j = 0; j < n; ++j) {
        row.push(0);
      }
      this.matrix.push(row);
    }
  }

  Matrix.prototype.solve = function() {
    // Solve the matrix, returning a list of length n containing the solutions
    // (in the original order they were entered)
    // This *will* modify the matrix

    // Augment the matrix such that we can solve it
    this.matrix.forEach(function(row) {
      row.push(1);
    });
    this.augmented = true;
  };

  Matrix.prototype.addToRow = function(dest, source, mult) {
    // Add (mult * source) to dest row
  };

  return Matrix;
});
