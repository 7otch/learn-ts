let resultCh4: string = '';

const sequence = (start: number, end: number): number[] => {
  const tmp: number[] = [];
  for (let i = start; i <= end; i++) {
    tmp.push(i);
  }
  return tmp;
}

const getFizzBuzzString = (i: number): string => {
  if (i % 3 !== 0 && i % 5 !== 0) {
    return String(i);
  } else if (i % 3 === 0 && i % 5 !== 0) {
    return 'Fizz';
  } else if (i % 3 !== 0 && i % 5 === 0) {
    return 'Buzz';
  } else {
    return 'FizzBuzz';
  }
}

for (const i of sequence(1, 100)) {
  const message = getFizzBuzzString(i);
  console.log(message);
}
