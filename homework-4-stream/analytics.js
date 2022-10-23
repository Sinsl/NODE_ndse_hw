const path = require('path');
const fs = require('fs');

let nameFile = '';
process.argv.length > 2 ? nameFile = process.argv[2].replace(/[^a-zа-яё_-]/gi, '') + '.txt' : nameFile = 'log.txt';

const filePath = path.join(__dirname, 'log', nameFile);
//const filePath = require('./games');

fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) throw Error(err);
    const games = data.split('\n');
    let rezult = [];
    games.forEach(item => {
        if (item.length > 0) rezult.push(item.split(''))
    });
    console.log(`Проведено серий игр: ${rezult.length}`);
    let count = 0;
    let win = 0;
    rezult.forEach(item => {
        item.forEach(elem => {
            if (elem === '1') win++;
            count++;
        })
    })
    console.log(`Проведено партий: ${count}`);
    console.log(`Из них выиграно: ${win}, проиграно ${count - win}`);
    console.log(`Соотношение выиграный партий: ${Math.floor((win / count) * 100)}%`);
})
