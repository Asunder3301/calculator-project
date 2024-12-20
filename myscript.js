let firstNumber = '';
secondNumber = '';
operator = '';

function add (a, b) {
    return a + b;
}

function subtract (a, b) {
    return a - b;
}

function multiply (a, b) {
    return a * b;
}

function divide (a, b) {
    if (a === 0) {
        alert(`CAN'T DIVIDE BY ZERO`);
    } else {
        return a / b;
    }
}

function operate (firstNumber, operator, secondNumber) {
    if (operator === '+') {
        return add(firstNumber, secondNumber);
    } else if (operator === '-') {
        return subtract(firstNumber, secondNumber);
    } else if (operator === '*') {
        return multiply(firstNumber, secondNumber);
    } else if (operator === '/') {
        return divide(firstNumber, secondNumber);
    } else {
        return alert('INVALID OPERATOR');
    }

}

const display = document.querySelector('.display');
const digits = document.querySelector('.numBtn');
const operators = document.querySelector('.operBtn');

function addToDisplay (c) {
    if (display.textContent =='0') {
        display.textContent = c;
    } else {
        display.textContent += c;
    }
}

