const http = require('http')
const param = require('./config')

let country = ''
process.argv.length > 2 ? country = process.argv[2] : country = param.country

const url = param.url + country

http.get(url, (res) => {
    const {statusCode} = res
    if (statusCode !== 200) {
        console.log(`Ошибка получения данных: ${statusCode}`)
        return
    }
    res.setEncoding('utf-8')
    let rowData = ''
    res.on('data', (chunk) => rowData += chunk)
    res.on('end', () => {
        let parseData = JSON.parse(rowData)
        console.log(parseData)
    }).on('error', (err) => {
        console.log(err)
    })
})