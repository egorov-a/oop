import { Animals } from "../animals/Animals";

export class Bird extends Animals {
  constructor({ flight, name }) {
    super({ name });
    this.flight = flight;
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
