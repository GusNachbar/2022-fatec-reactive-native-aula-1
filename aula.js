require('dotenv').config()

const cityList = require('./cityList.js');
const axios = require ('axios')

const { PROTOCOL, BASE_URL, APPID, UNITS, COUNT, LANGUAGE, CITY } = process.env

const url = `${PROTOCOL}://${BASE_URL}?q=${CITY}&appid=${APPID}&cnt=${COUNT}&units=${UNITS}&lang=${LANGUAGE}`

axios.get(url)
.then(res => {
    console.log(res.data)
    return res.data
})
.then(res => {
    console.log(res.cnt)
    return res
})
.then(res => {
    return res.list
})
// .then(res => {
    
//     res.forEach(element => {
//         console.log(new Date(+(element.dt) * 1000).toLocaleString());
//         console.log(`Max: ${element.main.temp_max}`);
//         console.log(`Min: ${element.main.temp_min}`);
//         console.log(`Descrição: ${element.weather[0].description} \n`);
//     });
// })

// cityList.forEach(element => {
//     console.log(element.name.startsWith('A'));
// })
