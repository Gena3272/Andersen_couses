// task 1 (#1)

const firstNumber = prompt('firstNumber');
const secondNumber = prompt('secondNumber');
if(!isNaN(firstNumber) && !isNaN(secondNumber)) {
    console.log(Number(firstNumber).toString(Number(secondNumber)));
}
 else {
    console.log('Некорректный ввод!');
}

// /task 1 (#1)

// task 1 (#2)

const thirdNumber = parseInt(prompt('thirdNumber'));
const fourthNumber = isNaN(thirdNumber) || parseInt(prompt('fourthNumber'));

if(!isNaN(thirdNumber) && !isNaN(fourthNumber)) {
    console.log(`Ответ: ${thirdNumber + fourthNumber}, ${thirdNumber / fourthNumber}`);
}
else {
    console.log('Некорректный ввод!');
}

// /task 1 (#2)