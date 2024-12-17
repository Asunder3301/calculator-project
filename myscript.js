let firstNumber = '';
secondNumber = '';
mathSign = '';

function add (a,b) {
    return a + b;
    firstNumber = a;
    secondNumber = b;
    mathSign = '-'
}

function subtract (a, b) {
    return a - b;
    firstNumber = a;
    secondNumber = b;
    mathSign = '-'
}

function multiply (a, b) {
    return a * b;
    firstNumber = a;
    secondNumber = b;
    mathSign = 'x';
}

function divide (a, b) {
    if (a === 0) {
        alert(`CAN'T DIVIDE BY ZERO`);
    } else {
        return a / b;
    }
    firstNumber = a;
    secondNumber = b
    mathSign = '/'
}

function operate (operator, num1, num2) {
    if (operator === '+') {
        return add(num1, num2);
    } else if (operator === '-') {
        return subtract(num1, num1);
    } else if (operator === '*') {
        return multiply(num1, num2);
    } else if (operator === '/') {
        return divide(num1, num2);
    } else {
        return alert('INVALID OPERATOR');
    }

}