let num;
let cont;
let char;
for (let i = 0; i < 10; i++) {}
// Classe PascalCase
// 1 letra maiusc. e o restante (ate o prox sub.) minusc. GuardaChuva

// console.log(0.1 + 0.2 === 0.3);

// if (condition) {
//   console.log("oi");
//   if (condition2) {
//     console.log("2");
//   }
// } else {
//   console.log("oi");
// }

let primitiveStr = "hello"; // TIPOS PRIMITIVOS
let objectStr = new String("hello"); // OBJS QUE ENVOLVEM TIPOS PRIMITIVOS

let obj1 = {
  nome: "Maria",
};

let obj2 = {
  nome: "Maria",
};

console.log(primitiveStr === objectStr); // false
console.log(primitiveStr == objectStr); // true (conversão implícita)

let objectStr1 = new String("hello");
let objectStr2 = new String("hello");

console.log(objectStr1 === objectStr2); // false
console.log(objectStr1 == objectStr2); // false
