require('dotenv').config()
const config = {}

config.url = `http://api.weatherstack.com/current?access_key=${process.env.myAPIKey}&query=`
config.country = 'Moscow'

module.exports = config