const number = Math.floor(Math.random() * 100);
//console.log(number);
console.log('Загадано число в диапазоне от 0 до 100');

const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.setPrompt(`Введите число: `);
rl.prompt();
rl.on( 'line' , (num) => {
    if (Number(num) === number) {
        console.log(`Отгадано число ${num}`);
        rl.close();
    } else {
        Number(num) < number ? console.log('введенное число меньше') : console.log('введенное число больше');
    }
});