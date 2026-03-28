type User = {
  name: string,
  age: number,
  premiumUser: boolean,
}

const data: string = `
Alice,28,1
John,32,0
Hiroshi,45,1
`;

const users: User[] = [];
const lines = data.split('\n');

for (const line of lines) {
  if (line === '') {
    continue;
  }
  const [name, age, premiumUser] = line.split(',');
  users.push({name, age: Number(age), premiumUser: premiumUser === '1'});
}

for (const user of users) {
  if (user.premiumUser) {
    console.log(`${user.name} (${user.age})はプレミアムユーザーです。`);
  } else {
    console.log(`${user.name} (${user.age})はプレミアムユーザーではありません。`);
  }
}