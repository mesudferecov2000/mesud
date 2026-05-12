
let original = [1, 2, 3, 4, 5];

let newArray = [...original];


newArray = newArray.map(num => num * 2);

console.log("Orijinal massiv:", original);
console.log("Yeni massiv:", newArray);

if (JSON.stringify(original) === JSON.stringify([1, 2, 3, 4, 5])) {
    console.log("Orijinal massiv dəyişməyib.");
} else {
    console.log("Orijinal massiv dəyişib.");
}