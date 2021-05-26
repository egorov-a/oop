import { Animals } from "../animals/Animals";

export class Bird extends Animals {
  constructor({ flight, name, age }) {
    super({ name });
    this.flight = flight;
    this.age = age;
  }

  buildObjectFromStr(obj) {
    let str = "Птица: ";

    Object.keys(obj).forEach((key) => {
      str += `${key}: ${obj[key]} `;
    });

    return str;
  }

  skip() {}
}
