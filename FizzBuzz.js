/* 
    FizzBuzz! 
    From 1 to n, print "Fizz" for numbers divisible by 3. "Buzz" for numbers divisible by 5. "FizzBuzz" for numbers divisible by 15.
*/

/*
    Simple mode that comes to mind first.
*/
function fizzBuzzSimpleMode(n) {    
    for(let i = 0; i < n; ) {
        ++i;
        if(i % 15 === 0 ) {
            console.log(i + "FizzBuzz");
        } else if ( i % 5 === 0 ) {
            console.log( i + "Buzz");
        } else if ( i % 3 === 0 ) {
            console.log( i +  "Fizz");
        } else {
            console.log(`${i}: ${i}`);
        }
    }
}

/*
    Note: not my solution, credit goes to Brandon Morelli the author of "JavaScript - Breaking Down the Shortest Possible FizzBuzz Answer"
    https://codeburst.io/javascript-breaking-down-the-shortest-possible-fizzbuzz-answer-94a0ad9d128a
    
*/
function fizzBuzzCompactMode(n) {
    for(let i = 0; i < n; ) {
        ++i;
        console.log(
            ( (i % 3 ? "" : "Fizz" ) + (i % 5 ? "" : "Buzz" ) || i)
        )
    }
}

/*
    Messing with the Map because isn't this really "FizzBuzz" a key-value pair?

*/
function fizzBuzzMap(n) {    
    let map = new Map([
        [3, "Fizz"],
        [5, "Buzz"]
    ]);

    for(let i = 0; i < n; ) {
        ++i;
        let log = "";

        for( let key of map.keys() ) {
            if(i % key === 0 ) {
                log += map.get(key);
            }
        }

        if(log === "") {
            log = (i).toString();
        }

        console.log(log);
    }
}

// Main
let teststart = 0;
let testend = 0;
let results = new Map();
let n = 50000; // change this value 

console.log(`Printing FizzBuzz - Simple Mode`);
teststart = Date.now()
fizzBuzzSimpleMode(n);
testend = Date.now()
results.set("Simple Mode", (testend-teststart));

console.log(`Printing FizzBuzz - Compact Mode `);
teststart = Date.now();
fizzBuzzCompactMode(n);
testend = Date.now();
results.set("Compact Mode", (testend-teststart));

console.log(`Printing FizzBuzz - Map Mode `);
teststart = Date.now();
fizzBuzzMap(n);
testend = Date.now();
results.set("Map Mode", (testend-teststart));

console.log("----------------------------");
console.log("Final results - tada!")
for(let [key, value] of results.entries() ) {
    console.log(`${key} : ${value} ms`);
}