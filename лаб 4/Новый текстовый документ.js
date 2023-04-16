//1 Створіть масив persons та додайте в нього 5 обєктів типу { name: ‘John’, age: 23, city: ‘Boston’}. Для масиву persons встановіть властивості groupName=’A’, teacher=’Joan Doe’, year=’2023’. З допомогою різних версій циклу for виведіть елементи масиву та властивості масиву.
let persons = [
  { name: 'John', age: 23, city: 'Boston' },
  { name: 'Sarah', age: 27, city: 'New York' },
  { name: 'David', age: 19, city: 'Los Angeles' },
  { name: 'Emily', age: 30, city: 'Chicago' },
  { name: 'Michael', age: 25, city: 'San Francisco' }
];

persons.groupName = 'A';
persons.teacher = 'Joan Doe';
persons.year = '2023';


console.log("Using for...in loop:");
for (let key in persons) {
  console.log(key + ": " + persons[key]);
}


console.log("\nUsing for...of loop:");
for (let person of persons) {
  console.log(person);
}


console.log("\nUsing forEach method:");
persons.forEach(function(person) {
  console.log(person);
});
// 2. Створіть обєкт defaults призначений для збереження налаштувань програми який містить поля mode=test, debugLevel=error, logFolder=root. Створіть обєкт userSetting який містить поля mode=production, debugLevel=trace. Створіть функцію яка прийме як аргументи дані два обєкти та обєднає властивості цих двох обєктів в один обєкт надаючи пріоритет властивостям з обєкта userSetting. Запропонуєти як мінімум 3 способи для вирішення цієї задачі.
let defaults = {
  mode: 'test',
  debugLevel: 'error',
  logFolder: 'root'
};

let userSetting = {
  mode: 'production',
  debugLevel: 'trace'
};


let combinedSettings1 = Object.assign({}, defaults, userSetting);


let combinedSettings2 = { ...defaults, ...userSetting };


let combinedSettings3 = {};
for (let key in defaults) {
  if (userSetting.hasOwnProperty(key)) {
    combinedSettings3[key] = userSetting[key];
  } else {
    combinedSettings3[key] = defaults[key];
  }
}
// 3. Для обєкта person із завдання 1 додайте можливість отримати рік народження не додаючи додаткової властивості до цього обєкта. Зробіть дане поле доступним тільки для читання.
let person = { name: 'John', age: 23, city: 'Boston' };

Object.defineProperty(person, 'yearOfBirth', {
  get: function() {
    let currentYear = new Date().getFullYear();
    return currentYear - this.age;
  },
  enumerable: true,
  configurable: true
});

console.log(person.yearOfBirth); // Output: 2000
person.yearOfBirth = 1998; // This will not have any effect
// 4. Якими способами можна обєднати два масиви?
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combinedArray1 = arr1.concat(arr2);

let combinedArray2 = [...arr1, ...arr2];

Array.prototype.push.apply(arr1, arr2);
let combinedArray3 = arr1;
//5. Напишіть алгоритм який перетворить масив persons у масив текстових фрагментів типу’John from Boston born in 2000’
let persons = [
  { name: 'John', age: 23, city: 'Boston' },
  { name: 'Sarah', age: 27, city: 'New York' },
  { name: 'David', age: 19, city: 'Los Angeles' },
  { name: 'Emily', age: 30, city: 'Chicago' },
  { name: 'Michael', age: 25, city: 'San Francisco' }
];

let textFragments = [];
for (let person of persons) {
  let textFragment = `${person.name} from ${person.city} born in ${new Date().getFullYear() - person.age}`;
  textFragments.push(textFragment);
}

console.log(textFragments);
//6. Напишіть алгоритм який з масиву persons вибере людей старше 20 років
function getPeopleOver20(persons) {
  let peopleOver20 = [];
  for (let i = 0; i < persons.length; i++) {
    if (persons[i].age > 20) {
      peopleOver20.push(persons[i]);
    }
  }
  return peopleOver20;
}

//7. З допомогою деструктуризації присвойте значення полів name, city із обєкта person у окремі змінні.
const person = {
  name: "John",
  age: 25,
  city: "New York"
};

const { name, city } = person;

console.log(name); // "John"
console.log(city); // "New York"
//З допомогою деструктуризації присвойте перший елемен масиву persons у зокрему змінну.
const persons = [
  { name: "John", age: 25, city: "New York" },
  { name: "Mary", age: 19, city: "Los Angeles" },
  { name: "David", age: 32, city: "Chicago" }
];

const [firstPerson] = persons;

console.log(firstPerson); // { name: "John", age: 25, city: "New York" }
//8. Створіть функцію getUserData яка приймє аргументом імя користувача та повертає обєкт ізмасиву persons. Якщо обєкт з таким іменем не знайдений функція має згенерувати обєктпомилки new Error(‘Unable to find user’). Створіть функцію showUserInfo яка приймає аргументом імя, виводить в консоль текст ‘Loading’, викликає функцію getUserData, якщо користувач знайдений – виводить його поля в консоль і текст ‘Loading finished’, якщо користувач не знайдений виведіть текст помилки та текст ‘Loading finished’.
// функція для пошуку користувача за ім'ям
function getUserData(name) {
  const user = persons.find(person => person.name === name);
  if (user) {
    return user;
  } else {
    throw new Error('Unable to find user');
  }
}

// функція для виведення інформації про користувача в консоль
function showUserInfo(name) {
  console.log('Loading');
  try {
    const user = getUserData(name);
    console.log(`Name: ${user.name}, City: ${user.city}`);
  } catch (error) {
    console.log(error.message);
  } finally {
    console.log('Loading finished');
  }
}
//9

function stringToArray(str) {
  return str.split('');
}
// 10
function reverseString(str) {
  return str.split('').reverse().join('');
}

//11
function isJSFile(filename) {
  return filename.endsWith('.js');
}
//12
function sentenceToArray(sentence) {
  return sentence.split(' ');
}
//13
function replaceWordInString(str, wordToReplace, replacementWord) {
  return str.replace(new RegExp(wordToReplace, 'g'), replacementWord);
}
