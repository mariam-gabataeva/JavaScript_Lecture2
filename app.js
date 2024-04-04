// 1
let Name = "Mari";
let lastName = "Gabataeva";
let sum = Name.concat(" ", lastName);
console.log(sum);

// 2
let str = "I found and did my homework";
let str2 = str.toUpperCase();
console.log(str2);

// 3
let mess = Math.floor(Math.random() * 100);
console.log(mess);

// 4
let nomber = [1, 2, 3, 4, 5];
let nomber2 = nomber.reverse();
console.log(nomber2);

let nomber3 = [1, 2, 3, 4, 5];
let nomber4 = [5];
console.log(nomber4);
let nomber5 = [2];
let nomber6 = nomber4 % nomber5;
console.log(nomber6);

// 5
let keys = { id: 1, name: "Hello" };
keys.id = "15";
let keys2 = Object.keys(keys);
console.log(keys2);
let keysArray = Object.entries(keys);
console.log(keysArray);
