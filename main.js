requirejs.config({
  urlArgs: "ts="+new Date().getTime(),
  baseUrl : '',
  paths : { 'require' : '.' }
});

requirejs(['matrix'], function(Matrix) {
  var matrix = new Matrix(3);
  matrix.rows[1] = [1, 1, 2];
  matrix.rows[2] = [0, 1, 1];
  matrix.rows[0] = [0, 0, 1];
  console.log(matrix.solve());
  console.log(matrix.toString());
});
