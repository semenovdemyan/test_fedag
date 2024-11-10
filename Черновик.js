// Тут создал копию вместо прототипа, этот черновик третьего задания неактуален.
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

//Создаём объект person
const person = {
  name: 'Name',
  surname: 'Surname',
  age: 1,
};
//Создаём копии person с теми же свойствами с помощью метода Object.assign, чтобы изменение второго объекта не перезаписывало данные первого объекта.
const person1 = Object.getPrototypeOf({}, person);
const person2 = Object.assign({}, person);
const person3 = Object.assign({}, person);

// присваиваем каждому дочернему объекту-наследнику свои свойства
person1.name = 'Demian';
person1.surname = 'Semenov';
person1.age = 26;

person2.name = 'John';
person2.surname = 'Doe';
person2.age = 99;

person3.name = 'Pavel';
person3.surname = 'Durov';
person3.age = 40;

//Объявляем функцию, которая будет выводить в консоль все ключи объекта в помощью цикла for
function keysOf(object) {
  for (let key in object) {
    console.log(key);
  }
}
//Выводим в консоль ключи объекта, например, person1
console.log(keysOf(person1)); // name surname age
//
//
//
//
// Можем так же написать функцию, которая будет выводить в консоль значения ключей объекта:
function valuesOf(object) {
  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      console.log(`${object[key]}`);
    }
  }
}

console.log(valuesOf(person1)); // Demian // Semenov // 26
