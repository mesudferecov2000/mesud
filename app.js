let arr = ['green', 'red', 'blue'];

let result = arr.find(function (i) {
    if (i.length == 3) {
        return i;
    }
});

console.log(result);

let arr2 = ['Abbas', 'Amin', 'Vaqif', 'Ferhad', 'Anar'];

let result2 = arr2.filter(function (a) {
    if (a[0] == 'A') {
        return a;
    }
});

console.log(result2);





