import { Animals } from "../animals/Animals";

export class Fish extends Animals {
  constructor({ location, name, age }) {
    super({ name });
    this.location = location;
    this.age = age;
  }

  buildObjectFromStr(obj) {
    let str = "Рыба: ";

    Object.keys(obj).forEach((key) => {
      str += `${key}: ${obj[key]} `;
    });

    return str;
  }

  skip(file, obj) {
    file.writeStrFromFile(this.buildObjectFromStr(obj));
  }
}
