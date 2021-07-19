/**
 * Написать функцию, функция должна поверхностно сравнять 2 обьекта.
 * Результат: True если обьекты идентичны, false если обьекты разные
 * ({ a: 1, b: 1 }, { a: 1, b: 1 }) => true
 */

const isEqual = (firstObj, secondObj) => Object.keys(firstObj).every(key => firstObj[key] === secondObj[key]);