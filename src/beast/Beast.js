import { Animals } from "../animals/Animals";

export class Beast extends Animals {
  constructor({ type, name, age }) {
    super({ name, age });
    this.type = type;
    this.age = age;
    this.className = "Beast";
  }

  buildObjectFromStr(obj) {
    let str = "Зверь: ";

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
    file.writeStrFromFile("Beast - Fish");
  }

  bird(objectOne, objectTwo, file) {
    file.writeStrFromFile(this.buildObjectFromStr(objectOne));
    file.writeStrFromFile(objectTwo.buildObjectFromStr(objectTwo));
    file.writeStrFromFile("Beast - Bird");
  }

  beast(objectOne, objectTwo, file) {
    file.writeStrFromFile(this.buildObjectFromStr(objectOne));
    file.writeStrFromFile(objectTwo.buildObjectFromStr(objectTwo));
    file.writeStrFromFile("Beast - Beast");
  }
}
