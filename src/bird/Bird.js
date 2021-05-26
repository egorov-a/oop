import { Animals } from "../animals/Animals";

export class Bird extends Animals {
  constructor({ flight, name, age }) {
    super({ name });
    this.flight = flight;
    this.age = age;
    this.className = "Bird";
  }

  buildObjectFromStr(obj) {
    let str = "Птица: ";

    Object.keys(obj).forEach((key) => {
      str += `${key}: ${obj[key]} `;
    });

    return str;
  }

  skip() {}

  multimethod(objectOne, objectTwo, file) {
    switch (objectTwo.className) {
      case "Fish":
        this.fish(objectOne, objectTwo, file);
        break;
      case "Bird":
        this.bird(objectOne, objectTwo, file);
        break;
      case "Beast":
        this.beast(objectOne, objectTwo, file);
        break;
      default:
        return 0;
    }
  }

  fish(objectOne, objectTwo, file) {
    file.writeStrFromFile(this.buildObjectFromStr(objectOne));
    file.writeStrFromFile(objectTwo.buildObjectFromStr(objectTwo));
    file.writeStrFromFile("Bird - Fish");
  }

  bird(objectOne, objectTwo, file) {
    file.writeStrFromFile(this.buildObjectFromStr(objectOne));
    file.writeStrFromFile(objectTwo.buildObjectFromStr(objectTwo));
    file.writeStrFromFile("Bird - Bird");
  }

  beast(objectOne, objectTwo, file) {
    file.writeStrFromFile(this.buildObjectFromStr(objectOne));
    file.writeStrFromFile(objectTwo.buildObjectFromStr(objectTwo));
    file.writeStrFromFile("Bird - Beast");
  }
}
