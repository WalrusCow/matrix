requirejs.config({
  urlArgs: "ts="+new Date().getTime(),
  baseUrl : '',
  paths : { 'require' : '.' }
});

requirejs(['matrix'], function(Matrix) {
  var matrix = new Matrix(2);
  matrix.rows[0] = [1, 2];
  matrix.rows[1] = [2, 1];
  //console.log(matrix.toString());
  matrix.solve();
  console.log(matrix.toString());
});
