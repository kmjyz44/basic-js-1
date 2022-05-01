const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount( s1, s2 ) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let count = 0;
    let s1s = Array.from(s1);
    let s2s = Array.from(s2);
   
    function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
      }
      s1s = s1s.filter(onlyUnique); 
      for(let s1ss of s1s){
          for(let i=0;i<s2s.length;i++){
    if(s1ss==s2s[i]){
        s2s.splice(i,1).join('');
        count = 1+count;
    }
}
     }
return count; 
}

module.exports = {
  getCommonCharacterCount
};
