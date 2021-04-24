// 1. What is the Big O for this?
// 1) Determine the Big O for the following algorithm: You are sitting in a room with 15 people. 
// You want to find a playmate for your dog, preferably of the same breed. 
// So you want to know if anyone out of the 15 people have the same breed as your dog. 
// You stand up and yell out, who here has a golden retriever and would like to be a playdate for my golden. 
// Someone yells - "I do, be happy to bring him over"

// O(1)

// 2) Determine the Big O for the following algorithm: You are sitting in a room with 15 people. 
// You want to find a playmate for your dog who is of the same breed. 
// So you want to know if anyone out of the 15 people have the same breed as your dog. 
// You start with the first person and ask him if he has a golden retriever. 
// He says no, then you ask the next person, and the next, and the next until you find someone who has a golden or there is no one else to ask.

// O(n)

//2. Even or odd
function isEven(value) {
    if (value %2 === 0) {
        return true;
    } else {
        return false
    }
}
// O(1), always takes the same amount of time regardless of the input

//3. Are you here?
//What is the Big O of the following algorithm? Explain your answer
function areYouHere(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        const el1 = arr1[i];
        for (let j = 0; j < arr2.length; j++) {
            const el2 = arr2[j];
            if (el1 === el2) return true;
        }
    }
    return false;
}
// O(n^2), input has to go through 2 loops

//4. Doubler
// What is the Big O of the following algorithm? Explain your answer
function doubleArrayValues(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] *= 2;
    }
    return array;
}
// 0(n), input runs through 1 array. Time depends on length of array.

//5. Naive Search 
// What is the Big O of the following algorithm? Explain your answer
function naiveSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return i;
        }
    }
}
// 0(n), input runs through 1 array. Time depends on the length of the array.

//6. Creating pairs:
//What is the Big O of the following algorithm? Explain your answer
function createPairs(arr) {
    for (let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            console.log(arr[i] + ", " +  arr[j] );
        }
    }
}
// O(n^2), input runs through 2 arrays. 

//7. Compute the sequence
//What does the following algorithm do? What is its runtime complexity? 
//Explain your answer
function compute(num) {
    let result = [];
    for (let i = 1; i <= num; i++) {

        if (i === 1) {
            result.push(0);
        }
        else if (i === 2) {
            result.push(1);
        }
        else {
            result.push(result[i - 2] + result[i - 3]);
        }
    }
    return result;
}

// 0(n) input loops depending its size. The number of loops depends on its size.

//8. An efficient search
//In this example, we return to the problem of searching using a more sophisticated approach than in naive search, above. 
//Assume that the input array is always sorted. 
//What is the Big O of the following algorithm? Explain your answer
function efficientSearch(array, item) {
    let minIndex = 0;
    let maxIndex = array.length - 1;
    let currentIndex;
    let currentElement;

    while (minIndex <= maxIndex) {
        currentIndex = Math.floor((minIndex + maxIndex) / 2);
        currentElement = array[currentIndex];

        if (currentElement < item) {
            minIndex = currentIndex + 1;
        }
        else if (currentElement > item) {
            maxIndex = currentIndex - 1;
        }
        else {
            return currentIndex;
        }
    }
    return -1;
}
// O(log(n)), each run takes half the time as the last.

//9. Random element
//What is the Big O of the following algorithm? Explain your answer
function findRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
//O(1), always takes the same amount of time regardless of the input

//10. What Am I?
//What does the following algorithm do? 
//What is the Big O of the following algorithm? Explain your answer
function isWhat(n) {
    if (n < 2 || n % 1 !== 0) {
        return false;
    }
    for (let i = 2; i < n; ++i) {
        if (n % i === 0) return false;
    }
    return true;
}
// checks for prime number
//O(n), loops through 1 time. The time depends on the size of the input.

//11.Tower of Hanoi
//Did not understand the description

//12.Iterative version and 13. Recursive Big O
const sheep = function(input) {
    if (input === 0) {
      return console.log('All sheep jumped over the fence');
    }
    console.log(input + ': Another sheep jumps over the fence')
    newInput = input - 1
    return sheep(newInput)
}
// 0(n), input runs through 1 array. Time depends on length of array.

const powerCalculator = function(base, exponent) {
    if (exponent < 0) {
      return console.log('exponent should be >= 0');
    }
  
    if (exponent === 0) {
      return 1;
    } 
   
    return base * powerCalculator(base, exponent-1);
}
// 0(1), always takes the same amount of time regardless of the input

const revString = function(string) {
    if (string === "") {
      return "";
    }
    return revString(string.substr(1)) + string.charAt(0);

}
// 0(n), input runs through 1 array. Time depends on the length of the array.

const triangleNumber = function(number) {
    if (number < 1) {
      return console.log('number must be greater than 0')
    } 
    if (number === 1) {
      return 1;
    }
    return number + triangleNumber(number - 1);
}
// 0(n), input runs through 1 array. Time depends on the length of the array.

const stringSplitter = function(string) {
    if (string.length === 0) {
      return "";
    }
    if (string.charAt(0) === "/") {
          
    }
}
// 0(n), input runs through 1 array. Time depends on the length of the array.

const fibonacci = function(number) {
    if (number <= 2) {
      switch (number) {
        case 1: case 2: return 1;
        case 0: return 0;   
        default: throw new Error("Please insert a positive integer");
      }  // End switch statement
    }
    return fibonacci(number - 1) + fibonacci(number - 2);
}
// 0(n) input loops depending its size. The number of loops depends on its size.

const factorial = function(num) {
    if (num === 1) {
      return 1
    }
    return num * factorial(num - 1)
}
//O(2^n) run time grows with increase of input

