let fruits = ['Apple', 'Banana', 'Orange'];


for (let x = 0; x < fruits.length; x++) {
    if (fruits[x] === "Banana") {
        fruits[x] = "Mango";
    }
    else {
        if (fruits[x] === "Orange") {
            console.log("removing element : " + fruits.splice(x, 1));
            fruits[x] = "watermalon";
        }

    }

}
console.log(fruits);