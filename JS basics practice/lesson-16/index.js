// CW 16******************************************************
/*let a = 1, let b = 1;
let c = ++a;
let d = b++;*/


/*let year = prompt ("в каком году была опубликована спецификация ECMAScript-2015&", "")
if (year < 2015) {
    alert ("Это слишком рано...");
} else if (year > 2015) {
    alert ("Это поздновато");
} else {
    alert ("Верно!");
}*/


/*let num = prompt ('Введите число', '')
if (num < 0) {
    alert ("-1");
} else if (num > 0) {
    alert ("1");
} else {
    alert ("0");
}
*/


/*task1*/
// let a = +prompt ("", '');
// let b = +prompt ("", '');
// let result = (a + b < 4)?'Мало':'Много';
// console.log(a, b)
// /*if (a + b < 4) {
//   result = 'Мало';
// } else {
//   result = 'Много';
// }*/
// console.log(result)


// /*task2*/
// Проверка логина
// Напишите код, который будет спрашивать логин с помощью prompt.
// Если посетитель вводит «Админ», то prompt запрашивает пароль,
// если ничего не введено или нажата клавиша Esc – показать «Отменено»,
// в противном случае отобразить «Я вас не знаю».
// Пароль проверять так:
//     Если введён пароль «Я главный», то выводить «Здравствуйте!»,
//     Иначе – «Неверный пароль»,
//     При отмене – «Отменено».

// let log = prompt('', '');
// if (log === 'Админ') {
//     let pass = prompt ('', '');
//     if (pass === "Я главный") {
//         alert ('Здравствуйте!')
//     }
//     else if (pass === null){
//         alert ('«Отменено»')
//     }
//     else {
//         alert ('Неверный пароль')
//     }
// } else {
//     alert ('!!!');
// }


// ## Task 3
// Вывести все четные числа от 1 до n

// let n = +prompt('', '');
// for (let i = 0; i < n; i += 1) {
//     if (i % 2 !== 0) {
//         continue
//     } else {
//         console.log(i)
//     }
// }


// ## Task 4
// Бесконечный цикл до тех пор пока пользователь не ввел больше 100

// let n = +prompt('', '');
// for (let i = n; i < 100; ) {
//     console.log (i);
// } 



// ## Task 5
// Калькулятор на switch

























// ## Complete exercise

// ### NORMAL level

// #### Task 1 💻

// Создайте переменные и присвойте им значения:

// ```javascript
//     'true'
//     false
//     17
//     undefined
//     null
// ```
// > Затем с помощью оператора **`typeof`** выведите в консоль все типы созданных значений переменных.

// let a = 'true';
// let b = false;
// let c = 17;
// let d = undefined;
// let e = null;
// console.log(typeof(a), typeof(b), typeof(c), typeof(d), typeof(e));




// #### Task 2 💻

// Даны две переменные:

// ```javascript
//     let height = 15
//     let width = 20
// ```

// > С помощью условий выведите в консоль разработчика наибольшее число.
// let height = 15;
// let width = 20;
// if (height > width) {
//     console.log(height)
// } else {
//     console.log(width)
// }

// #### Task 3 💻

// Написать перебор от 1 до 20, где выведутся все числа кратные трём.

// > Для вычисления кратности обратите внимание на оператор %


// let n = 20;
// for (let i = 0, j = 1; j <= n; j++) {
//     if (j % 3 == 0) {
//         i++;
//         console.log(j);
//     }  
// }

// #### Task 4 💻

// Нам надо идти на работу, но нужно проверить все ли мы взяли или нет?
// Нам точно нужны ключи документы и ручка, но из еды нам надо яблоко или апельсин. 
// Для решения этой задачи нам помогут логические операторы **`|| &&`**.

// ```javascript
// let key = true;
// let documents = true;
// let pen = true;
// let apple = false;
// let orange = true;
// if (key && documents && pen && (apple || orange)) {
//     console.log ('we can go');
// } else {
//     console.log (' check your items')
// }
// ```

// > Ответ поместите в переменную **shouldGoToWork**

// #### Task 5 💻

// Запросить у пользователя число: 

//     1. Если число делится без остатка на 5 выводим сообщение Fiz
//     2. Если число делится без остатка на 3 выводим сообшение Buz
//     3. Если число делится без остатка и на 3 и на 5 выводим сообшение FizBuz

