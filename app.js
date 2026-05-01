
// let yas = prompt('yasinizi daxil edin')
// if (yas < 18) {
//     alert ('icaze verilmedi')
    
// } else{
//     alert ('icaze verildi')
// }
 

// let a = 5
// if(a>0){
//     console.log(musbet);
    
// }else{
//     console.log(menfi);

    
// }

// let a =5;
// switch (a) {
//     case 10:
//         console.log('on');
//         break;
//       case 20:
//     console.log('iyirmi');
//         break;
//         case 30:
//             console.log('otuz');

            
// }

// let questions = prompt ('birinci dunya muharibesi ne vaxt olmusdur') 








// switch ('mehsul daxil edin') {
//     case 1:
// console.log('on eded');
//         break;
// case 2:
//         console.log('ikiyuz elli alti eded');
// case 3:    

//     default:'movcud deyil'
//         break;
// }







// let cins = prompt("Cinsinizi daxil edin (m/f):");


// let gender;

// if (cins = 'm') {
//     gender = "male";
// } else if (cins= 'f') {
//     gender = "female";
// } else {
//     gender = "yanlis daxil edildi";
// }


// console.log("Gender:", gender);

















function formatDate(input) {
    const months = [
        "yanvar", "fevral", "mart", "aprel", "may", "iyun",
        "iyul", "avqust", "sentyabr", "oktyabr", "noyabr", "dekabr"
    ];

    const parts = input.split(".");
    const year = parts[0];
    const month = parseInt(parts[1], 10) - 1;
    const day = parseInt(parts[2], 10);

    return `${day} ${months[month]} ${2000}-cu il`;
}


const userInput = prompt("Tarixi 2000.08.16 formatında daxil edin:");


const result = formatDate(userInput);
console.log(result);