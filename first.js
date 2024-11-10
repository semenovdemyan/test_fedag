//Объявляем свою функцию myMap, которая с помощью цикла for будет проходить по всем элементам массива.
//Cоздаём новый массив result, затем проходим по каждому элементу текущего массива (this в контексте метода массива), применяем функцию обратного вызова (callback), и добавляем результат в новый массив.
function myMap(callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }
  return result;
}

// Тут мы меняем метод map на свою функцию myMap.
Array.prototype.map = myMap;

//Tеперь мы можем использовать свою функцию, которая работает как метод map.
// Пример:

const arr = [1, 2, 3, 4];
const result = arr.map((x) => x * 2);

console.log(result); // [2, 4, 6, 8]
