#!/usr/bin/env node

const yargs = require('yargs/yargs');
const {hideBin} = require('yargs/helpers');
   
const arrMonthName = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];

const argv = yargs(hideBin(process.argv))
    .command(['current'], 'the command', () => {}, current)
    .command(['add'], 'the command', () => {}, added)
    .command(['sub'], 'the command', () => {}, subbing)
    .option('year', {
        alias: 'y',
        description: 'текущий год'
    })
    .option('month', {
        alias: 'm',
        description: 'текущий месяц'
    })
    .option('date', {
        alias: 'd',
        description: 'текущий месяц'
    })
    .argv;


function current(argv) {
    const currentDate = new Date();
    if (argv.year){
        console.log(`Текущий год: ${currentDate.getFullYear()}`);
    }
    if (argv.month){
        console.log(`Текущий месяц: ${arrMonthName[currentDate.getMonth()]}`);
    }
    if (argv.date){
        console.log(`Сегодня ${currentDate.getDate()} число`);
    }
    if (!argv.year && !argv.month && !argv.date) {
        console.log(`Сейчас: ${currentDate.toISOString()}`);
    }
}
function added(argv) {
    let currentDate = new Date();
    if (argv.year){
        currentDate.setFullYear(currentDate.getFullYear() + argv.year);
    }
    if (argv.month){
        currentDate.setMonth(currentDate.getMonth() + argv.month);
    }
    if (argv.date){
        currentDate.setDate(currentDate.getDate() + argv.date);
    }
    console.log(`Запрошенная дата: ${currentDate.toISOString()}`);
}
function subbing(argv) {

    let currentDate = new Date();
    if (argv.year){
        currentDate.setFullYear(currentDate.getFullYear() - argv.year);
    }
    if (argv.month){
        currentDate.setMonth(currentDate.getMonth() - argv.month);
    }
    if (argv.date){
        currentDate.setDate(currentDate.getDate() - argv.date);
    }
    console.log(`Запрошенная дата: ${currentDate.toISOString()}`);
}