
// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let x = 'hello world'
// console.log(x.length)

// let y = 'lorem ipsum'
// console.log(y.length)

// let f = 'python is cool'
// console.log(f.length)


// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'


// console.log("hello world".toUpperCase())

// console.log("lorem ipsum".toUpperCase())

// console.log("python is cool".toUpperCase())


// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// console.log('HELLO WORLD'.toLowerCase())

// console.log('LOREM IPSUM'.toLowerCase())

// console.log('PYTHON IS COOL'.toLowerCase())


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// console.log(' dirty string   '.trim())
// console.log(' dirty string   '.replaceAll(" ", ""))


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.

// let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
//
// function stringToarray(str){
//     console.log(str.split(" "))}


// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

// В мене не виводить в консоль знову, чи знову браузер тормозить чи десь помилка?

//
// let arr = [10,8,-7,55,987,-1011,0,1050,0]
//
// let mapped = arr.map(function(elem) {
//     return elem.toString();})


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.

// let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]


// let nums = [11,21,3];
// console.log(nums.sort(function(a, b){
//     // return b - a
//     // return a- b
//
// }))


// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//      {title: 'Java Complex', monthDuration: 6},
//      {title: 'Python Complex', monthDuration: 6},
//      {title: 'QA Complex', monthDuration: 4},
//      {title: 'FullStack', monthDuration: 7},
//      {title: 'Frontend', monthDuration: 4}
//  ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

// console.log(coursesAndDurationArray.sort(function (a, b){
//     return b.monthDuration - a.monthDuration
// }))

// let filtred = coursesAndDurationArray.filter(item => item.monthDuration > 5)
//     console.log(filtred)


// console.log(coursesAndDurationArray.sort(function (a, b){
//     return b.monthDuration - a.monthDuration
// }))



// описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
// cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//     value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'

// let cards = [
//
//     {card: 'clubs', value: 6, color:'black'},
//     {card: 'clubs', value: 7, color:'black'},
//     {card: 'clubs', value: 8, color:'black'},
//     {card: 'clubs', value: 9, color:'black'},
//     {card: 'clubs', value: 10, color:'black'},
//     {card: 'clubs', value: 'Jack', color:'black'},
//     {card: 'clubs', value: 'Queen', color:'black'},
//     {card: 'clubs', value: 'King', color:'black'},
//     {card: 'clubs', value: 'Ace', color:'black'},
//
//     {card: 'spades', value: 6, color:'black'},
//     {card: 'spades', value: 7, color:'black'},
//     {card: 'spades', value: 8, color:'black'},
//     {card: 'spades', value: 9, color:'black'},
//     {card: 'spades', value: 10, color:'black'},
//     {card: 'spades', value: 'Jack', color:'black'},
//     {card: 'spades', value: 'Queen', color:'black'},
//     {card: 'spades', value: 'King', color:'black'},
//     {card: 'spades', value: 'Ace', color:'black'},
//
//     {card: 'tambourines', value: 6, color:'red'},
//     {card: 'tambourines', value: 7, color:'red'},
//     {card: 'tambourines', value: 8, color:'red'},
//     {card: 'tambourines', value: 9, color:'red'},
//     {card: 'tambourines', value: 10, color:'red'},
//     {card: 'tambourines', value: 'Jack', color:'red'},
//     {card: 'tambourines', value: 'Queen', color:'red'},
//     {card: 'tambourines', value: 'King', color:'red'},
//     {card: 'tambourines', value: 'Ace', color:'red'},
//
//     {card: 'hearts', value: 6, color:'red'},
//     {card: 'hearts', value: 7, color:'red'},
//     {card: 'hearts', value: 8, color:'red'},
//     {card: 'hearts', value: 9, color:'red'},
//     {card: 'hearts', value: 10, color:'red'},
//     {card: 'hearts', value: 'Jack', color:'red'},
//     {card: 'hearts', value: 'Queen', color:'red'},
//     {card: 'hearts', value: 'King', color:'red'},
//     {card: 'hearts', value: 'Ace', color:'red'},
//
//
//
//     {value: 'Joker', color:'red'},
//     {value: 'Joker', color:'black'},
// ];

// function aceSpade(item){
//     if (cards.card === 'spade' && cards.value === 'ace'){
//         console.log(item.indexOf() + "Spade Ace")
//     }
// }
//
// cards.forEach(aceSpade)


// function all666(item){
//     if (cards.value === 6){
//         console.log(item)
//     }
// }
//
// cards.forEach(all666)


// function red(item){
//     if (cards.color === 'red'){
//         console.log(item)
//     }
// }
//
// cards.forEach(red)

// function tambourines(item){
//     if (cards.value === 'tambourines'){
//         console.log(item)
//     }
// }
//
// cards.forEach(tambourines)


// function clubs(item){
//     if (cards.value === 'clubs' && ){
//         console.log(item)
//     }
// cards.forEach(clubs)

// let filter = cards.filter(function(item){
//     return cards.card === 'clubs' && cards.value > 9
// })


// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]

// let newcards = cards.reduce((accumulator, item) =>{
//     accumulator.spades.push(cards.card === "spades")
//     accumulator.diamonds.push(cards.card === "diamonds")
//     accumulator.hearts.push(cards.card === "hearts")
//     accumulator.clubs.push(cards.card === "clubs")
//
//     return accumulator
//
// }, {spades:[],diamonds:[], hearts:[], clubs:[]});
