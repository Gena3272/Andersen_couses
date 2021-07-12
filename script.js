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

// task 2 (#1)

const isEqual = (firstObj, secondObj) => {
    for(let key in firstObj) {
        if(firstObj[key] !== secondObj[key]) {
            return false;
        }
    }
    return true;
}

const data1 = { a: 1, b: 1};
const data2 = { a: 1, b: 1};
const data3 = { a: 1, b: 2};

console.log(isEqual(data1, data2));
console.log(isEqual(data1, data3));

// /task 2 (#1)

// task 2 (#2)

const isUniqValue = (value) => (value === 0 || value === false);
const isEmpty = (object) => Object.values(object).every(value => !(isUniqValue(value) || !!value));

const data4 = { a: 1, b: undefined };
const data5 = { a: undefined };

console.log(isEmpty(data4));
console.log(isEmpty(data5));

// /task 2 (#2)

// task 2 (#3)

const makePairs = (object) => Object.entries(object);
const data = {a: 1, b: 2};
console.log(makePairs(data));

// /task 2 (#3)