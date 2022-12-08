// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його,
// якщо два аргументи - складає або конкатенує їх між собою.
//нічого не виводить в консоль...

// function newF(arguments){
//     if (arguments.lenth === 1){
//         return arguments}
//     else if (arguments.lenth === 2){
//         return arguments[0] + (arguments[1])
//
//     }
// }
//
// newF(1, 2)


// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// function less(a,b,c){
//     let min
//     if (a < b && a < c){
//         min = a
//     }
//     else if(b < a && b < c){
//         min = b
//     }
//     else if(c < a && c < b){
//         min = c
//     }
//
// return min
// }
//
// less(3,4,5)



// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// function bigest(a,b,c){
//     let max
//     if (a > b && a > c){
//         max = a
//     }
//     else if(b > a && b > c){
//         max = b
//     }
//     else if(c > a && c > b){
//         max = c
//     }
//
// return max
// }
//
// biggest(3,4,5)



// - створити функцію яка повертає найбільше число з масиву

// arr = [1,2,3]
// min = arr[0]
// max = min
// for (i = 1; i <= arr.length; i++){
//     if(arr[i] > max)
//         max = arr[i]
//     if (arr[i] < min)
//     min = arr[i]
// }
//
// console.log(max)



//?
// arr = [1,2,3]
//  for (let i = 0; i <= arr.length; i++){
//      if (arr[i] > arr[0]){
//          arr[0] = arr[i]
//      }
//  }
//  console.log(arr[0])


// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.


// arr = [1,2,3]
// function middle(arr){
//     let sum = 0
//  for (let i of arr){
//      sum += i
//  }
//  let res = sum / arr.length
//  console.log(res)
//
// }
//
// middle(arr)

//  - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.


// arr = []
// function numbers(arr){
//     for (i = 0; i <= 100; i++){
//        arr[i] = (Math.round(Math.random()*100))
//     }
//     console.log(arr)
// }
// numbers(arr)



// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
//  function register(str){
//      console.log('str'[0].toUpperCase())
//  }
//
// register("jgfcuykxdy")

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

//Виводить [1] в консоль!... а не зворотній масив, чому?


// let arr = [1,2,3]
// function reverse(array) {
//     let newArr = []
//     for (let i = array.length - 1; j = 0, i >= 0; i--) {
//     newArr[j++] = array[i]
// }
//
//     console.log(newArr)
// }
//
//
// console.log(reverse(arr))

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit.
//     limit - аргумент, який характеризує кінцеве значення діапазону.

// let arr = []
// function ran(arr, limit){
//     for (let i = 0; i <= limit; i++){
//         arr[i] = (Math.round(Math.random()*100))
//     }
//     console.log(arr)
// }
// ran(arr, 10)



// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами
// та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]

// В чому помилка?
//
// arr1 = [1,2,3,4]
// arr2 = [2,3,4,5]
// function sum (arrey, arrrey){
//     let res = [];
//     for (i = 0; i < arrey.length; i++) {
//          for (j = 0; arrrey.length; j++) {
//             res += arr1[i] + arr2[j]
//         }
//     }
//     return res
// }
//
// console.log(sum(arr1, arr2))


// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
//
//  function User(id, name, surname , email, phone){
//      this.id = id;
//      this.name = name;
//      this.surname = surname;
//      this.email = email;
//      this.phone = phone;
//
//  }
//
//  let user1 = new User("95955", "ivan", "nekrasov", "jhsvjl@gmail.com", '098777394865')
//  let user2 = new User("0923574", "ivan", "nekrasov", "jhsvjl@gmail.com", '098777394865')
//  let user3 = new User("012346", "ivan", "nekrasov", "jhsvjl@gmail.com", '098777394865')
//  let user4 = new User("9347", "ivan", "nekrasov", "jhsvjl@gmail.com", '098777394865')
//  let user5 = new User("093265", "ivan", "nekrasov", "jhsvjl@gmail.com", '098777394865')
//  let user6 = new User("040985", "ivan", "nekrasov", "jhsvjl@gmail.com", '098777394865')
//  let user7 = new User("53654", "ivan", "nekrasov", "jhsvjl@gmail.com", '098777394865')
//  let user8 = new User("2222", "ivan", "nekrasov", "jhsvjl@gmail.com", '098777394865')
//  let user9 = new User("666", "ivan", "nekrasov", "jhsvjl@gmail.com", '098777394865')
//  let user10 = new User("777", "ivan", "nekrasov", "jhsvjl@gmail.com", '098777394865')
//
// arr = []
//
// arr.push(user1, user2, user3, user4, user5, user6, user7, user8, user9, user10)
//
// console.log(arr)

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати ,
// залишивши тільки об'єкти з парними id (filter)

