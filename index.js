const Person = {
   name : "Rushikesh",
   age : 23,
   occupition : "Software developer"
}

//Before es6
const name1 = Person.name;
const age1 = Person.age;

console.log("Name : " + name1 + " Age : " + age1);

//ES6

const {name , age} = Person;
console.log(name, age);

