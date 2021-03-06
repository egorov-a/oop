import { Fish } from "../fish/Fish";
import { Bird } from "../bird/Bird";
import { Beast } from "../beast/Beast";

export function switchedObject(array, container) {
  let fish = null;
  let bird = null;
  let beast = null;

  array.forEach((element) => {
    let params = {
      id: element[0],
      value: element[1],
      name: element[2],
      age: element[3],
    };

    switch (params.id) {
      case "1":
        let fishParams = {
          location: params.value,
          name: params.name,
          age: params.age,
        };
        fish = new Fish(fishParams);
        container.arr.push(fish);
        break;
      case "2":
        const birdParams = {
          flight: params.value,
          name: params.name,
          age: params.age,
        };
        bird = new Bird(birdParams);
        container.arr.push(bird);
        break;
      case "3":
        const beastParams = {
          type: params.value,
          name: params.name,
          age: params.age,
        };
        beast = new Beast(beastParams);
        container.arr.push(beast);
        break;
      default:
        break;
    }
  });
}

export function correctFile(data) {
  return data.map((element) => {
    return element.replace("\r", "");
  });
}

export function numberLetters(name) {
  return name.length;
}

export function compare(a, b) {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
}

export function checkCorrectData(array) {
  array.forEach((item) => {
    if (!Number.isInteger(Number(item[0]))) {
      throw "Ошибка в id!";
    }
  });
}
