function findLeapYear(years) {
    const leapYearArray = [];
    for (let i = 0; i < years.length; i++) {
        if (years[i] % 400 === 0 || years[i] % 100 !== 0 && years[i] % 4 === 0) {
            leapYearArray.push(years[i]);
        }
    }
    return leapYearArray;
}
const years = [2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031];
console.log(findLeapYear(years));