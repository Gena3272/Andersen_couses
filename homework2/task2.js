/**
 * Описание задачи: Напишите функцию, которая делает поверхностную проверку объекта на пустоту.
 * Результат:
 ({}) => true,
 ({ a: undefined }) => true,
 ({ a: 1 }) => false,
 * Считаем за пустые значения: '', null, NaN, undefined
 */

const isUniqValue = (value) => (value === 0 || value === false);
const isEmpty = (object) => Object.values(object).every(value => !(isUniqValue(value) || !!value));

const data4 = { a: 1, b: undefined };
const data5 = { a: undefined };

console.log(isEmpty(data4));
console.log(isEmpty(data5));



