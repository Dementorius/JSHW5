// task 1
// Напиши функцию, которая принимает 1 параметр. При первом вызове, она его запоминает, при втором - суммирует переданый параметр с тем, что передали первый раз и тд. Запрещается использовать глобальные переменные как хранилище результатов счетчика.

function func() {
  let result = 0;
  return function (a) {
    result += a;
    return result;
  };
}

const counter = func();

console.log(counter(3)); // 3
console.log(counter(5)); // 8
console.log(counter(228)); // 236

// task 2
// Создать функцию которая будет возвращать массив в котором будут лежать все
// значения - аргументы переданные в данную функцию. Но если мы ничего не
// передадим в параметрах, то массив очистится. Запрещается использовать
// глобальные переменные как хранилище значений.

function foo() {
  let result = [];
  return function () {
    if (arguments.length > 0) {
      result.push(...arguments);
      return result;
    }
    result = [];
    return result;
  };
}

const getUpdatedArr = foo();

console.log(getUpdatedArr(3)); // [3]
console.log(getUpdatedArr(5)); // [3, 5]
console.log(getUpdatedArr({ name: 'Vasya' })); // [3, 5, {name: 'Vasya'}]
console.log(getUpdatedArr()); // []
console.log(getUpdatedArr(4)); // [4]


// task3
// Содать функцию , которая при каждом вызове будет показывать разницу в секундах между временем когда ее вызывали последний раз и теперешним. Вызываем первый раз, то ретерним строку 'Enabled'. Запрещается использовать глобальные переменные как хранилище значений. 

function boo() {
  let last = null;

  return function () {
    if (!last) {
      last = Date.now();
      return 'enabled';
    }
    const now = Date.now();
    const timeDifference = Math.round((now - last) / 1000);
    last = now;
    return timeDifference;
  };
}

const getTime = boo();


console.log(getTime());
setTimeout(() => {
  console.log(getTime());
}, 2000);
setTimeout(() => {
  console.log(getTime());
}, 5000);
setTimeout(() => {
  console.log(getTime());
}, 12000);




// // Запускаем первый раз
// getTime() // 'Enabled'
// // Запускаем через 2 сек
// getTime() // 2
// // Запускаем через 3 сек
// getTime() // 3
// // Запускаем через 7 сек
// getTime() // 7
// // Запускаем через 60 сек
// getTime() // 60
// // Запускаем через 1 сек
// getTime() // 1


