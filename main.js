requirejs.config({
  urlArgs: "ts="+new Date().getTime(),
  baseUrl : '',
  paths : { 'require' : '.' }
});

requirejs(['matrix'], function(Matrix) {
  debugger;
  var matrix = new Matrix(2);
  matrix.rows[0] = [100, 0];
  matrix.rows[1] = [0, 1];
  console.log(matrix.toString());
  console.log(matrix);
  matrix.solve();
  console.log(matrix.toString());
  console.log(matrix);
});
