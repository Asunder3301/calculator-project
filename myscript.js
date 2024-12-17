let firstNumber = 0;
secondNumber = 0;
operator = x;

function add (a,b) {
    return a + b;
    firstNumber = a;
    secondNumber = b;
    operator = '+'
}

function subtract (a, b) {
    return a - b;
    firstNumber = a;
    secondNumber = b;
    operator = '-'
}

function multiply (a, b) {
    return a * b;
    firstNumber = a;
    secondNumber = b;
    operator = 'x';
}

function divide (a, b) {
    return a / b;
    firstNumber = a;
    secondNumber = b
    operator = '/'
}