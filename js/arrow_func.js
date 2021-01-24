/*
function sum( a, b) {
    return a + b
}

function cube( a ) {
    return a ** 3 // возведение в степень
}
*/
// Стрелочные
const sum = ( a, b ) => {
    return a + b
}
// или
const sum1 = ( a, b ) => a + b
/*
const cube = ( a ) => {
    return a ** 3
}
*/
// Можно переписать так если один аргумент и состоит из одной строки
const cube = a  => a ** 3
// console.log(sum( 2, 5))
// console.log(cube( 3))

//setTimeout( () => console.log('test'), 1000)

// Context
// Стрелочная функция не создает своего контекста и this ссылыется на объект выше в данном случае ссылается на объект global в node или window в браузере
const arrowLog = () => console.log(this)
const person = {
    name: 'serg',
    age: 22,
    log: arrowLog,
    // Старый метод чтобы достучаться до контекста текущего объекта
    // delayLog: function () {
    //     let self = this
    //     setTimeout( function () {
    //         console.log(self.name)
    //     })
    // }
    // При стрелочной функции так как она ссылается на предедущий контекст можно использовать this
    delayLog: function () {
        setTimeout( () => {
            console.log(this.name)
        })
    }
}
//person.delayLog()
// Так мы возращаем объект
const obj = () => ({ name: 22, age: 44})
console.log( obj() )