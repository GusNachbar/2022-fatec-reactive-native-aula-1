require('dotenv').config()
const axios = require ('axios')

const { PROTOCOL, BASE_URL, APPID, Q, CNT, UNITS, LANGUAGE } = process.env

const url = `${PROTOCOL}://${BASE_URL}?q=${Q}&appid=${APPID}&cnt=${CNT}&UNITS=${UNITS}&lang=${LANGUAGE}`

axios.get(url)
.then(res => {
    //console.log(res)
    return res.data
})
.then(res => {
    console.log(res)
    return res
})
.then(res => {
    console.log(res.cnt)
    return res
})

