import { Animals } from "../animals/Animals";

export class Fish extends Animals {
  constructor({ location, name }) {
    super({ name });
    this.location = location;
  }

  buildObjectFromStr(obj) {
    let str = "Рыба: ";

    Object.keys(obj).forEach((key) => {
      str += `${key}: ${obj[key]} `;
    });

    return str;
  }
}
