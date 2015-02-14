define([], function() {
  function Matrix(n) {
    // Square matrix n x n
    this.rows = [];

    // Initialize to zeroes
    for (var i = 0; i < n; ++i) {
      var row = [];
      for (var j = 0; j < n; ++j) {
        row.push(0);
      }
      this.rows.push(row);
    }
  }

  Matrix.prototype.solve = function() {
    // Solve the matrix, returning a list of length n containing the solutions
    // (in the original order they were entered)
    // This *will* modify the matrix
    // Return false if the matrix is not solvable (a bad time)

    // Augment the matrix such that we can solve it
    this.rows.forEach(function(row) {
      row.push(1);
    });
    this.augmented = true;

    // We may end up swapping rows around, so keep a map of what rows are where
    this.rowMap = [];
    for (var i = 0; i < this.rows.length; ++i) {
      this.rowMap.push(i);
    }

    // Now row-reduce the augmented matrix using some basic strategy
    for (var i = 0; i < this.rows.length; ++i) {
      // Unable to create a 1 in this column
      if (!this.reduceColumn(i)) return false;
    }
  };

  Matrix.prototype.reduceColumn = function(n) {
    // Reduce the specified column
    if (this.rows[n][n] === 0) {
      // We have a zero in the spot we are supposed to be using to reduce
      // Find a new row, or return false if no such row exists
      var newRow = n;
      for (var newRow = n; newRow < this.rows.length; ++newRow) {
        // Found one
        if (this.rows[newRow][newRow] !== 0) break;
      }
      // None found
      if (newRow === this.rows.length) return false;

      // Swap the rows
      var tmp = this.rowMap[newRow];
      this.rowMap[newRow] = this.rows[n];
      this.rowMap[n] = tmp;

      tmp = this.rows[n];
      this.rows[n] = this.rows[newRow];
      this.rows[newRow] = tmp'

      n = newRow;
    }

    multiplyRow(this.rows[n], 1 / this.rows[n][n]);
    // Exact
    this.rows[n][n] = 1;

    for (var i = n + 1; i < this.rows.length; ++i) {
      if (this.rows[i][n] === 0) continue;
      var mult = this.rows[i][n] / this.rows[n][n];
      // Subtract to create a 0
      addToRow(this.rows[i], this.rows[n], -mult);
      // Exact
      this.rows[i][n] = 0;
    }

    return true;
  };


  Matrix.prototype.multiplyRow = function(row, mult) {
    for (var i = 0 ; i < row.length; ++i) {
      row[i] *= mult;
    }
  };

  Matrix.prototype.addToRow = function(dest, source, mult) {
    // Add (mult * source) to dest row
    for (var i = 0; i < dest.length; ++i) {
      dest[i] += mult * source[i];
    }
  };

  return Matrix;
});
