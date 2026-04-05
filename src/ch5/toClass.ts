class User {
  readonly name: string;
  readonly age: number;

  constructor(name: string, age: number) {
    if (name === '') {
      throw new Error('ユーザー名は必須です。')
    }
    this.name = name;
    this.age = age;
  }

  static createUser(name: string, age: number): User {
    return new User(name, age);
  }

  getMessage(msg: string): string {
    return `${this.name} (${this.age}) [${msg}]`;
  }
}