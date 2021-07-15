/**
 * Написать свою функцию myFilter и сделать так, чтобы любой массив мог использывать данную функцию как "родную".
 * В качестве параметров он должен принимать callback-функцию и как необязательный параметр обьект,
 * который будет использован в качестве this в рамках внутреннних вызовов данной callback-функцию.
 * В конечном итоге ваша реализация myFilter должна работать точно также как и встроенный метод filter.
 * Callback-функция, переданная в качестве параметра, также должна вызыватся с теми же параметрами, что и оригинал
 * (элемент, индекс, массив).
 */

const OBJECT_ARRAY = '[object Array]';
const OBJECT = '#<Object>';
const SYMBOL = 'Symbol()';
const IS_NOT_A_FUNCTION = 'is not a function';

function checkOnErrors(value) {
    const typeOf = typeof value;

    if (typeOf !== 'function') {

        if (typeOf === 'object') {
            if (value && value.toString() === '') {
                throw new TypeError(`${OBJECT_ARRAY} ${IS_NOT_A_FUNCTION}`);
            }

            if (value) {
                throw new TypeError(`${OBJECT} ${IS_NOT_A_FUNCTION}`);
            }
        }

        if (typeOf === 'symbol') {
            throw new TypeError(`${SYMBOL} ${IS_NOT_A_FUNCTION}`);
        }

        throw new TypeError(`${value} ${IS_NOT_A_FUNCTION}`);
    }
}

Array.prototype.myFilter = function(callback, thisArgs) {
    checkOnErrors(callback);

    const array = [];

    for (let i = 0; i < this.length; i++) {
        const filteredValue = callback.call(thisArgs, this[i], i, this);

        if (filteredValue) {
            array[array.length] = this[i];
        }
    }

    return array;
}