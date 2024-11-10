//Чтобы обойтись без сборщиков или импортов Node.js, объявляю через константу объект прямо в JS файле Для последующей его конвертации в JSON.

//Создаём JSON, который содержит в себе все три объекта из задания, объявляя его через константу и используя метод JSON.stringify

//+++JSON
const jjssoonn = {
  obj1: {
    Input: { obj: { x: 5, y: 42 } },
    Output: false,
    Explantation: "The object has 2 key-value pairs so it's not empty",
  },
  obj2: {
    Input: { obj: {} },
    Output: true,
    Explantation: "The object doesn't have any key-value pairs so it's empty",
  },
  obj3: {
    Input: { obj: [null, false, 0] },
    Output: false,
    Explantation: "The object has 3 elems so it's not empty",
  },
};

const jsonString = JSON.stringify(jjssoonn);
//---JSON

// Теперь снова превращаю его в объект через метод JSON.parse
const parsedObj = JSON.parse(jsonString);

console.log(parsedObj);

// Пишю функцию, которая будет принимать в качестве аргумента data информацию о ключах и значениях объектов
function findEmptyInputs(data) {
  const emptyInputKeys = [];

  // Проходим по всем объектам в data с помощью цикла for
  for (const key in data) {
    if (data[key].Input && typeof data[key].Input.obj === 'object') {
      const inputObj = data[key].Input.obj;

      // Проверяю, пустой ли объект (или массив)
      if (
        Object.keys(inputObj).length === 0 &&
        inputObj.constructor === Object
      ) {
        emptyInputKeys.push(key); // Добавляю ключ в массив
      } else if (Array.isArray(inputObj) && inputObj.length === 0) {
        emptyInputKeys.push(key); // Добавляю ключ в массив, если это пустой массив
      }
    }
  }

  return emptyInputKeys;
}

const emptyObjects = findEmptyInputs(jjssoonn);
console.log(emptyObjects); // тут консаоль выведет ключ объекта, если он пустой.
