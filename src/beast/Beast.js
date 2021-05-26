import { Animals } from "../animals/Animals";

export class Beast extends Animals {
  constructor({ type, name, age }) {
    super({ name, age });
    this.type = type;
    this.age = age;
  }

  buildObjectFromStr(obj) {
    let str = "Зверь: ";

    Object.keys(obj).forEach((key) => {
      str += `${key}: ${obj[key]} `;
    });

    return str;
  }

  skip() {}
}
