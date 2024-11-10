const myObject = {
  obj1: { x: 111, y: 222 },
  obj2: {},
  obj3: [null, false, 0],
};

const iterableObject = {
  // Метод Symbol.iterator делает объект итерируемым
  //(впервые работаю с этим методом, пришлось активно гуглить)
  [Symbol.iterator]() {
    const entries = Object.entries(this); // Получаем массив пар "ключ: значение"
    let index = 0;

    return {
      next() {
        if (index < entries.length) {
          return { value: entries[index++], done: false };
        } else {
          return { done: true };
        }
      },
    };
  },
};

// Присваиваю объект myObject переменной для теста
Object.assign(iterableObject, myObject);

for (const [key, value] of iterableObject) {
  console.log(key, value);
}
