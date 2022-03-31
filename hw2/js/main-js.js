 'use strict';

 /*
Задача на if
Дана целочисленная переменная count - количество верных ответов.
 В зависимости от значения этой переменной вывести в консоль оценку:

100 - 90 правильных ответов - отлично
89 - 60 правильных ответов - хорошо
59 - 40 правильных ответов - удовлетворительно
39 - 0 правильных ответов - попробуйте еще раз
 */

 //  let count = prompt("Введите ваш результат:")
 let count = 55;
 if (count >= 0 && count <= 39) {
     console.log('Попробуйте еще раз');
 } else if (count >= 40 && count <= 59) {
     console.log('Удовлетворительно');
 } else if (count >= 60 && count <= 89) {
     console.log('Хорошо');
 } else if (count >= 90 && count <= 100) {
     console.log('Отлично');
 } else {
     console.log('Данные введены некорректно')
 }

 /*
Задача на switch
Даны переменные: sum - сумма покупки и code номер купона.
Если code равен 4653 - скидка 30%, 
если code равен 5698 или 5111 - скидка 20%,
если code равен 6922, 6113 или 6099 - скидка 10%. 
В остальных случаях скидка не предусмотрена.
Необходимо вывести сумму к оплате с учетом скидки.
 */
let sum = 30;
let code = prompt('Введите номер купона:');
let total;
 switch (code) {
     case '4653':
         total = (sum - sum * 0.3); // сумма к оплате с учетом скидки.
         break;
     case '5698':
     case '5111':
         total = (sum - sum * 0.2); // сумма к оплате с учетом скидки.
         break;
     case '6922':
     case '6113':
     case '6099':
         total = (sum - sum * 0.1); // сумма к оплате с учетом скидки.
         break;
     default:
         total = sum;
 }
 console.log(`Сумма к оплате: ${total}`);
 /*
Задача на цикл while
Получить от пользователя количество тарелок и количество моющего средства.
Моющее средство расходуется из расчета 0.5 на 1 тарелку.
В цикле выводить сколько моющего средства осталось после мытья каждой тарелки.
В конце вывести сколько тарелок осталось, 
когда моющее средство закончилось или наоборот.
 */
 let plateN = prompt('Введите количество грязных тарелок:'); // запрос данных
 let fairyN = prompt('Введите количество моющего средства:'); // запрос данных

 while (fairyN > 0 && plateN > 0) {
     plateN--;
     fairyN -= 0.5;
     console.log(fairyN);
 }
 console.log(`Количество тарелок осталось домыть: ${plateN} . Остаток моющего средства: ${fairyN} `);

 /*
Задача на цикл while
Программа загадывает число в диапазоне [1;9] (задать через Math.random()).
Пользователь вводит число с клавиатуры.
Программа в зависимости от введенного
числа выводит в консоль следующее:
1) "загаданное число больше"
2) "загаданное число меньше" 
3) "Вы угадали" (программа завершает работу)
4) если пользователь ввел 0, выводит "выход из программы" (программа завершает работу)
 */
 let randomNumber = Math.floor(Math.random() * 9) + 1;
 console.log(randomNumber); // использую для отладки кода)
 while (true) {
     let userNumber = prompt('Введите любое число от 1 до 9');
     console.log(userNumber); // использую для отладки кода)
     if (userNumber > randomNumber && userNumber != 0) {
         console.log('Загаданное число больше');
     } else if (userNumber < randomNumber  && userNumber != 0) {
         console.log('Загаданное число меньше');
     }
     else if (userNumber != randomNumber  && userNumber == 0 ){
         console.log ('Выход из программым');
         break;
     } else {
        console.log ('Вы угадали');
        break;
     }
    //  } else {
    //      console.log('Вы угадали');
    //  }
    //  if (userNumber == 0) {
    //      console.log('Выход из программы');
    //      break;
    //  }
 }


 /*
Задача на Math.random() и if (дополнительная)
Написать код, который будет проверять попало 
ли случайно сгенерированное целое число из отрезка [10;500]
 в интервал ( 25;200) и выводить результат в консоль.
Примеры работы программы:

  Число 345 не содержится в интервале (25;200)
  Число 110 содержится в интервале (25;200)

  */
 let randomN = Math.floor(Math.random() * (500 - 10 + 1) + 10);
 console.log(randomN); // отрезок [10;500] включая эти числа

 if (randomN >= 25 && randomN <= 200) {
     console.log('Число ' + randomN + ' содержится в интервале (25;200)');
 } else {
     console.log('Число ' + randomN + ' не содержится в интервале (25;200)');
 }

 /*
 Задача на цикл (дополнительная)
 Пользователь!!! загадывает число в диапазоне от [1 до 100]. 
 Программа пытается его угадать. 
 Программа может задавать пользователю вопросы:
  "Число равно ...?" / "Число больше ...?". 
  В зависимости от ответа пользователя (ДА/НЕТ)
   программа должна принимать решение: перестать или продолжить угадывать.
   */
   let userNum = alert('Загадайте число в диапазоне от 1 до 100');
   let min = 1;
   let max = 100;
   let middleNumber = 50;

   while (userNum !== middleNumber ) {
       let answerN = prompt(`Число больше ${middleNumber} ? Напишите: да / нет. Если число равно ${middleNumber} нажмите ОК `); // вопрос
   // да нет
       if (answerN == 'да') {
           min = middleNumber;
           middleNumber = Math.floor((max - min) / 2 + min); 
       } else if (answerN == 'нет') {
           max = middleNumber; 
           middleNumber = Math.floor((max - min) / 2 + min);
       } else {
           break;
       }
   }
    alert(`Число равно ${middleNumber}!`);
 
  
 