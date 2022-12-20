
// / - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function areaRectangle(a, b){
//     let action = (a*b)/2
//     return action
// }
//
// areaRectangle(25,3)


// - створити функцію яка обчислює та повертає площу кола з радіусом r

// function areaOval(r){
//     let action = Math.PI*r**2
//     return action
//
// }
// console.log(areaOval(25))


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// function  areaCylinder(h, r) {
//     let result = Math.PI*r*r*h;
//     console.log(result)
// }
// areaCylinder(5, 10)


// - створити функцію яка приймає масив та виводить кожен його елемент

// function arreyNew(arr) {
//     for(let i of arr) {
//         console.log(i)
//     }
// }
//
// arreyNew([2,3,4,5,6,7])


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function paragraph(text){
//     document.write(`<p>${text}</p>`)
// }
//
// paragraph('js')


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function list(text){

    // document.write(`<ul>`)
    // document.write(`<li>${text}</li><li>${text}</li><li>${text}</li>`)
    // document.write(`</ul>`

// }
// list ("js")


// - створити функцію яка повертає найменьше число з масиву
// Не можу знайти помилку, чому не повертає результат

// let arr = [1,2,3]
// let min = arrey[0]
//
// function find(arrey){
//
//     for (let i of arrey){
//         if (arrey[i] < min){
//             min = arrey[i]
//         }
//     }
//     return(min)
// }
// find(arr)


//  - створити функцію яка створює ul з трьома елементами li.
// Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function list2(greeting, loop){
//     document.write(`<ul>`)
//     for(let i = 0; i < loop; i++){
//     document.write(`<li>${greeting}</li>`)
//  }
//     document.write(`</ul>`)
//  }
//  list2("hello", 3)


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список


// let arr = [null, 2, 3, 4, 5, "jgvu", "jbgv", true]
//
//  function list3(arrey) {
//          document.write(`<ul>`)
//          for (let i of arrey) {
//                  document.write(`<li>${i}</li>`)
//
//          }
//          document.write(`</ul>`)
//
//  }
//
// list3(arr)

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок

// let arr = [
//     {id: 666,
//         name: 'Igor',
//         age: 22},
//
//     {id: 777,
//         name: 'anna',
//         age: 31
//     }
//     ]
//
// function obj(arrey){
//     for (let i of arrey) {
//         document.write(`<div>${i.id}</div>`)
//         document.write(`<div>${i.name}</div>`)
//         document.write(`<div>${i.age}</div>`)
//     }
// }
// obj(arr)

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// ! Не можу знайти помилку, чому не повертає результат

// let numbers = [10, 20, 30]
// let result = 0
//
// function sum(arrey){
// for (i = 0; i < arrey.length; i++) {
//     if (arrey[i] > 0){
//          result += arrey[i]
//     }
//
//  }
// return(result)
// }
// sum(numbers)


// Всі функції повинні бути описані стрілочним типом!!!!

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// - створити функцію яка повертає найбільше число з масиву
// - створити функцію яка повертає найменьше число з масиву
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)


const less = (a, b, c) => {
    let min = 0
    if (a < b && a < c){
        min = a
    }
    else if(b < a && b < c){
        min = b
    }
    else if(c < a && c < b){
        min = c
    }

return min
};

 less(3,4,5)



