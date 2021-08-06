/**
 * Написать приложение "калькулятор":
 * Калькулятор имеет поле ( не редактируемое) для отображения текущего производимого действия и результата.
 * Калькулятор имеет кнопки для цифр и простейших арифметических операций, кнопка очистки результата.
 * Калькулятор имеет "журнал действий", в котором записываются все выполненные операции.
 * Дизайн на ваше усмотрение (как варианты предлогаю стандартный для Windows)
 * P.S. - будет круто если используете принцип - Делегирование.
 */

const DOT = '.';

class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear();
    }

    clear() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = null;
    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
    }

    appendNumber(appendValue) {
        const isDot = this.currentOperand.includes(DOT);

        if (appendValue === DOT && isDot) {
            return;
        }

        this.currentOperand = this.currentOperand.toString() + appendValue.toString();
    }

    chooseOperation(operation) {
        if (!this.currentOperand) {
            return;
        }

        if (this.previousOperand) {
            this.compute();
        }

        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
    }

    compute() {
        let computation = null;
        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);

        if (isNaN(prev) || isNaN(current)) {
            return;
        }

        switch (this.operation) {
            case '+':
                computation = prev + current;
                break;
            case '-':
                computation = prev - current;
                break;
            case '*':
                computation = prev * current;
                break;
            case '/':
                computation = prev / current;
                break;
            default:
                return;
        }

        this.currentOperand = computation;
        this.operation = null;
        this.previousOperand = '';
    }

    getDisplayNumber(displayValue) {
        const stringNumber = displayValue.toString();
        const integerDigits = parseFloat(stringNumber.split(DOT)[0]);
        const decimalDigits = stringNumber.split(DOT)[1];
        let integerDisplay;

        integerDisplay = !isNaN(integerDigits)
            ? integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
            : '';

        return decimalDigits ? `${integerDisplay}${DOT}${decimalDigits}` : integerDisplay;
    }

    updateDisplay() {
        this.currentOperandTextElement.innerText = this.getDisplayNumber(this.currentOperand);
        this.previousOperandTextElement.innerText = this.operation
            ? `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
            : '';
    }
}

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');
const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

const numberButtonsEvent = function() {
    calculator.appendNumber(this.innerText);
    calculator.updateDisplay();
};
const operationButtonsEvent = function() {
    calculator.chooseOperation(this.innerText);
    calculator.updateDisplay();
};
const equalsButtonEvent = function() {
    calculator.compute();
    calculator.updateDisplay();
};
const allClearButtonEvent = function() {
    calculator.clear();
    calculator.updateDisplay();
};
const deleteButtonEvent = function() {
    calculator.delete();
    calculator.updateDisplay();
};

numberButtons.forEach(function(button) {
    button.addEventListener('click', numberButtonsEvent);
});
operationButtons.forEach(function(button) {
    button.addEventListener('click', operationButtonsEvent);
});
equalsButton.addEventListener('click', equalsButtonEvent);
allClearButton.addEventListener('click', allClearButtonEvent);
deleteButton.addEventListener('click', deleteButtonEvent);

function beforeUnload(event) {
    numberButtons.forEach(function(button) {
        button.removeEventListener('click', numberButtonsEvent);
    });
    operationButtons.forEach(function(button) {
        button.removeEventListener('click', operationButtonsEvent);
    });
    equalsButton.removeEventListener('click', equalsButtonEvent);
    allClearButton.removeEventListener('click', allClearButtonEvent);
    allClearButton.removeEventListener('click', allClearButtonEvent);
    deleteButton.removeEventListener('click', deleteButtonEvent);
    window.removeEventListener('beforeunload', beforeUnload);

    event.preventDefault();
    event.returnValue = '';
}

window.addEventListener('beforeunload', beforeUnload);