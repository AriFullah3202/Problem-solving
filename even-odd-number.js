let numbers = [33, 55, 34, 23, 66, 63, 34];
let even = [];
let odd = [];
for (var i = 1; i < numbers.length; i++) {

    if (numbers[i] % 2 == 0) {
        even.push(numbers[i]);
    }
    else {
        odd.push(numbers[i]);
    }
}
console.log('even numbers are :' + even);
console.log('odd numbers are :' + odd);
