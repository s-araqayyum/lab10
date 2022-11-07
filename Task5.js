/*Write a code in NodeJS that stores elements from 1 to 20 in an array and checks whether a
certain element is present in that array or not. Also, write test case for this code. */

function present(array,x){
    for(let i = 0; i < array.length; i++){
        if(array[i]==x){
            return true
        }
    }
    return false
}

module.exports.present = present