// task 1 (#1)

// const firstNumber = prompt('firstNumber');
// const secondNumber = prompt('secondNumber');
// if(!isNaN(firstNumber) && !isNaN(secondNumber)) {
//     console.log(Number(firstNumber).toString(Number(secondNumber)));
// }
//  else {
//     console.log('Некорректный ввод!');
// }

// /task 1 (#1)

// task 1 (#2)

const firstNumber = parseInt(prompt('firstNumber'));
const secondNumber = isNaN(firstNumber) || parseInt(prompt('secondNumber'));

if(!isNaN(firstNumber) && !isNaN(secondNumber)){
    console.log(`Ответ: ${firstNumber + secondNumber}, ${firstNumber / secondNumber}`)
}
else {
    console.log('Некорректный ввод!');
}

// /task 1 (#2)