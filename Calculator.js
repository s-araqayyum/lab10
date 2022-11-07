function multiply(a,b){
    return a*b
}

function divide(a,b){
    if(b==0){
        return "Infinite answer"
    }
    return a/b
}

function subtract(a,b){
    return a - b
}

function sum(a,b){
    return a + b
}

module.exports.sum = sum;
module.exports.subtract = subtract;
module.exports.divide = divide;
module.exports.multiply = multiply;