// .map
const roomNumbers = [349, 268, 388, 225, 127, 111, 389, 101];
const roomMap1 = roomNumbers.map((num) => num +2);
console.log(roomMap1);


// .reduce 
let sum = roomNumbers.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue;
});
console.log(sum);

// .filter 
const result = roomNumbers.filter(room => room > 198)
    console.log(result)


