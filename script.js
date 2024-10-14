// Basic Calculator
function calculate(num1, num2, operation) {
    return new Promise((resolve, reject) => {
        if (operation === '+') {
            resolve(num1 + num2);
        } else if (operation === '-') {
            resolve(num1 - num2);
        } else if (operation === '*') {
            resolve(num1 * num2);
        } else if (operation === '/') {
            if (num2 === 0) {
                reject("Error: Cannot divide by zero.");
            } else {
                resolve(num1 / num2);
            }
        } else {
            reject("Error: Invalid operation.");
        }
    });
}

document.getElementById("calculateBtn").addEventListener("click", async () => {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operation = document.getElementById("operation").value;
    const calcResultDiv = document.getElementById("calcResult");
    const calcErrorDiv = document.getElementById("calcError");

    calcResultDiv.innerText = ''; // Clear previous results
    calcErrorDiv.style.display = 'none'; // Hide the error box

    try {
        const result = await calculate(num1, num2, operation);
        calcResultDiv.innerText = `Result: ${result}`;
        calcResultDiv.style.display = 'block'; // Show result
    } catch (error) {
        calcErrorDiv.innerText = error;
        calcErrorDiv.style.display = 'block'; // Show error
    }
});

// Squares of Array Elements
function* squareIterator(arr) {
    for (const num of arr) {
        yield num * num;
    }
}

document.getElementById("squareBtn").addEventListener("click", () => {
    const numbers = [1, 2, 3, 4, 5]; // Example array of numbers
    const squaresResultDiv = document.getElementById("squaresResult");
    
    squaresResultDiv.innerText = ''; // Clear previous results
    squaresResultDiv.style.display = 'none'; // Hide result box

    const iterator = squareIterator(numbers);
    let squares = [];

    for (const square of iterator) {
        squares.push(square);
    }

    squaresResultDiv.innerText = `Squares: ${squares.join(', ')}`;
    squaresResultDiv.style.display = 'block'; // Show result
});

// Prime Number Generator
function* primeGenerator(limit) {
    const primes = [];
    for (let num = 2; num <= limit; num++) {
        let isPrime = true;
        for (let prime of primes) {
            if (num % prime === 0) {
                isPrime = false;
                break;
            }
            if (prime * prime > num) break; // No need to check beyond the square root
        }
        if (isPrime) {
            primes.push(num);
            yield num;
        }
    }
}

document.getElementById("primeBtn").addEventListener("click", () => {
    const limit = parseInt(document.getElementById("primeLimit").value);
    const primeResultDiv = document.getElementById("primeResult");

    primeResultDiv.innerText = ''; // Clear previous results
    primeResultDiv.style.display = 'none'; // Hide result box

    if (isNaN(limit) || limit < 2) {
        primeResultDiv.innerText = 'Please enter a valid limit greater than 1.';
        primeResultDiv.style.display = 'block'; // Show error message
        return;
    }

    const iterator = primeGenerator(limit);
    const primes = [...iterator]; // Collect all primes generated

    primeResultDiv.innerText = `Prime Numbers: ${primes.join(', ')}`;
    primeResultDiv.style.display = 'block'; // Show result
});
