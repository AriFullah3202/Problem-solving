var number = [2, 3, 4, 5, 6];
var j = number.length - 1;
var output = [];
console.log(j);
for (var i = j; i > -1; i--) {
    output.push(number[i]);
}
console.log(output);