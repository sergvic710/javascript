// Object
const person = {
    name: "serg",
    age: 49,
    info: function () {
        console.group('Person')
        console.log(`Name is ${this.name}`)
        console.log('Age is ' + this.age)
        console.groupEnd()
    },
    infoJob: function (job, phone) {
        console.group('Job info')
        console.log(`Name is ${this.name}`)
        console.log(`Jpb is ${job}`)
        console.log('Phone is ' + phone)
        console.groupEnd()
    }
}

Object.prototype.sayHello = function () {
    console.log('Hello!')
}

const nata = Object.create(person)
nata.name = 'nata'
nata.age = 54
//^^^ - this   откуда вызываем
// Передаем контекст person , bind возвращает новую функцию которая привязана к новому контексту
/*
nata.info.bind(person)()
nata.infoJob.bind(person,'front','3432432')()
nata.infoJob.call(person,'front','3432432_call')
nata.infoJob.apply(person,['front','3432432__apply'])
*/


//  Замыкания ***************************************
function createFun( n ) {
    // Замыкание это когда переменная передается в функцию которая создается внутри данной функции
    return function () {
        console.log(1000 * n)
    }
}
const fun = createFun( 4)
//fun()
// Пример
function incrementor( n ) {
    return function ( m ) {
        return n + m
    }
}
const addOne = incrementor(1)
const addTen = incrementor(10)
// console.log( addOne(10))
// console.log( addTen(101))

function createUrl( proto, domain ) {
    return function ( req ) {
        return `${proto}://${domain}/${req}`
    }
}
const url = createUrl('http', 'serg.local')
// console.log(url('login'))

// Пример для теста
function logPerson(arg) {
    console.log(`Person ${this.name}, ${this.age}, ${this.job}`)
    console.log(`${arg}`)
}
const person1 = {name: 'Miha', age: 44, job: 'front'}
const person2 = {name: 'Nata', age: 54, job: 'front'}

// bind( person1, logPerson)
// bind1( person2, logPerson)('serg')

function bind( person, callBack) {
    callBack.bind(person)()
}
// или
function bind1( person, callBack) {
    return function(...args) {
        callBack.apply(person, args)
    }
}

// Асинхронность *****************************************************
// Демонстрация работы javascript
// http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D
console.log(' Start 1')
console.log(' Start 2')
setTimeout(function () {
    console.log('SetTime 5 sec')
},3000)
// Выполняется после всего скрипта
setTimeout(function () {
    console.log('SetTime 0 sec')
},0)
console.log(' End')