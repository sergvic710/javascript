console.log('Request data ...')

// setTimeout(() => {
//     const data = {
//         server: 'aws',
//         port: '300'
//     }
//     console.log('Prepare data ...')
//     setTimeout( () => {
//         data.status = 'OK'
//         console.log('Complete')
//         console.log(data)
//     }, 2000)
// }, 2000)

// const p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const data = {
//             server: 'aws',
//             port: '300'
//         }
//         console.log('Prepare data ...')
//         resolve(data)
// //        reject()
//     }, 2000)
// })

// then вызывается когда промез завершен и вызван resolve
// catch вызывается когда промех вызвал reject
// finally вызывается всегда при окончании промеса
// p.then((data) => {
//     const p2 = new Promise( (resolve, reject) => {
//         setTimeout( () => {
//             data.status = 'OK'
//             // console.log('Complete',data)
//             resolve(data)
//         }, 2000)
//     })
//     p2.then( data_ => {
//         console.log('Complete',data_)
//     })
// })

// Можно переписать так
// p.then((data) => {
//     return new Promise( (resolve, reject) => {
//         setTimeout( () => {
//             data.status = 'OK'
//             // console.log('Complete',data)
//             resolve(data)
//         }, 2000)
//     })
// }).then( data_ => {
//          console.log('Complete',data_)
// }).catch( () => {
//     console.log('Error')
// }).finally( () => {
//     console.log('Finally')
// })

const sleep = ms => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('After ', ms)
            resolve()
        }, ms)
    })
}

// sleep(2000).then( () => console.log('After 2 sec'))
// sleep(3000).then( () => console.log('After 3 sec'))

// then вызывается когда выполнены все промосы в массиве, промисы вызываются синхронно
Promise.all([sleep(2000), sleep(5000)])
    .then(() => console.log('All'))

// then вызывается когда выполнется один из  в массиве, промисы вызываются синхронно
Promise.race([sleep(2000), sleep(5000)])
    .then(() => console.log('All'))
