const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(array) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let secret =[];
for(let arrays of array){

    if (typeof arrays === 'string'){
    for(let i =0; i< arrays.length;i++){
      
        if(arrays[i]===arrays[i].toUpperCase()){
            secret.push(arrays[i]);
        }
    }
}

}
return(((secret.sort()).join('')).replace(/\s/g, ''));;
}


module.exports = {
  createDreamTeam
};
