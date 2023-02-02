function findFibonacci(number) {
    if (number <= 1) {
        return number;
    }
    return findFibonacci(number - 1) + findFibonacci(number - 2);
}
var number = 10;
var totalFibonacci = 0;
var arrayFibonacci = [];
for (var i = 0; i < number; i++) {
    arrayFibonacci.push(findFibonacci(i));
    totalFibonacci += findFibonacci(i);
}
console.log(arrayFibonacci);
console.log(totalFibonacci);
