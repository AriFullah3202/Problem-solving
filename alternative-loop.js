function multiply(n, y) {
    if (n === 11) return " ";
    console.log(y + " * " + n + " = " + (y * n));
    return multiply(n + 1, y);
}
multiply(1, 2000);