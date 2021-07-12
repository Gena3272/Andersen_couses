/**
 * Описание задачи: Напишите функцию, которая возвращает влаженный массив вида `[[key, value], [key, value]]`.
 * Результат: ({ a: 1, b: 2 }) => [['a', 1], ['b', 2]]
 */

const makePairs = (object) => Object.entries(object);
const data = { a: 1, b: 2 };

console.log(makePairs(data));