// numResult = arr.filter(function(id) {
//     return arr.id % 2 === 0
// });
// console.log(numResult)

// let result = arr.filter(us => us.id % 2 === 0);
// console.log(result)

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// console.log(arr.sort((a, b) => a.id - b.id))

// - створити класс для об'єктів Client з полями id, name, surname,
// email, phone, order (поле є масивом зі списком товарів)

// створити пустий масив, наповнити його 10 об'єктами Client

// - Взяти масив (Client [] з попереднього завдання).
// Відсортувати його по кількості товарів в полі order по зростанню. (sort)

// class Client{
//     constructor(id, name, surname, email, phone, order){
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//
//     }
// }
// client1 = new Client("12", "alex", "iriyanov", "msebns@gmail.com",
//     "o92837802", ["laptop"])
// client2 = new Client("12", "alex", "iriyanov", "msebns@gmail.com",
//     "o92837802", ["laptop","powerbank",])
// client3 = new Client("12", "alex", "iriyanov", "msebns@gmail.com",
//     "o92837802", ["laptop","powerbank","phone"])
// client4 = new Client("12", "alex", "iriyanov", "msebns@gmail.com",
//     "o92837802", ["laptop","powerbank", "phone", "something"])
// client5 = new Client("12", "alex", "iriyanov", "msebns@gmail.com",
//     "o92837802", ["laptop","powerbank", "phone", "evfwv", "jsdcghvlj"])
// client6 = new Client("12", "alex", "iriyanov", "msebns@gmail.com",
//     "o92837802", ["laptop","powerbank", "phone"])
// client7 = new Client("12", "alex", "iriyanov", "msebns@gmail.com",
//     "o92837802", ["laptop","powerbank", "phone"])
// client8 = new Client("12", "alex", "iriyanov", "msebns@gmail.com",
//     "o92837802", ["laptop","powerbank", "phone"])
// client9 = new Client("12", "alex", "iriyanov", "msebns@gmail.com",
//     "o92837802", ["laptop","powerbank", "phone"])
// client10 = new Client("12", "alex", "iriyanov", "msebns@gmail.com",
//     "o92837802", ["laptop","powerbank", "phone"])
//
//
// emptyArr = []
//
// emptyArr.push(client1, client2, client3, client4, client5, client6, client7, client8, client9, client10)
//
// console.log(emptyArr.sort((a, b) => a.order.length - b.order.length))

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// function Cars(model, brand, year, maxSpeed, engine){
//     this.model = model
//     this.brand = brand
//     this.year = year
//     this.maxSpeed = maxSpeed
//     this.engine - engine
//
// }
// this.drive = function(){
//     console.log(`їдемо зі швидкістю ${maxSpeed} на годину`)
// }
//
// this.info = function(){
//     console.log("Model - "${model}, "Brand - "${brand}, "Year - "${year}, "Max Speed - "${maxSpeed}, "Engine - "${engine})
//
// }
//
// this.maxSpeed = function increaseMaxSpeed(newSpead){
//     this.maxSpeed === newSpeed
// }
//
// this.year = function changeYear(newValue){
//     this.year === newValue
// }
// this.driver = function addDriver(driver){
//     this.driver = driver
// }

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// class Cars {
//     constructor(model, brand, year, maxSpeed, engine){
//         this.model = model
//         this.brand = brand
//         this.year = year
//         this.maxSpeed = maxSpeed
//         this.engine - engine
//     }
// }
//
//  this.drive = function(){
//      console.log(`їдемо зі швидкістю ${maxSpeed} на годину`)
//  }
//
//  this.info = function(){
//      console.log("Model - "${model}, "Brand - "${brand}, "Year - "${year}, "Max Speed - "${maxSpeed}, "Engine - "${engine})
//
//  }
//
//  this.maxSpeed = function increaseMaxSpeed(newSpead){
//     this.maxSpeed === newSpeed
//  }
//
//  this.year = function changeYear(newValue){
//      this.year === newValue
//  }
//  this.driver = function addDriver(driver){
//      this.driver = driver
//  }


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

