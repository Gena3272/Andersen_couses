/**
 * Нужно написать функцию, которая принимает строку и будет возвращать каличество гласных, которые есть в строке.
 * Главными будут "a","e","i","o","u".
 */

const countVowels = (str) => str.toLowerCase().match(/[aeiou]/g).length;

console.log(countVowels('World Of Warcraft'));