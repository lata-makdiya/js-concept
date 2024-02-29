// "use strict"
window.addEventListener('load', function () {
    // console.log('Hello World');
})

function grettings() {
    console.log('Good Morning');
}
// grettings()

let car = 'Volvo';

// Arrow Function
let grettings1 = () => {
    console.log('Good Afternoon');
    car = 'Swift';
}

{
    var mobile = 'Oppo';
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
    console.log('This is higher order function');
    func;
}

// higherOrderFunction(grettings1())

let fruitObject = {
    name: 'Mango',
    price: 100
}
// console.log(fruitObject.name);

let array = ['Mango', true, 10];
// console.log(array[2]);

let numbers = [1, 3, 4, 7, 9];
let getFilteredNumbers = numbers.filter(filterNumber)

// for prepared new array
let mapArray = numbers.map((key) => {
    return 'Text ' + key;
});

// console.log(mapArray);
// for (let key in numbers) {
//     console.log(numbers[key]);
// }

function filterNumber(num) {
    return num > 5;
}
// console.log(getFilteredNumbers);

let findIndex = numbers.findIndex((obj) => {
    return obj == 1
})
// console.log(findIndex);

// console.log(typeof fruitObject);


function getKeyByValue(object, value) {
    return Object.keys(object).find(key =>
        object[key] === value);
}

const exampleObject = {
    key1: 'Geeks',
    key2: 100,
    key3: 'Javascript'
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

let ans = getKeyByValue(exampleObject, 'Geeks');
// console.log(ans);

// let divId = document.getElementById('divId').innerHTML = '<h1>This is div Id</h1>';
// let divId = document.getElementById('divId').innerText = '<h1>This is div Id</h1>';

// let divClass = document.getElementsByClassName('divClass')[0].innerHTML = 'This is div Class';
// let divClass = document.querySelector('.divClass').innerHTML = 'This is div Class';
// let divId = document.querySelector('#divId').innerHTML = 'This is div Id';

// document.getElementsByTagName('p')[0].innerHTML =  'this is p tag'


// let divId = document.querySelector('#divId');
let name = 'ABCD';

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
    "Class1": [{
        "name": "User",
        "age": "20",
        "course": "web development",
    }, {
        "name": "User 1",
        "age": "21",
        "course": "web Designing",
    }],
    "Class2": [{
        "name": "Person",
        "age": "20",
        "course": "web development",
    }, {
        "name": "Person 1",
        "age": "21",
        "course": "web Designing",
        "hobbies": ["Reading", "Programming"]
    }]
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

let input = document.getElementById('inputField');
let textBox = document.getElementsByTagName('p')[0];

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


let form = document.getElementById('form');
let userName = document.getElementById('name');
let errorSection = document.getElementById('error');

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
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => resolve(json));
    });
    let promise2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('code will run after 3 seconds')
            // console.log('code will run after 2 seconds');
        }, 3000);
    });
    console.log('fetching data');
    let promise1Value = promise1;
    console.log('fetched from promise 1');
    let promise2Value = await promise2;
    console.log('fetched from promise 2');

    return [promise1Value, promise2Value];
}

// getData().then((value) => console.log(value));

let demoArray = [1, 2, 'apple', 'car', true];

let divClass = document.getElementsByClassName('divClass')[0];

let id = 'idByVariable';
divClass.innerHTML = 'This is Div'
divClass.setAttribute('id', id)
divClass.style.background = 'blue'
divClass.style.color = 'white'

let string = 'this is demo string';

// console.log(string.includes('is'));
// console.log('start with  =>' +  string.startsWith('t'));
// console.log('end with =>' + string.endsWith('g'));

function reloadPage() {
    window.location.reload();
}

let x = 5;
x = 10
// console.log(x);

function myFunction(x, y = 5) {
    // y is 10 if not passed or undefined
    console.log(x + y);
}
myFunction(1)

// https://huzaifaahmed.hashnode.dev/oop-in-js
// https://codeburst.io/javascript-object-oriented-programming-using-es6-3cd2ac7fbbd8
// https://www.scaler.com/topics/spread-and-rest-operator-in-javascript/
// https://code.tutsplus.com/how-to-use-map-filter-reduce-in-javascript--cms-26209t
