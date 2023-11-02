/*
Дан массив [1, 2, 3, 4, 5] с помощью метода reduce
сделать объект в котором ключ будет равен элементу массива, а значение (элемент * 100)
input: [1, 2, 3, 4, 5]
output: {1: 100, 2: 200, 3: 300 ...}
*/
// let numbers = [1,2,3,4,5];
// const result = numbers.reduce((obj, element )=> {
//     return {
//         ...obj,
//         [element] : element * 100
//     }
// }, {})
// console.log(result);

/*
Дан массив ['skill1', 'skill2', ... 'skilln']
скиллы произвольные самим придумать.
    Написать функцию которая создает из массива
skills объект с рандомными значениями от 1 до 100,
    использовать reduce и Math.random()
input: ['hook', 'blackhole']
output: {'hook': 20, 'blackhole: 100'}
*/
// let skills = ['code','solve','multitask','dance','play'];
// const skillsWithRandomNum = skills.reduce((obj, skill) => {
//     return {
//         ...obj,
//      [skill] : Math.floor((Math.random()*100+1))
//     }
// }, {});
// console.log(skillsWithRandomNum);

/*
Дан произвольный массив из чисел больше 0
с помощью reduce посчитать сумму четных и нечетных чисел.
    input: [1,2,3,4,5,6,7,8,9,10,11, 100, 200, 300]
output: { even: 100, odd: 100 }
*/
// 100 это для примера, сумма должна высчитываться.
// const numbers = [1,2,3,4,5,6,7,8,9,10,11, 100, 200, 300];
// const oddAndEvenSum = numbers.reduce((obj, num) => {
//     if(num % 2 === 0) {
//             obj.even += num;
//
//     } else{
//              obj.odd += num;
//     }
//     return obj;
// }, {even:0, odd:0});
// console.log(oddAndEvenSum);

/*
Дан массив  [ { name: 'Harry Potter', house: 'Gryfindor' },
    { name: 'Cedric Diggory', house: 'Hufflepuff' },
    { name: 'Tonks', house: 'Hufflepuff' },
    { name: 'Ronald Weasley', house: 'Gryfindor' },
    { name: 'Hermione Granger', house: 'Gryfindor' }];
Создайте новый массив, который будет содержать только имена мастеров из Хаффлпаффа.
    Сделайте эту задачу двуми способоами:
 */
// let harryArray =
//     [ { name: 'Harry Potter', house: 'Gryfindor' },
//     { name: 'Cedric Diggory', house: 'Hufflepuff' },
//     { name: 'Tonks', house: 'Hufflepuff' },
//     { name: 'Ronald Weasley', house: 'Gryfindor' },
//     { name: 'Hermione Granger', house: 'Gryfindor' }];
// const hupplepuff = harryArray.filter(item => item.house === 'Hufflepuff')
//     .map(item => item.name);
// console.log(hupplepuff);
//
// const hufflepuff2 = harryArray.reduce((arr, item) => {
//     if(item.house === 'Hufflepuff'){
//         return [...arr, item.name];
//     }
//     return arr;
// }, []);
//
// console.log(hufflepuff2);

/*
Дан массив [3, 4, 1, 2, 7].
    Создайте две переменные и
запишите туда результат сортировки:
    От большего к меньшему
От меньшего к большему
*/
// let numbers = [3, 4, 1, 2, 7];
// const increaseToDecrease = numbers.slice().sort((a,b) => (a - b));
// const decreaseToIncrease = numbers.sort((a,b) => (b - a));
// console.log(increaseToDecrease);
// console.log(decreaseToIncrease);

/*
Создайте произвольный массив из строк
и также создайте две переменные,
    куда запишите результат сортировки:
    От A-Z
От Z-A
*/
// const fruits = ['apple', 'orange','kiwi','plum','banana','melon','watermelon'];
// const A_Z_sort = fruits.slice().sort(function(a,b) {
//     let fruitA = a.toLowerCase();
//     let fruitB = b.toLowerCase();
//     if(fruitA > fruitB) return 1;
//     if(fruitA < fruitB) return -1;
//     return 0;
// })
//
// const Z_A_sort = fruits.sort(function(a,b) {
//     let fruitA = a.toLowerCase();
//     let fruitB = b.toLowerCase();
//     if(fruitA > fruitB) return -1;
//     if(fruitA < fruitB) return 1;
//     return 0;
// })
// console.log(A_Z_sort);
// console.log(Z_A_sort);
