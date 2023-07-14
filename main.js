// ! Promise - это объект, который содержит будущее зачение нашей асинxронной операции.
// !  Promise - обещяние
// ? Promise  имеет три состояние
// ! 1 Pending - это не решенный или ожидающий промис(то есть ожидает если результат не готов)
// ! 2 Resolved - решенный или выполненный
// ! 3 Rejected - откланенный прмис

// ! Создание Promise
// const name = 'Makers';
// const newPromise = new Promise(function(resolve, reject){
//     if(name === 'Makers') {
//         resolve({name: name, status: true})
//     }else{
//         reject({name: name, status: false})
//     }
// })

// ! Front-end  запросы  Back-end
// ! Запросы бывают нескольких видов
// ! -> GET - для изменения данных
// ! <- PUT - для изменения данных
// ! <- POST - для изменения данных, исрользуется для отправки данных
// ! КРЕСТИК - DELETE - исользуется для удаление данных

// ? js это однопоточный язык- то есть он может выполнять команды в одном потоке
// ? то есть с перва выполняется одна команда console.log('Makers'); потом другая console.log('Bootcamp'); то есть не может выполняь две команды одновременно поэтому JS синхронный
// ?   ОЖИДАНИЕ                ВЫПОЛНЕНИЕ

// ? console.log('Bootcamp');         console.log('Makers');

// ? но есть один момент когда нужно включить асинхронность
// ? синхронность - цикл иметажки задержки
// for(let i = 0; i < 10000000000; i++){

// }
// console.log('hello');

// alert('hello')
// console.log('Bootcamp');

// ? Асинхронность позволяет нам запускать команды одновременно, она у нас называется setTimeout первым аргументом она принимает функцию =>
// setTimeout(() => {
//     console.log(1);
// })
// console.log(2);  // 2
// 1

// ? так же в setTimeout можно передать задержку(то есть через какое время должна заработать функция которая передана первым аргументом)
// setTimeout(() => {
//     console.log(1);
// }, 2000)
// console.log(2)

// function func(){
//     console.log('Hello 1');  // ? асинхронный с задержкой
// }

// setTimeout(func, 1000);
// setTimeout(() => {
//     console.log('Hello 2');   // ? асинхронный
// })
// console.log("Hello 3");   // ? является синхронной
// ? Hello 3
// ? Hello 2
// ? Hello 1

// function func(){
//     console.log('Hello 1');  // ? асинхронный с задержкой
// }

// setTimeout(func, 1000);   // ? тут уже работает порядок так как задержка одинаковая и еще потому что мы его записали первым
// setTimeout(() => {
//     console.log('Hello 2');   // ? асинхронный
// }, 1000)
// console.log("Hello 3");    // ? является синхронной

// ? Hello 3
// ? Hello 1
// ? Hello 2

// ? так же можем удалять
// const id = setTimeout(() => {
//   console.log(1);
// }, 1000);

// const id2 = setTimeout(() => {
//   console.log(2);
// });
// // console.log(id);
// clearTimeout(id2);  // ? удаляет

// let i = 0;
// const id = setInterval(() => {
//   console.log(`Hello ${++1}`);
// }, 1000);

//  setTimeout(() => {
//    clearInterval(id)
//  }, 7000);

// ! Разбор
// const age = +prompt("enter you age");
// const newPromise = new Promise(function (resolve, reject) {
//   if (age > 18) {
//     resolve({ status: 200, data: "доступ разрешен!" });
//   } else {
//     reject({ status: 404, err: "fatal error!" });
//   }
// });
// newPromise
//   .then(result => console.log(result))
//   .catch(error => console.log(error))
//   .finally(() => console.log("это проверка на возраст"));

// const myPromise = new Promise((resolve, reject) => {
//   // setTimeout
// });

// setTimeout(() => {
//   console.log("hello setTimeout");
// }, 2000);
// let func = setInterval(() => {
//   console.log("hello setInterval");
// });
// setInterval(func);

// let counter = 0;
// let func = setInterval(() => {
//   console.log("hello setInverval!");
//   counter++;
//   if (counter > 5) {
//     clearInterval(func);
//   }
// }, 1000);

// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("prepering data...");
//     let data = {
//       server: "localhost",
//       port: 8000,
//       status: 200,
//     };
//     if (data) {
//       resolve(data);
//     } else {
//       reject("404! data is not found");
//     }
//   }, 2000);
// });
// myPromise.then(data => console.log(data));

// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("prepering data...");
//     let data = {
//       server: "localhost",
//       port: 8000,
//       status: 200,
//     };
//     if (data) {
//       resolve(data);
//     } else {
//       reject("404! data is not found");
//     }
//   }, 2000);
// });

// async function getData() {
//   await myPromise
//     .then(data => console.log("data1", data))
//     .catch(err => console.log(err))
//     .finally(() => console.log("finish 1!"));
//   await myPromise
//     .then(data => console.log("data2", data))
//     .catch(err => console.log(err))
//     .finally(() => console.log("finish 2!"));
//   console.log("hello");
// }
// getData();

// ! then - ловит успешный кейс
// ! catch - ловит ошибку
// ! finally - отрабатывает в любом случае при завершении

// ! resolve - collback для успешного кейса - вызывется внутри промиса, принимает данные, которые нужно вернуть
// ! reject - collback для передачи ошибки-принимает саму ошибку и возвращяет ее

// ! async await- конструкция, которая используется при отправке запросов(в случае если нужно дождаться выполнения запроса и тоолько потом читать дальнейшей код)

// npm i -g json-server
