// ### NORMAL level

// #### Task 1 💻

// Создать любой обьект с двумя ключами и любыми значениями в них, а затем удалить ключи из обьекта. 

// #### Task 2 🖥

// Создать любой обьект с двумя ключами и любыми значениями в них, а затем проверить есть ли в обьекте определенный ключ и если есть вывести в консоль **true**

// const cat = {
//     name: 'felix',
//     shape: 'fat ass',
// }
// delete cat.name;
// console.log('name' in cat)
// console.log('shape' in cat)

// #### Task 3 🖥

// Дан обьект:

// ```javascript
//     const student = {
//         name: 'John',
//         age: 19,
//         isHappy: true
//     }
// ```
// C помощью цикла **for in** вывести в консоль сначала все ключи, потом значения ключей обьекта.

// const student = {
//     name: 'John',
//     age: 19,
//     isHappy: true
// }
// for (let key in student) {
//     console.log(key);
//     console.log(student[key]);
// }



// #### Task 4 🖥

// Дан обьект:

// ```javascript
// const colors = {
//     'ru pum pu ru rum': {
//         red: 'красный',
//         green: 'зеленый',
//         blue: 'синий'
//     },
// };
// ```
// Вывести в консоль слово красный и синий

// const colors = {
//     'ru pum pu ru rum': {
//         red: 'красный',
//         green: 'зеленый',
//         blue: 'синий'
//     },
// };
// console.log(colors['ru pum pu ru rum'].red);
// console.log(colors['ru pum pu ru rum'].blue);



// #### Task 5 🖥

// Дан обьект:

// ```javascript
//     let salaries = {
//         andrey: 500,
//         sveta: 413,
//         anton: 987,
//         andrey: 664,
//         alexandra: 199
//     }
// ```
// Вычислите среднюю зарплату сотрудников и результат поместите в соответствующую переменную

// let salaries = {
//     andrey: 500,
//     sveta: 413,
//     anton: 987,
//     andrey: 664,
//     alexandra: 199
// }
// let sum = 0;
// for (let key in salaries) {
//     console.log(key, salaries[key], sum,)
//   sum += salaries[key];
// }
// let result = sum / 4;
// console.log (result);




// #### Task 6 🖥

// Создать валидатор, запросить у пользователя логин и пароль для регистрации. Затем данные записать в обьект. 
// Потом попросить пользователя подтвердить данные. Если верно введен логин и пароль, вывести сообщение **Добро пожалоВать**. 

// const log = prompt('enter login', '');
// const pas = prompt('enter password', '');
// const aut = {
//     login: [log],
//     password: [pas]
// }
// console.log(aut)
// for (let key in aut) {
//     console.log(key)
//     console.log(aut[key])
// }
// if (confirm (`ur login& password are:${aut.login}, ${aut.password}`)) {
//     alert('welcome')
// }




// ### ADVANCED level

// #### Task 1 👨‍🏫

// Мы на футбольном матче, счет забитых голов одной команды не может превышать 9 мячей. Жаль что нам присылают результат матча в формате '2:5', 
// ведь нам надо это вывести в консоль словами. Давайте напишем программу которая будет за нас переводить формат и выводить результат в консоль. 
// const keyWords = {
//     0: 'zero',
//     1: 'one',
//     2: 'two',
//     3: 'three',
//     4: 'four',
//     5: 'five',
//     6: 'six',
//     7: 'seven',
//     8: 'eight',
//     9: 'nine',
// }
// const input = '0:0';
// const input2 = '2:7';
// function a(input) {
//     return keyWords[+input[0]] + ':' +   keyWords[+input[2]];
// };
// function b(input2) {
//     return keyWords[+input2[0]] + ':' +   keyWords[+input2[2]];
// };
// console.log(a(input), b(input2));

// #### Task 2 🖥

// Даны два одинаковых обьекта. Сравните их так чтобы они были равны

// ```javascript
//     let student1 = {
//         name: 'Polina',
//         age: 27,
//     }

//     let student2 = {
//         name: 'Polina',
//         age: 27,
//     }
// ```
// let student1 = {
//     name: 'Polina',
//     age: 27,
// }   
// let student2 = {
//     name: 'Polina',
//     age: 27,
// }
// function deepEqual(student1, student2){
//     if (JSON.stringify(student1) === JSON.stringify(student2)){
//         return true;
//     }
//     return false;
// }
// console.log(deepEqual(student1, student2));

// #### Task 3 🖥

// У нас есть обьект с животными. Наша задача узнать имя птицы и вывести его в консоль. Но произошла ошибка и в этом обьекте нету птицы. Если попробуем узнать имя мы получим **ОШИБКУ**. 
// Задача придумать как обратиться к несуществующему обьекту и не получить ошибку чтобы наша программа работала дальше.

// ```javascript
// const animals = {
//    cat: {
//       name: 'Енчик',
//       age: 3,
//    },
//    dog: {
//       name: 'Орео',
//       age: 2,
//    }
// }
// ```
// const animals = {
//    cat: {
//       name: 'Енчик',
//       age: 3,
//    },
//     dog: {
//       name: 'Орео',
//       age: 2,
//    }
// }
// console.log(animals.frog?.name)