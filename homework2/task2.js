/**
 * Описание задачи: Напишите функцию, которая делает поверхностную проверку объекта на пустоту.
 * Результат:
 ({}) => true,
 ({ a: undefined }) => true,
 ({ a: 1 }) => false,
 * Считаем за пустые значения: '', null, NaN, undefined
 */

const isExceptionValue = (value) => (value === 0 || value === false);
const isEmpty = (object) => Object.values(object).every(value => !(isExceptionValue(value) || !!value));

const data4 = { a: 1, b: undefined };
const data5 = { a: undefined };