/*
72) এইটা একটুট্রি কি হতে পারে । একটা array এর মধ্যে অনে কগুলা সংখ্যা থাকবে ।
ত োমার কাজ হচ্ছে সংখ্যা গুলা একটার পর একটা করে চে ক করা। এবং সংখ্যা
গুলা যদি পজি টিভ সংখ্যা হয়। অর্থাৎ শনূ্য বা শন্যেূন্যে র চাইতে বড় হয় তাহলে
সে গুলাকে ক োন একটা array এর মধ্যে রাখবে । আর যদি নে গে টিভ সংখ্যা হয়।
তাহলে লপুটা স্টপ করে দি বে । এবং লপু বন্ধ করার আগ পর্যন্ত যতগুলা পজি টিভ
সংখ্যা পাওয়া গে ছে । সে গুলা রি টার্ন করে দি বে ।
*/
function findPositiveNum(negetivePositiveNums) {
    let positiveNumber = [];
    for (let numbers of negetivePositiveNums) {
        if (numbers >= 0) positiveNumber.push(numbers);
        else break;
    }
    return positiveNumber;
}
console.log(findPositiveNum([21, -34, 33, -2, 2, 3]))