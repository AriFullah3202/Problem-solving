function paperRequirements(first, second, third) {
    const firstBookPage = 100;
    const secondBookPage = 200;
    const thirdBookPge = 300;
    const firstBookAllPage = firstBookPage * first;
    const secondBookAllPage = secondBookPage * second;
    const thirdBookAllPage = thirdBookPge * third;
    return totalPage = firstBookAllPage + secondBookAllPage + thirdBookAllPage;
}
console.log("you need to page for all book " + paperRequirements(7, 3, 4));