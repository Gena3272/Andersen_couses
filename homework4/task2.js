/**
 * Написать функцию createDebounceFunction. Она должна принимать два аргумента: callback - функцию и задержку в милисекундах.
 * Данная функция должна возвращать новую функцию, вызывающую callback - функцию с задеркой в переданное каличество миллисекунд.
 * ПРИ ЭТОМ! Если за то время, пока внутрення callback - функция ждет своего вызова, наша созданная функция вызывается еще раз,
 * то 'счетчик' времени должен сбрасываться и начинатся заново (т.е. вызова внутренней функции произойти не должно.
 * Пример:
 * const log100 = () =>
 * console.log(100);
 * const debounceLog100 = createDebounceFunction(log100, 1000);
 * debounceLog100();
 * setTimeout(debounceLog100, 200); // так как задержка в 1000мс и новый вызов этой же функции происходит через 200 миллисекунд,
 * то таймер запускается заново
 * setTimeout(debounceLog100, 400); // снова сбрасываем таймер еще раз 200 миллисекунд.
 * Вывод в консоли значения 100 примерно через 1000мс + 200мс + 200мс
 */

function createDebounceFunction(callback, expectation) {
    let timeout;

    return function() {
        clearTimeout(timeout);

        timeout = setTimeout(() => {
            callback.apply(null, arguments);
        }, expectation);
    }
}