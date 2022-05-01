const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(array) {
 // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let cat =0;
  for(let arrays of array){
for(let i = 0; i < arrays.length;i++){
if(arrays[i]==='^^'){
  cat= cat+1;

} 
}

}
return cat;

}

module.exports = {
  countCats
};
