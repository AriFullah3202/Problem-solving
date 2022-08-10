const bestFriend = function (friends) {
    let largestName = friends[0];
    for (let x of friends) {
        if (x.length > largestName.length) largestName = x;
    }
    return largestName;
};
console.log("the largest name is - " + bestFriend(["arif", "affif", "acib", "atik", "arifullah"]));