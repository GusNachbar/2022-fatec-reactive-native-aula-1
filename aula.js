//promises: ECMAScript 2015
//async/await: ECMAScript 2017


// async function hello (nome){
//     return `Hello, ${nome}`
// }

// const resultado = hello ("João")
// resultado.then (res => console.log(res))


// function hello (nome){
//     return new Promise (function (resolve, reject){
//         resolve(`Hello, ${nome}`)
//     })
// }

// const resultado = hello("Ana")
// resultado.then(res => console.log(res))

// function hello (nome){
//     return `Hello, ${nome}`
// }
// const resultado = hello ("Ana")
// console.log("Até mais")


// require('dotenv').config()
// const axios = require ('axios')

// const { PROTOCOL, BASE_URL, APPID, Q, CNT, UNITS, LANGUAGE } = process.env

// const url = `${PROTOCOL}://${BASE_URL}?q=${Q}&appid=${APPID}&cnt=${CNT}&units=${UNITS}&lang=${LANGUAGE}`

// axios.get(url)
// .then(res => {
//     //console.log(res)
//     return res.data
// })
// .then(res => {
//     console.log(res)
//     return res
// })
// .then(res => {
//     console.log(res.cnt)
//     return res
// })
// .then(res => {
//     return res['list']
// })
// .then(res => {
//     for (let i = 0; i < res.length; i++){
//         console.log ("Temp min: " + res[i].main.temp_min)
//         console.log ("Temp max: " + res[i].main.temp_max)
//         console.log("Descrição: " + res[i].weather[0].description)
//     }
//     //para cada previsão, exibir:
//     //temperatura máxima
//     //temperatura mínima
//     //descrição
// })

