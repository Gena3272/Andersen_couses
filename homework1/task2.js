/**
 * С помощью встроенной браузерной функции prompt поочередно ввести два значения.
 * Если первое значение является невалидным числом, вывести в консоли сообщение: "Некорректный ввод!" и завершить программу.
 * В ином случае, если второе значение является невалидным числом вывести такое же сообщение об ошибке и завершить программу.
 * Если оба значения являются валидными числами, то вывести в консоль результат в виде:
 * "Ответ: [сумма друх чисел], [частное двух чисел]."
 * > Примеры:
 * Вводим 10 и 2, получаем "Ответ: 12, 5."
 * Вводим 872 и 8, получаем "Ответ: 880, 109."
 * Вводим 'abc', получаем "Некорректный ввод!"
 */

const checkIsCorrectValue = (value) => {
    if (isNaN(value)) {
        return 'Некорректный ввод!';
    }
}

const calculate = () => {
    const firstNumber = parseInt(prompt('firstNumber'));

    checkIsCorrectValue(firstNumber);

    const secondNumber = parseInt(prompt('secondNumber'));

    checkIsCorrectValue(secondNumber);

    return `Ответ: ${firstNumber + secondNumber}, ${firstNumber / secondNumber}`;
}

calculate();
