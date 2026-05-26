// let arr1 = [10, 2, 45, 6, 9, 78, 36];


// let sum = arr1.reduce(function(total, num) {
//     return total + num;
// }, 0);

// console.log("Cəm:", sum);

 

// let arr2 = ["Anara", "Kamal", "Kenan"];

// let longest = arr2.reduce(function(a, b) {
//     return a.length < b.length ? a : b;
// });

// console.log("Ən uzun söz:", longest);


// let arr3 = ["anar", "kamal", "kenan"];

// let upperCaseArr = arr3.map(function(word) {
//     return word.toUpperCase();
// });

// console.log("Böyük hərflə:", upperCaseArr);


// let arr4 = [10, 2, 6, 9];

// let squares = arr4.map(function(num) {
//     return num * num;
// });

// console.log("Kvadratları:", squares);



// let arr5 = [10, 2, 6, 9];

// let sorted = arr5.sort(function(a, b) {
//     return b - a;
// });

// console.log("İkinci ən böyük:", sorted[1]);



// let arr6 = [10, 10, 10, 10];

// let allSame = arr6.every(function(num) {
//     return num === arr6[0];
// });

// console.log("Bütün elementlər eynidir?", allSame);







// let user = ['john', 'doe', 25,20]
// console.log(user);

// let user ={
//     username: 'jonh',
//     lastname: 'doe',
//     age: 25,
//    'game level': 20,
// }
// user.salary = 2000;
// user.level = 21;
// delete user.username
// console.log(user);
// console.log(user.userAge);
// console.log(user.lastname);
// console.log(user['game level']);
// console.log(user.salary);






// let user = {
//   name: "Maqsud",
//   surname: "Ferecov",
//   gender: "Kişi",
//   birthday: "01.01.2000"
// };

// console.log(user.birthday);


// class User {
//     constructor(){
//         this.username = "ertogrul";
//         this.age = 20;

//     }
//     changeName(newName){
//         this.username = newName
//     }



// }

// // console.log(User);
// let student1 = new User("ertogrul",20)
// console.log(student1);
// // console.log(student1.username);

// let student2 = new User("mehdi")
// console.log(student2);

// class Person {
//   constructor(surname, name, age, gender) {
//     this.surname = surname;
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//   }
//     celebrateBirthday() {
//     this.age++;
//     console.log(`${this.name} ad gününü qeyd etdi. Yeni yaş: ${this.age}`);
// }
// }


// let person1 = new Person("Aliyev", "Murad", 25, "Kisi");
// let person2 = new Person("Memmedova", "Aysel", 22, "Qadin");
// let  person3 = new Person("Hüseynov", "Elvin", 30, "Kisi");

// console.log(person1);
// console.log(person2);
// console.log(person3);










// class Person {
//   constructor(surname, name, age) {
//     this.surname = surname;
//     this.name = name;
//     this.age = age;
//   }
// }


// class Admin extends Person {
//   constructor(surname, name, age, role, salary) {
//     super(surname, name, age);
//     this.role = role;
//     this.salary = salary;
//   }
// }


// class Player extends Person {
//   constructor(surname, name, age, id) {
//     super(surname, name, age);
//     this.id = id;
//   }
// }


// let admin1 = new Admin("Aliyev", "Murad", 30, "asif", 2500);

// let player1 = new Player("Memmedov", "Rauf", 22, 101);

// console.log(admin1);
// console.log(player1);

// let list = document.querySelectorAll(".primary");


//     console.log("primary");
















function addStudent(name) {
    const ul = document.getElementById("studentList");

    const li = document.createElement("li");
    li.textContent = name;

    
}

addStudent("Emma Brillhart");
addStudent("Luis Montes");
addStudent("Dylan Schiemann");


