// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
//     Перевірте  скрипт при a, що дорівнює 1, 0, -3


let x = 25;
if (x != 0) {
    console.log('correct!');
} else {console.log('uncorrect!');
}

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код,
// який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).


let time = 59
let num = 56

if (num <= 15){
    console.log('first quarter of an hour')
}
if (num >=16 && num <=30) {
    console.log('second quarter of an hour')
}

if (num >=31 && num <= 45){
    console.log('third quarter of an hour')
}

if (num >= 46 && num <= 59){
    console.log('fourth quarter of an hour')
}


// - У змінній day дано якесь число від 1 до 31. Потрібно визначити,
// у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
//


let number = 31
let numberCheck = 25

if (numberCheck >= 1 && numberCheck <= 10) {
    console.log('first decade of month')
}

if (numberCheck >= 11 && numberCheck <= 20){
    console.log('second decade of month')
}

if (numberCheck >= 20 && numberCheck <=31){
    console.log('third decade of month')
}

// - Скласти розклад на тиждень за домопоги switch.
// Користувач вводить порядковий номер дня тижня
// і на екрані відображається інфа що заплановано на цей день
// (можна замість плану на день, назву дня англійською).

switch ("Enter number of day of a week"){
    case "monday":
        console.log('zoom meeting');
        break;
    case "Tuesday":
        console.log('work');
        break;
    case "Wednesday":
        console.log('It is Wednesday, my dudes');
        break;
    case "Thursday":
        console.log("It is almost Friday");
        break;
    case "Friday":
        console.log("party");
        break;
    case "Saturday":
        console.log("weekend!")
    case "Sunday":
        console.log("Have a rest")
        break;
}

//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

let number1 = +promt('Enter first number')
let number2 = +promt('Enter second number')

if (number1 > number2){
    console.log(number1 + " number higher")
}
if (number2 > number1){
    console.log(number2 + " number higher")
}
else if (number2 === number1){
    console.log("Equal Numbers")
}

//     - є змінна х, яка може прийняти будь-яке значення
//     (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення
//         "default"  якщо значення змінної х являється falsy
//         (хибноподыбне, тобто кастується до false)

let x = promt('Enter anything')
if (x === 0 || x === '' || x === null || x === NaN || x === undefined){
    console.log('default')
}
else {console.log(x)}


