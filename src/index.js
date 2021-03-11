module.exports = function towelSort (matrix) {
  let result = [];

  if(!matrix || matrix.length == 0) {
    return result;
  }
  
  for (let i = 0; i < matrix.length; i++) {
    let matrix2 = matrix[i];
    if(i % 2 != 0) {
      matrix2 = matrix[i].reverse();
    }

    for(let j = 0; j < matrix2.length; j++) {
      result.push(matrix2[j]);
    }
  }

  return result;
}
