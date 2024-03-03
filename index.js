"use strict"
// import sum from "./helper.js"; // default import
import {sum, Item, mobileModel} from "./helper.js"; 

let itemObject = new Item();
console.log(itemObject.showItem());
console.log(sum(10, 1));
console.log(mobileModel);


window.addEventListener("load", function () {
    // console.log('Hello World');
});

function grettings() {
    console.log("Good Morning");
}
// grettings()

let car = "Volvo";

// Arrow Function
let grettings1 = () => {
    console.log("Good Afternoon");
    car = "Swift";
};

{
    var mobile = "Oppo";
}

// if(mobile == 'Oppo'){
//     console.log('oppo');
// }else{
//     console.log('other mobile');
// }
// console.log(mobile == 'Oppo' ? 'Oppo' : 'other mobile');
// console.log(mobile);
// grettings1()

function higherOrderFunction(func) {
    console.log("This is higher order function");
    func;
}

// higherOrderFunction(grettings1())

let fruitObject = {
    name: "Mango",
    price: 100,
};
// console.log(fruitObject.name);

let array = ["Mango", true, 10];
// console.log(array[2]);

// let mapNumbers = [1, 3, 4, 7, 9];
// let getFilteredNumbers = mapNumbers.filter(filterNumber);

// for prepared new array
// let mapArray = mapNumbers.map((key) => {
//     return key * 6  ;
// });
// console.log(mapArray);

// console.log(mapArray);
// for (let key in numbers) {
//     console.log(numbers[key]);
// }

function filterNumber(num) {
    return num > 5;
}
// console.log(getFilteredNumbers);

// let findIndex = numbers.findIndex((obj) => {
//     return obj == 1;
// });
// console.log(findIndex);

// console.log(typeof fruitObject);

function getKeyByValue(object, value) {
    return Object.keys(object).find((key) => object[key] === value);
}

const exampleObject = {
    key1: "Geeks",
    key2: 100,
    key3: "Javascript",
};

// for (let key in exampleObject) {
//     console.log(exampleObject[key]);
// }

// for (let key of numbers) {
//     console.log(key);
// }

// numbers.forEach(element => {
//     console.log(element);
// });

let ans = getKeyByValue(exampleObject, "Geeks");
// console.log(ans);

// let divId = document.getElementById('divId').innerHTML = '<h1>This is div Id</h1>';
// let divId = document.getElementById('divId').innerText = '<h1>This is div Id</h1>';

// let divClass = document.getElementsByClassName('divClass')[0].innerHTML = 'This is div Class';
// let divClass = document.querySelector('.divClass').innerHTML = 'This is div Class';
// let divId = document.querySelector('#divId').innerHTML = 'This is div Id';

// document.getElementsByTagName('p')[0].innerHTML =  'this is p tag'

// let divId = document.querySelector('#divId');
let name = "ABCD";

// switch (name) {
//     case 'ABC':
//         console.log('ABC');
//         break;

//     default:
//         console.log('Default Case');
//         break;
// }

let number = 1;
// while (number <= 5) {
//     console.log(number);
//     number++;
// }
// do {
//     console.log(number);
//     number++;
// } while (number <= 5);

let jsonData = {
    Class1: [
        {
            name: "User",
            age: "20",
            course: "web development",
        },
        {
            name: "User 1",
            age: "21",
            course: "web Designing",
        },
    ],
    Class2: [
        {
            name: "Person",
            age: "20",
            course: "web development",
        },
        {
            name: "Person 1",
            age: "21",
            course: "web Designing",
            hobbies: ["Reading", "Programming"],
        },
    ],
};
// console.log(jsonData.Class2[1].hobbies[0]);

// let apiData = fetch('https://jsonplaceholder.typicode.com/todos')
// .then(response => response.json())
// .then(json =>
//         console.log(json)
//     );

// console.log(apiData);
// let jsonStringifyData = JSON.stringify(jsonData);
// console.log(jsonStringifyData);
// console.log(JSON.parse(jsonStringifyData));

// console.log(Math.round(5.4));
// console.log(Math.ceil(5.4));
// console.log(Math.floor(5.9));

let input = document.getElementById("inputField");
let textBox = document.getElementsByTagName("p")[0];

// input.addEventListener('input', function () {
//     textBox.innerText = this.value;
// })

