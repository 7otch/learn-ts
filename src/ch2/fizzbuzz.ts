let result: string = '';

for (let i = 1; i <= 100; i++) {
  if (i % 3 !== 0 && i % 5 !== 0) {
    result += (i + ' ');
  } else if (i % 3 === 0 && i % 5 !== 0) {
    result += 'Fizz ';
  } else if (i % 3 !== 0 && i % 5 === 0) {
    result += 'Buzz ';
  } else {
    result += 'FizzBuzz';
  }
}

console.log(result);