import { Animals } from "../animals/Animals";

export class Beast extends Animals {
  constructor({ type, name }) {
    super({ name });
    this.type = type;
  }

  buildObjectFromStr(obj) {
    let str = "Зверь: ";

    Object.keys(obj).forEach((key) => {
      str += `${key}: ${obj[key]} `;
    });

    return str;
  }
}
