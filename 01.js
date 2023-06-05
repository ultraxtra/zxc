/* Створіть функцію personInfo, яка приймає об'єкт в якості параметра та виконує деструктуризацію цього об'єкта, витягуючи з нього наступні поля: "name", "age", "email", "city". Потім використайте деструктуризовані значення для створення нового об'єкта з наступними полями: "fullName" (значення поля "name" додане до значення поля "age" через пробіл), "contact" (значення поля "email" додане до значення поля "city" через кому). Функція має повертати цей новий об'єкт.

Маємо наступний об'єкт:
*/

const person = {
  name: 'John Doe',
  age: 30,
  email: 'john.doe@example.com',
  city: 'New York',
};

function personInfo(){
  const{name, age, email, city} = person;
  const FullName = name.concat(' ',age);
  const Contact = email.concat(',',city);
  const message = `FullName: ${FullName} Contact: ${Contact}`;
  console.log(message);
}

personInfo();

// Маєте отримати результат:

// ```javascript
// contact: 'john.doe@example.com, New York';
// fullName: 'John Doe, 30';
// ```




// // # Задача 3

// // Необхідно створити функцію, яка приймає будь-яку кількість аргументів (чисел) і
// // повертає максимальне значення серед них. Аргументи можуть бути передані як
// // окремими значеннями, так і в масиві.

// //javascript
// findMax(1, 4, 2, 8, 5); // поверне 8
// findMax([1, 4, 2], 8, 5); // поверне 8
// findMax(1, 4, [2, 8, 5]); // поверне 8


// // # Задача 4

// // Уявімо, що ми маємо об'єкт з даними користувача:

// //javascript
// const user = {
//   firstName: 'John',
//   lastName: 'Doe',
//   age: 30,
//   email: 'john.doe@example.com',
//   city: 'New York',
//   country: 'USA',
// };


// // Напишіть функцію getUserInfo, яка буде приймати об'єкт user та використовуючи
// // деструктуризацію, буде повертати рядок, що містить ім'я, вік та місто
// // користувача.

// // Також, функція повинна приймати додатковий об'єкт з параметрами, який може
// // містити параметр prefix, який буде доданий перед рядком з інформацією про
// // користувача. Якщо параметр prefix не переданий, то функція повинна повертати
// // рядок з інформацією про користувача без префіксу.
