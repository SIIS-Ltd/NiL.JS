var a = [, , , ];
a[0] = 1;
console.log(...a);

(function (...args) {
    if (JSON.stringify(args) !== JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "word"]))
        console.log("Spread operator in array definition work incorrectly");
})(...[1, 2, 3, 4, ...[5, 6, 7, 8], 9, 0], "word");