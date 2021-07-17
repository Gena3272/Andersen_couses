/**
 * Написать свою реализация встроенной функции .bind(),
 * которая создает новую функцию, и при вызове устанавливает в качестве контекста выполнения this предоставленное значение.
 * В метод также передается набор аргументов, которые будут установлены перед переданными в привязанную функцию аргументоми при ее вызове.
 */

Function.prototype.myBind = function(context, ...rest) {
    const uniqId = Date.now().toString();

    context[uniqId] = this;

    return function(...args) {

        const result = context[uniqId](...rest, ...args);

        delete context[uniqId];

        return result;
    }
}