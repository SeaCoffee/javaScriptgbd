// - Нам дано масив друзів let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"]; Потрібно зробити перевірку якщо
// кількість елементів у масиві більше або дорівнює 3, то виводиться повідомлення про те, що це великий масив, в якому  3 і більше елементи.
//     Інакше слід вивести на екран повідомлення про те, що це маленький масив, в якому менше 3-х елементів.

// let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"]
// if (friends.length >= 3){
//     console.log("Large arr")}
// else {
//     console.log("little one")
// }


// - Маємо 3 числа і між ним  нам потрібно знайти те що посередині.
//     Знайти, яке з них є середнім (більше одного, але менше за інше).
//     Перевірити, чи знаходиться перше число між двома іншими.


// let numbers = [1, 2, 3];
// if (numbers[0] > numbers[1] || numbers[2] > numbers[1]){
//     console.log("middle")
// }
// console.log(numbers.length)
// console.log(numbers.indexOf(2))

// - Перепишіть конструкцію if з використанням умовного оператора '?':
// let result;
// if (a + b < 4) {
//     result = 'Мало';
// } else {
//     result = 'Багато';
// }

// let a = 3
// let b = 1
// let result = (a + b < 4) ? "Мало" : "Багато";{
//     console.log(result)
// }

// - Маємо будь яке число від -100 , 0 , +100 потрібно перевірити яким є число: позитивним, негативним або нулем
// напишіть це тернарним оператором

// let any = -5
// let num = (any === 0) ? "number is a 0": (any > 0) ? "number" : "negative number";
// console.log(num)

// - У нас є змінна test, якщо дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false.
//     Напишіть два варіанти скрипта - з коротким записом(тернаркою)

// let test = 25
//
// if (test) {
//     console.log("true")
// }
// else {
//     console.log("false")
//     }

// let test = ? "true" : "false"; {
//     console.log(test)
// }

// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!

// let js = promt("what is JavaScript official name?");
// if (js === "ECMAScript"){
//     console.log("Correct!")}
// else{
//     console.log("You dont know? ECMAScript!")
// }

// - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
//     Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.

// let flat = 25
// if (flat >= 1 && flat <=20){
//     console.log("first")
// };
// if (flat >= 21 && flat <=48){
//     console.log("second")
// };
// if (flat >= 49 && flat <=90){
//     console.log("third")
// };

// - Ми маємо змінну number в яку користувач задає числове значення,
//     якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО

// let number = +promt()
// if (number === 10){
//     console.log("yes")
// }
// if (number != 10){
//     console.log("no")
// }

// - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
//     Змінна, яка характеризує температуру.
//     Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
//     Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН
//
// let temperature = 10
// if (temperature >10 && temperature <=22){
//     console.log("we go!")
// }
// else{
//     console.log("online studyng")
// }

// - За допомогою switch case - реалізувати гру - вікторину,
// де ми вводимо число від 1 до 5. І взалежності від введеного
//     числа нам дається приз. (Авто, Мото, Телефон, і т.д )
//     і якщо число не підходить тоді  вивести Повідомлення - що число не вірне ...


// switch ("enter number from 1 to 5"){
//     case 1:
//         console.log("auto!");
//         break;
//     case 2:
//         console.log("motocycle!");
//         break;
//     case 3:
//         console.log("mobile phone!");
//         break;
//     case 4:
//         console.log("netbook!");
//         break;
//     case 5:
//         console.log("surprise!")
//         break;
//     default:
//         conslole.log("wrong number");
//         break;
// }
