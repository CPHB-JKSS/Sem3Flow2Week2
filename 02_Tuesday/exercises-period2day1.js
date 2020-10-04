/*
 * JavaScript Exercises - Period 2 Day-1
 */

//1a
console.log("\n1a)");
let names = ["Hassan", "Jan", "Peter", "Boline", "Frederik"];
console.log(names);

let namesA = names.filter((name) => name.includes("a"));
console.log(namesA);

//1b
console.log("\n1b)");
let namesreversed = names.map((name) => name.split("").reverse().join(""));
console.log(namesreversed);

//2a
console.log("\n2a)");
function myFilter(array, callback) {
  return callback(array);
}

function arrayFilter(array, char) {
  array.forEach((string) => {
    string.includes(char);
  });
  let newArray;

  return array.forEach((string) => string.includes(char));
}

console.log();

//2b
console.log("\n2b");
function myMap(array, callback) {
    var mappedArray = [];
    for (let i = 0; i < array.length; i++) {
        let result = callback(array[i]);
        mappedArray.push(result);
    }
    return mappedArray;
}

var newArray2 = myMap(names, someFunction);

console.log(newArray2)


//3a
console.log("\n3a)");
let numbers = [1, 3, 5, 10, 11]; //Given array

const cramAlg = (n, i) => {
    return numbers[i + 1] ? (n + numbers[i + 1]) : n;
};

const x = [...numbers.map(cramAlg)];
console.log("Result = " + x);
console.log("Expected = [4,8,15,21,11];");

//3b
console.log("\n3b)");
const persons = names.map(p => '<a href=\"\">' + p + '</a>');
let html = '<nav> \n \t' + persons.join("\n \t") + '\n</nav';

console.log(html);

//3c
console.log("\n3c)");
var personsNPhones = [{ name: "Hassan", phone: "1234567" }, { name: "Peter", phone: "675843" }, { name: "Jan", phone: "98547" }, { name: "Boline", phone: "79345" }];

let p = personsNPhones.map(personsNPhones => ({
    name: personsNPhones.name, phone: personsNPhones.phone
}));

let rowsAndTables = p.join("");

console.log(rowsAndTables);


//4a
console.log("\n4a)");
console.log(names.join("#"));

//4b
console.log("\n4b)");
console.log(numbers.reduce((total, num) => total + num, 0));

//4c
console.log("\n4c)");
const members = [
  { name: "Peter", age: 18 },
  { name: "Jan", age: 35 },
  { name: "Janne", age: 25 },
  { name: "Martin", age: 22 },
];

let averageAge = members.reduce((accumulator, member, index, array) => {
  let tmp = (accumulator += member.age);
  if (index === array.length - 1) {
    return accumulator / array.length;
  }
  return tmp;
}, 0);
console.log(averageAge);

//4d
console.log("\n4d)");
const votes = [
  "Biden",
  "Trump",
  "Biden",
  "Biden",
  "Trump",
  "Trump",
  "Biden",
  "None",
];

let voteResult = votes.reduce((total, item) => {
  if (total[item]) {
    total[item]++;
  } else {
    total[item] = 1;
  }
  return total;
}, {});
console.log(voteResult);