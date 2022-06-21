
// function sumInput() {
//     let num = [];
//     while (true) {
//         let v = prompt ('enter number', '')
//         if (v === '' || v === null || !isFinite(v)) {
//             break;
//         }
//         num.push(+v);
//     }
//     let sum = 0;
//     for (let number of num) {
//         sum += number;
//     }
//     return sum;
// }
// console.log(sumInput());

// function uniq_fast(a) {
//     let seen = {};
//     let out = [];
//     let len = a.length;
//     let j = 0;
//     for(let i = 0; i < len; i += 1) {
//          let item = a[i];
//          if(seen[item] !== 1) {
//                seen[item] = 1;
//                out.push(item);
//          }
//     }
//     return out;
// }
// console.log(uniq_fast([1, 2, 1, 4, 5, 3, 4]))







// ### NORMAL level

// #### Task 1 🖥

// Дан массив:

// ```javascript
//     const colors = ['red', 'green', 'blue']
// ```

// Выведите в консоль его длину.
// const colors = ['red', 'green', 'blue'];
// console.log(colors.length);

// #### Task 2 🖥

// Дан массив:

// ```javascript
//     const animals = ['monkey', 'dog', 'cat']
// ```

// Выведите в консоль его последний элемент вне зависимости от его длинны.
// const animals = ['monkey', 'dog', 'cat'];
// console.log(animals.slice(-1));

// #### Task 3 🖥

// Дан массив:

// ```javascript
//     const numbers = [5, 43, 63, 23, 90]
// ```

// Удалите все элементы в массиве и выведите в консоль полученный результат.

// > Реализуйте решение двумя способами.
// const numbers = [5, 43, 63, 23, 90];
// do {
//     numbers.pop()
// } while (numbers.length > 0);
// console.log(numbers);
// -----------
// const numbers = [5, 43, 63, 23, 90];
// numbers.splice(0, 5);
// console.log(numbers);
// --------------
// const numbers = [5, 43, 63, 23, 90];
// delete numbers[0];
// delete numbers[1];
// delete numbers[2];
// delete numbers[3];
// delete numbers[4];
// console.log(numbers);


// #### Task 4 🖥

// Дан массив:

// ```javascript
//     const students = ['Polina', 'Dasha', 'Masha']
// ```

// + Удалите последний элемент массива, затем вместо него добавьте в массив студента `Borya`.
// + Удалите первый элемент массива, затем вместо него добавьте в массив студента `Andrey`.
// + Полученный результат не забудьте вывести в консоль.
// const students = ['Polina', 'Dasha', 'Masha'];
// students.splice(2, 1, 'Borya');
// students.splice(0, 1, 'Andrey');
// console.log(students);

// #### Task 5 🖥

// Дан массив:

// ```javascript
//     const cats = ['Gachito', 'Tom', 'Batman']
// ```

// Выведите в консоль все элементы массива. Сначала через цикл **`for`**, затем **`for of`**.

// const cats = ['Gachito', 'Tom', 'Batman'];
// for (let i = 0; i < cats.length; i += 1) {
// 	console.log(cats[i]);
// }

// const cats = ['Gachito', 'Tom', 'Batman'];
// for (let elem of cats) {
// 	console.log(elem);
// }

// #### Task 6 🖥

// ```javascript
//     const evenNumbers = [2, 4, 6, 8, 10]
//     const oddNumbers = [1, 3, 5, 7, 9]
// ```

// + Соедините два массива чисел в один.
// + В полученном массиве попробуйте найти индекс числа **`8`**

// const evenNumbers = [2, 4, 6, 8, 10];
// const oddNumbers = [1, 3, 5, 7, 9];
// const numbers = evenNumbers.concat(oddNumbers);
// console.log(numbers);
// console.log(numbers.indexOf(8));

// #### Task 7 🖥

// Дан массив:

// ```javascript
//     const binary = [0, 0, 0, 0]
// ```
 
// + Наш бинарный массив неполный, в нем явно не хватает единиц.
// + Превратите данный массив в строку.

// > [0, 0, 0, 0] -> '0101010'

// const binary = [0, 0, 0, 0];
// const bin = binary.join(1);
// console.log(bin);


// ### ADVANCED level

// > Для решения задач используйте циклы **`for`** или **`for of`**

// #### Task 1 👨‍🏫

// Реализуйте функцию которая будет проверять, является ли слово палиндромом.
// const str = prompt ('enter smth', '');
// function ifPoly(str){
//     str = str.toLowerCase();
//     return str === str.split('').reverse().join('');
// }
// console.log(ifPoly(str));

// #### Task 2 👨‍🏫

// ```javascript
//     const matrix = [
//         [12, 98, 78, 65, 23],
//         [54, 76, 98, 43, 65],
//         [13, 324, 65, 312],
//         [9092, 22, 45, 90000],
//     ]
// ```

// > Выведите в консоль среднее значение чисел в многомерном массиве.
// const matrix = [
//     [12, 98, 78, 65, 23],
//     [54, 76, 98, 43, 65],
//     [13, 324, 65, 312],
//     [9092, 22, 45, 90000],
// ]
// let sum = 0;
// let countNumb = 0; 
// for ( let i = 0; i < matrix.length; i += 1) {
//     for (let j = 0; j < matrix [i].length; j += 1) {
//         sum += matrix[i][j];
//         countNumb += 1;
//         console.log(i, j, sum, countNumb)
//     }
// }
// console.log(sum / countNumb);

// #### Task 3 👨‍🏫

// Дан массив:

// ```javascript
//    const mixedNumbers = [-14, 24, -89, 43, 0 , -1, 412, 4]
// ```

// Создайте два массива, в один поместите все положительные числа включая 0, в другой все отрицательные. Оба массива затем выведите в консоль. 

// const mixedNumbers = [-14, 24, -89, 43, 0 , -1, 412, 4];
// mixedNumbers.sort();
// const a = mixedNumbers.slice(0, 3);
// const b = mixedNumbers.slice(3, 8);
// console.log(mixedNumbers, a, b); // easy one
//------------------------
// const mixedNumbers = [-14, 24, -89, 43, 0 , -1, 412, 4];
// const a = [];
// const b = [];
// for (let i = 0; i < mixedNumbers.length; i += 1) {
//     if (mixedNumbers[i] < 0) {
//         a.push(mixedNumbers[i]);
//     } else {
//         b.push(mixedNumbers[i]);
//     }
// }
// console.log(a, b); // difficult one


// #### Task 4 👨‍🏫

// Создать массив длинной не менее 5, из динамически созданных случайных чисел. Далее написать алгоритм который берет все числа из исходного массива, 
//возводит их в куб и записывает в новый массив. В конце вывести оба массива в консоль.

// const a = [];
// const cubedA = [];
// function getRandomInt() {
//     return Math.floor(Math.random() * 10) ;
// }
// for (let i = 0; i < 5; i += 1) {
//     a.push(getRandomInt());
// }
// console.log(a);
// for (let j = 0; j < a.length; j += 1) {
//     cubedA.push(Math.pow(a[j], 3));
// }
// console.log(cubedA);

