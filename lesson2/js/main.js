'use strict';
//while, do while, for

while (true) {
    let num = parseInt(prompt("Введите положительное число"));
    if (num < 0) continue; // переход текущего цикла на следующую итерацию текущего цикла, те есразу к проверки уловия заново
    if (num === 0) break; /// вообще заверщает цикл текущий
  console.log(`${num} * ${num} = ${num * num} `);

}

//дз 4 while(true)
/// дз
let plates = 4;
let fairy = 10;
while  (fairy > 0 && plates > 0 ){

}

