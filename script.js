// task 2 (#1)

const isEqual = (firstObj, secondObj) => {
    for(let key in firstObj) {
        if(firstObj[key] !== secondObj[key]) {
            return false;
        }
    }
    return true;
}

const data = { a: 1, b: 1};
const data2 = { a: 1, b: 1};
const data3 = { a: 1, b: 2};

console.log(isEqual(data, data2));
console.log(isEqual(data, data3));

// /task 2 (#1)

// task 2 (#2)

const isUniqValue = (value) => (value === 0 || value === false);
const isEmpty = (object) => Object.values(object).every(value => !(isUniqValue(value) || !!value));

const data = { a: 1, b: undefined };
const data2 = { a: undefined };

console.log(isEmpty(data));
console.log(isEmpty(data2));

// /task 2 (#2)

// task 2 (#3)

const makePairs = (object) => Object.entries(object);
const data = {a: 1, b: 2};
console.log(makePairs(data));

// /task 2 (#3)