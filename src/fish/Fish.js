import { Animals } from "../animals/Animals";

export class Fish extends Animals {
  constructor({ location, name, age }) {
    super({ name });
    this.location = location;
    this.age = age;
    this.className = "Fish";
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

  multimethod(objectOne, objectTwo, file) {
    switch (objectTwo.className) {
      case "Fish":
        this.fish(objectOne, objectTwo, file);
        break;
      case "Bird":
        this.bird(objectOne, objectTwo, file);
        break;
      default:
        return 0;
    }
  }

  fish(objectOne, objectTwo, file) {
    file.writeStrFromFile(this.buildObjectFromStr(objectOne));
    file.writeStrFromFile(objectTwo.buildObjectFromStr(objectTwo));
    file.writeStrFromFile("Fish - Fish");
  }

  bird(objectOne, objectTwo, file) {
    file.writeStrFromFile(this.buildObjectFromStr(objectOne));
    file.writeStrFromFile(objectTwo.buildObjectFromStr(objectTwo));
    file.writeStrFromFile("Fish - Bird");
  }
}
