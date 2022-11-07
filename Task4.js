/*Write a code in NodeJS that reverses a string and then tests it. For example, if the string is
“hello” it should convert it to ‘olleh”. */

function reverser(word){
    let rWord="";
    for(let i = word.length-1; i >= 0 ; i--){
        rWord+= word[i];
    }
    return rWord
}

module.exports.reverser = reverser