/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
The sum of these multiples is 23. (3+5+6+9)
Your task is to write a function in NodeJS that finds the sum of all the multiples of x or y
below z and then tests that function.
*/

function sumOfMultiples(x,y,z) {
    let sum = 0;
    for(let i = 0; i < z ; i++){
        if(i%x == 0 || i%y == 0){
            sum+=i;
        }
    }

    return sum
}

module.exports.sumOfMultiples = sumOfMultiples