const path = require('path');
const fs = require('fs');

let nameFile = '';
process.argv.length > 2 ? nameFile = process.argv[2].replace(/[^a-zа-яё_-]/gi, '') + '.txt' : nameFile = 'log.txt';

const filePath = path.join(__dirname, 'log', nameFile);

//module.exports = filePath;

console.log('Игра запущена!');
console.log(`Загадано 1 или 2. Для выхода введите 0.`);
let content = '';
const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.setPrompt("Введите ответ:\n");
rl.prompt();
rl.on( 'line' , (num) => {
    let ran = Math.floor(1 + Math.random() * 2);
    switch (num){
        case '0':
            console.log('Завершение игры.');
            rl.close();
            fs.appendFile(filePath, "\n", (err) => {
                if (err) throw Error(err);
            });
        break;
        case '1':
        case '2':
            if (Number(num) === ran) {
                console.log(`Победа! Было загадано: ${ran}`);
                console.log('Еще попытка. Введите ответ:');
                content = '1';
            } else {
                console.log(`Поражение! Было загадано: ${ran}`);
                console.log('Еще попытка. Введите ответ:');
                content = '0';
            }
            fs.appendFile(filePath, content, (err) => {
                if (err) throw Error(err);
            });
        break;
        default:
            console.log('Некорректный ввод');
            console.log('Еще попытка. Введите ответ:');
        break;
    }
});