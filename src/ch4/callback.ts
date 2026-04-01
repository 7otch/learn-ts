function map<T, U>(array: T[], callback: (value: T) => U): U[] {
  const result: U[] = [];
  for (const i of array) {
    result.push(callback(i));
  }
  return result;
}