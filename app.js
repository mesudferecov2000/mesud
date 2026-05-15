let arr1 = [10, 2, 45, 6, 9, 78, 36];


let sum = arr1.reduce(function(total, num) {
    return total + num;
}, 0);

console.log("Cəm:", sum);

 

let arr2 = ["Anara", "Kamal", "Kenan"];

let longest = arr2.reduce(function(a, b) {
    return a.length < b.length ? a : b;
});

console.log("Ən uzun söz:", longest);


let arr3 = ["anar", "kamal", "kenan"];

let upperCaseArr = arr3.map(function(word) {
    return word.toUpperCase();
});

console.log("Böyük hərflə:", upperCaseArr);


let arr4 = [10, 2, 6, 9];

let squares = arr4.map(function(num) {
    return num * num;
});

console.log("Kvadratları:", squares);



let arr5 = [10, 2, 6, 9];

let sorted = arr5.sort(function(a, b) {
    return b - a;
});

console.log("İkinci ən böyük:", sorted[1]);



let arr6 = [10, 10, 10, 10];

let allSame = arr6.every(function(num) {
    return num === arr6[0];
});

console.log("Bütün elementlər eynidir?", allSame);



