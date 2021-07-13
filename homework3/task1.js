/**
 * Дана строка: нужно написать функцию, которая будет возвращать true, если стока является палиндром, или false если нет.
 * При этом нужно учитывать знаки препинания и пробелы.
 */

const getStringLetters = (str) => str.replace(/[^a-z]/g, '').toLowerCase();

const checkPalindrome = (str) => {
    const stringLetters = getStringLetters(str);
    const reversedStringLetters = stringLetters.split('').reverse().join('');

    return stringLetters === reversedStringLetters;
}

console.log(checkPalindrome('!an!<nan'));

