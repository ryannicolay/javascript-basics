
// let a = 'red';
// let b = 'blue';

// let c = a;
// a = b;
// b = c;

// console.log(a);
// console.log(b);

// Exercise 1

function returnMax(a, b) {
    if (a > b) return a;
    return b;
}

// console.log(returnMax(42, 45));

function isLandscape(width, height) {
    return (width > height);
}

const output = fizzBuzz(7);
// console.log(output);

function fizzBuzz(input) {
    if (typeof(input) != "number")
        return 'Not a number';
    else if (input % 15 == 0)
        return 'FizzBuzz';
    else if (input % 3 == 0)
        return 'Fizz';
    else if (input % 5 == 0)    
        return 'Buzz';
    return input;
    
}

// checkSpeed(74);
function checkSpeed(speed) {
    const speedLimit = 70;
    const KmhPerPoint = 5;

    if (speed < speedLimit + KmhPerPoint)
        return console.log('Ok');
    
    let points = Math.floor(((speed - 70)/5)); 
        if (points >= 12) {
            return console.log('License suspended');
        }
    console.log('Points: ' + points);
}

// showNumbers(10);

function showNumbers(limit) {
    for (let i = 0; i <= limit; i++) {
        let message = (i % 2 == 0) ? 'EVEN' : 'ODD';
        
        console.log(i, message);
    }
}

// const array = [0, null, undefined, '', 1, 2, 3, "five", 6]
// console.log(countTruthy(array));

function countTruthy(array) {
    let result = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i]) result++;
    }
    return result;
}

// const movie = {
//     title: 'a',
//     releaseYear: 2018,
//     rating: 4.5,
//     director: 'b'
// };

// showProperties(movie);

function showProperties(obj) {
    for (let key in obj)
        if (typeof(obj[key]) === 'string') 
            console.log(key, obj[key]);
}

// console.log(sum(10));

function sum(limit) {
   let total = 0;
    for (let i = 1; i <= limit; i++) {
       if ((i % 3 == 0) || (i % 5 == 0)) 
        total += i;
   } 
   return total;
}

// const marks = [80, 80, 50];

// calculateGrade(marks);

function calculateGrade(marks) {
    let sum = 0;

    for (let value of marks) {
        sum += value;
    }

    let average = sum / (marks.length);

    if (average < 60)
        console.log("F");
    else if (average < 70)
        console.log("D");
    else if (average < 80)
        console.log("C");
    else if (average < 90)
        console.log("B");
    else console.log("A");
}

// showStars(3);

function showStars(rows) {
    let str = "";
    
    for (let i = 1; i <= rows; i++) {
        str += "*";
        console.log(str);
    }
}

showPrimes(40);

function showPrimes(limit) {
    for (let number = 2; number <= limit; number++) {
        let isPrime = true;

        for (let factor = 2; factor < number; factor++) {
            if (number % factor === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) console.log(number);
    }
}