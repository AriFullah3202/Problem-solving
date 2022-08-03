var numbers = [50, 23, 30, 40]
var temp = numbers[0];
for (var i = 0; i < numbers.length; i++) {
    var iterationElement = numbers[i];
    if (temp < iterationElement) {
        temp = iterationElement;
    }

}
console.log("the largest number is : " + temp);