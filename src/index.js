
// You should implement your task here.

module.exports = function towelSort (matrix = []) {
    console.log(matrix.length);
    let arr = [];
    if (matrix.length > 0) {
        for (let i = 0; i < matrix.length; i++) {
            if (i % 2 !== 0) {
                matrix[i].reverse();
            }
        }
        arr = [].concat(...matrix);
    } else {
        arr = [];
    }

  return arr;
}
