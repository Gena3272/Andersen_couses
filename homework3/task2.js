/**
 * Нужно написать функцию, которая принимает строку и будет возвращать каличество гласных, которые есть в строке.
 * Главными будут "a","e","i","o","u".
 */

const countVowels = (str) => str.replace(/[^aeiou]/gi, '').length;