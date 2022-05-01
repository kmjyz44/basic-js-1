const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr ) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  try{
  if((Array.isArray(arr))){
   
    let array =arr.slice(0);
for(let i = 0;i<arr.length;i++ ){
  
switch(arr[i]){
  
  case '--discard-next':
    array.splice(i,2);
    break;
  case '--discard-prev':
    array.splice(i-1,2);
    break;
  case '--double-next':
    array.splice(i,0,array[i+1]);
   array.splice(array.indexOf('--double-next', 0),1); 
    break;
  case '--double-prev':  
  array.splice(i-1,0,array[i-1]);
  array.splice(array.indexOf('--double-prev', 0),1); 
  break;
}
}
  
 
    return array;
}
  }
catch{
return('arr parameter must be an instance of the Array!');
}
}


module.exports = {
  transform
};