// let n = prompt ('write a number', '');
// if ((n % 5 === 0) && (n % 3 === 0)) {
//     console.log('FizBuz');
// } else if (n % 5 === 0)  {
//     console.log('Buz');
// } else if (n % 3 === 0) {
//     console.log('Fiz');
// } else {
//     console.log('Cannot be divided without remainder');
// }
// #### Task 6 💻

// Написать программу, которая выполняет следующие операции:

// - Запрашивает у пользователя возраст, если он больше 18, то выводит сообщение - `Попей пивка`. 
// - Если меньше, то выводит сообщение - `Пей колу`. 
// - Добавить условие, что если возраст от 16-18, выводим сообщение - `Можешь выкурить сигаретку, только маме не говори`.


// let log = prompt('enter your age', '');
// if (log >= 18) {
//     console.log ('Попей пивка')
// } else {
//     if (log >= 16) {
//         console.log  ('Можешь выкурить сигаретку, только маме не говори');
//     }
//     console.log  ('Пей колу');
// }


// #### Task 7 💻

// Напишем программу для туристического терминала. Запросите у пользователя в какую сторону света он бы хотел отправиться. 
//После ввода данных мы должны вывести в консоль сообщение из списка. 
//Если пользователь ввел неверные данные, выведите сообщение в консоль чтобы он попробовал еще раз.

// + `юг` на юг пойдешь счастье найдешь
// + `север` на север пойдешь много денег найдешь
// + `запад` на запад пойдешь верного друга найдешь
// + `восток` на восток пойдешь разработчиком станешь

// > Используйте конструкцию switch
// let expr = prompt ('В какую сторону света вы бы хотели отправиться? Введите "юг", "север", "запад", "восток"', '')
// switch (expr) {
//     case "юг":
//       console.log("на юг пойдешь счастье найдешь");
//       break;
//     case "север":
//       console.log("на север пойдешь много денег найдешь");
//       break;
//     case "запад":
//       console.log("на запад пойдешь верного друга найдешь");
//       break;
//     case "восток":
//       console.log("на восток пойдешь разработчиком станешь");
//       break;
//     default:
//       console.log("попробуйте ввести сторону заново");
//   }

// ### ADVANCED level

// #### Task 1 👨‍🏫 

// Пользователь решил повеселиться и ввел свое имя в таком ввиде 'пОлИнА нАбЕрЕжНаЯ'

// Испрвьте эту ситацию чтобы мы смогли корректно поприветсвовать пользователя, и поприветствуйте его через **alert**

// > Привет, Полина Набережная!


// let pName = 'пОлИнА нАбЕрЕжНаЯ';
// function correctForm(pName) {
//     return  pName[0].toUpperCase() + pName.toLowerCase(1,6).slice(1,6) + ' ' + pName[7].toUpperCase() + pName.toLowerCase(8).slice(8);
// }
// let greeting = 'Привет, '+ correctForm(pName);
// alert (greeting);

// #### Task 2 👨‍🏫 

// Написать программу, которая выполняет следующие операции: 

// 1. Запрашивает у пользователя число.
// 2. Последовательно задает вопрос: 
//     cколько отнять / прибавить / умножить / разделить от предыдущего результата?
// 3. По окончании вывести пользователю **`alert`**, содержащий формулу и результат например: 
// > ((((6 - 10) + 5) * 20) / 2 = 110)

// let a = +prompt ('enter number', '');
// let b = +prompt ('enter number to subtract', '');
// let c = +prompt ('enter number to add', '');
// let d = +prompt ('enter number to multiply', '');
// let e = +prompt ('enter number to divide', '');
// let r = ((a - b + c) * d) / e;
// let result = '(((' + a + ' - ' + b + ')' + ' + ' + c + ')' + ' * ' + d + ')' + ' / ' + e + ' = ' + r;
// alert(result);

// #### Task 3 👨‍🏫

// Написать программу, которая будет выводить в консоль лесенку.

// ```
//     #
//     ##
//     ###
//     ####
//     #####
//     ######
// ```

// > Не забудьте вопспользоваться циклами

// let str = "#";
// while (str.length <= 6) {
//     console.log(str + "\n");
//     str += "#";
// }