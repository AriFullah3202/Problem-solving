function checkPrimeNumber(number) {
    if (typeof number === 'number') {
        let check = 0;
        for (let i = 1; i <= number; i++) {
            if (number % i == 0) {
                check++;
            }
        }
        if (check === 2) {
            return 'It is a Prime Number';
        }
        else {
            return 'It is not a Prime Number';
        }
    }
    else {
        return 'Please enter a number.'
    }
}
console.log(checkPrimeNumber(20));