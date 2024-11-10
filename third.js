const person = {
  name: 'Name',
  surname: 'Surname',
  age: 1,
};

// Создаём новый объект с прототипом person:

const person1 = Object.create(person);
console.log(person1.name); // Выведет 'Name', потому что объект наследует свойство прототипа

// Тут можем переприсвоить значения для person1:
person1.name = 'Demian';
person1.surname = 'Semenov';
person1.age = 26;

// По итогу получаем два объекта с одинаковыми ключами, но разными значениями
console.log(person.name, person1.name); // В консоли будет Name Demian

// Убедиться в том, что person1 - прототип person можно так:
console.log(Object.getPrototypeOf(person1) === person); // true

//Для написания функции, которая будет выводить ключи объекта, будем использовать цикл for
function showMeKeys(obj) {
  for (let key in obj) {
    console.log(key);
  }
}

showMeKeys(person); // name // surname // age
showMeKeys(person1); // name // surname // age

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

// Мы так же можем написать цикл для показа значений ключей:
function showMeValues(obj) {
  for (let value in obj) {
    console.log(`${obj[value]}`);
  }
}

showMeValues(person); // Name // Surname // 1
showMeValues(person1); // Demian // Semenov // 26
