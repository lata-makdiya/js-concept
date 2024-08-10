// higher order function
function greet(greeting) {
    return function (name) {
        return function (name) {
            console.log(`${greeting}, ${name}!`);
        };
    };
}

const hello = greet('Hello');

const hello1 = hello('Alice'); // Output: Hello, Alice!
hello1('jay', 11)

// Reduce Method -> It reduces the array to a single value.
// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// console.log(sum);  