// input.addEventListener('keyup', function () {
//     textBox.innerText = this.value;
// })

// input.addEventListener('keydown', function () {
//     textBox.innerText = this.value;
// })

// console.log(window);
// window.open('https://getbootstrap.com/docs/5.0/getting-started/introduction', 'Bootstrap', 'height=500', 'width=500');

// console.log(window.location.pathname);

// console.log(navigator);

// alert('This is alert')
// confirm('Are you sure?');
// let promptName = prompt('Enter your name')
// console.log(promptName);

// let timeOut = setTimeout(() => {
//     console.log('after 5 seconds');
// }, 5000);

// let timeoutButton = document.getElementById('clearTimeOut');

// timeoutButton.addEventListener('click', () => {
//     console.log('time out button');
//     window.clearTimeout(timeOut)
// })

// let timeInterval = setInterval(() => {
//     console.log('time interval');
// }, 1000);

// let stopTimeIntButton = document.getElementById('clearInterval');

// stopTimeIntButton.addEventListener('click', () => {
//     console.log('interval stop button');
//     clearInterval(timeInterval)
// })

let form = document.getElementById("form");
let userName = document.getElementById("name");
let errorSection = document.getElementById("error");

// form.addEventListener('submit', function (event) {
//     event.preventDefault();
//     let value = userName.value;

//     try {
//         if (value == '') throw 'user name is required';
//     } catch (error) {
//         errorSection.innerText = error;
//         console.log(error);
//     }finally{
//         console.log('This is final statement');
//     }

// })

async function getData() {
    let promise1 = new Promise((resolve, reject) => {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then((response) => response.json())
            .then((json) => resolve(json));
    });
    let promise2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("code will run after 3 seconds");
            // console.log('code will run after 2 seconds');
        }, 3000);
    });
    console.log("fetching data");
    let promise1Value = promise1;
    console.log("fetched from promise 1");
    let promise2Value = await promise2;
    console.log("fetched from promise 2");

    return [promise1Value, promise2Value];
}

// getData().then((value) => console.log(value));

let demoArray = [1, 2, "apple", "car", true];

let divClass = document.getElementsByClassName("divClass")[0];

let id = "idByVariable";
divClass.innerHTML = "This is Div";
divClass.setAttribute("id", id);
divClass.style.background = "blue";
divClass.style.color = "white";

let string = "this is demo string";

// console.log(string.includes('is'));
// console.log('start with  =>' +  string.startsWith('t'));
// console.log('end with =>' + string.endsWith('g'));

function reloadPage() {
    window.location.reload();
}

let x = 5;
x = 10;
// console.log(x);

function myFunction(x, y = 5) {
    // y is 10 if not passed or undefined
    console.log(x + y);
}
// myFunction(1)

// https://huzaifaahmed.hashnode.dev/oop-in-js
// https://codeburst.io/javascript-object-oriented-programming-using-es6-3cd2ac7fbbd8
// https://www.scaler.com/topics/spread-and-rest-operator-in-javascript/
// https://code.tutsplus.com/how-to-use-map-filter-reduce-in-javascript--cms-26209t

// OOPS
class Demo { }
// class Meetup {
//     constructor(name, location) {
//         this.name = name;
//         this.location = location;
//     }
//     start() {
//         console.log(this.name + 'Meetup ' + 'is started by ' + this.name);
//     }
//     end() {
//         console.log(this.name + 'Meetup ' + 'is ended at ' + this.location);
//     }
//     demoStaticMethod(){
//         console.log('this is static method');
//     }
// }

// let jsMeetup = new Meetup('User 1', 'Surat');
// console.log(jsMeetup instanceof Demo);
// jsMeetup.start();
// jsMeetup.end();
// Meetup.demoStaticMethod();

// Getter and setter
// class NewMeetup {
//     constructor(name) {
//         this._name = name;
//     }
//     get name() {
//         // Validation can happen on data
//         return this._name;
//     }
//     set name(val) {
//         // Validation can happen on data
//         this._name = val;
//     }
// }

// let meetup = new NewMeetup('JS');
// console.log("meetup Name: " + meetup.name); // meetup Name: JS
// meetup.name = 'React JS';
// console.log("meetup Name: " + meetup.name); // meetup Name: Angular

// Inheritance
// class Meetup {
//     constructor() {
//         console.log("inside Meetup constructor");
//     }
//     parentMethod(){
//         console.log('This is parent method');
//     }
// }

// class TechMeet extends Meetup {
//     constructor() {
//         super();
//         console.log("inside TechMeet constructor");
//     }
// }

// let meetup = new Meetup();
// let js = new TechMeet();
// js.parentMethod();
// inside Meetup constructor
// inside TechMeet constructor

// Abstraction
// class User {
//     constructor(name, email, age) {
//       this._name = name;
//       this._email = email;
//       this._age = age;
//       this._skills = [];
//     }

//     learnSkill(skill) {
//       this._skills.push(skill);
//     }

//     isEligibleForVote() {
//       return this._age >= 18;
//     }
//   }

//   const user = new User('Huzaifa', 'huzaifa@gmail.com', 17);

//   user.learnSkill('react');
//   user.learnSkill('javascript');
//   user.learnSkill('Node JS');

//   console.log(user._skills); // ['react', 'javascript']
//   console.log(user.isEligibleForVote()); // true

// Encapsulation
// class User {
//     constructor(name, email, age) {
//       this._name = name;
//       this._email = email;
//       this._age = age;
//     }

//     get name() {
//       return this._name;
//     }

//     set name(newName) {
//       this._name = newName;
//     }

//     getDetails() {
//       return `name is ${this._name} age is ${this._age}`;
//     }
//   }

//   const user = new User('Huzaifa', 'huzaifa@gmail.com', 30);
//   let getDetailsFunc = user.getDetails();

//   console.log(getDetailsFunc);
//   console.log(user.name); // Huzaifa

//   user.name = 'User';

//   console.log(user.name); // Ali

// Polymorphism
class Animal {
    makesSound() {
        console.log('Animal makes sound');
    }
}

class Duck extends Animal {
    // makesSound() {
    //     console.log('Quack Quack');
    // }
}

class Cat extends Duck {
    // makesSound() {
    //     console.log('meow meow');
    // }
}

class Dog extends Animal{
    makesSound() {
        console.log('');
    }
}

// const animal = new Animal();
// const duck = new Duck();
// const cat = new Cat();
// const dog = new Dog();

// animal.makesSound() // Quack Quack
// duck.makesSound() // Quack Quack
// cat.makesSound() // meow meow
// dog.makesSound() // meow meow

// const arr = [
//     {
//       'name'     : 'Write for Envato Tuts+',
//       'duration' : 120
//     },
//     {
//       'name'     : 'Work out',
//       'duration' : 60
//     },
//     {
//       'name'     : 'Procrastinate on Duolingo',
//       'duration' : 240
//     }
//   ];

// let newArray = arr.filter((ele) => ele.duration != 60);
// console.log(newArray);

// nested inheritance
// reduce, filter method
// rest, spread operators
// assign project

// Spread Operator
// let pcItems = ['mouse', 'keyboard', 'monitor', 'cpu'];
// let otherPcItems = ['printer', ...pcItems, 'webcam'];
// console.log(otherPcItems);

// Rest Operator
// function pcItems(...items) {
//     for (const item of items) {
//         console.log(item);
//     }
// }
// pcItems('mouse', 'keyboard');

// Destructuring Array
// let pcItems = ['mouse', 'keyboard', 'monitor', 'cpu', 'speaker'];
// let [firstElement, secondElement, ...otherElements ] = pcItems;
// console.log(otherElements);

// Filter Method
// let pcItemsObject = [
//     {
//         company: "HP",
//         price: 20000,
//     },
//     {
//         company: "Dell",
//         price: 30000,
//     }
// ];
// let pcItems = ["mouse", "keyboard", "monitor", "cpu", "speaker"];
// let filteredValue = pcItemsObject.filter((key) => {
//     return key.price == "30000";
// });
// // console.log(pcItems);
// console.log(filteredValue);


// Reduce Method
// let numbers = [1, 2, 3, 4, 5];
// let total = 0;
      
// numbers.forEach(function (number) {
//     total += number;
// });
// console.log(total); // 15

// let pcItems = ["mouse", "keyboard", "monitor", "cpu", "speaker"];
// const total2 = pcItems.reduce(function (previous, current) {
//     return previous + ', ' +current;
// }, 'Power Supply');
// console.log(total2); // 15

/* 
create a form
add validation using try catch
on submit from show form data into div
create digital clock (you can add in navbar)
*/