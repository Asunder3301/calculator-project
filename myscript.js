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

const display = document.querySelector('.display')

function addToDisplay (c) {
    if (display.textContent == '0') {
        display.textContent = c;
    } else {
        display.textContent += c;
    }
}

// function evaluateExp() {
//     let trimmed = display.textContent.trim();
//     let exp = trimmed.split(' ').filter(e => e);
//     console.log("yes");
//     while(exp.length > 1){
//         for(let i = 1; i < exp.length; i += 2){
//             if(exp[i] == '/' || exp[i] == '*'){
//                 let result = operate(parseFloat(exp[i - 1]), exp[i], parseFloat(exp[i + 1]));
//                 exp.splice(i - 1, 3, result);
//                 i -= 2;
//             }
//         }
        
//         for(let i=1; i < exp.length; i += 2){
//             if(exp[i] == '+' || exp[i] == '-'){
//                 let result = operate(parseFloat(exp[i- 1]), exp[i], parseFloat(exp[i + 1]));
//                 exp.splice(i-1, 3, result);
//                 i -= 2;
//             }
//         }
        
//     }

//     display.textContent = exp[0];
// }

function evaluateExp(){
    let S = display.textContent.trim();
    let exp = S.split(' ').filter(e=>e);
    console.log("yes");
    while(exp.length>1){
        for(let i=1; i<exp.length; i+=2){
            if(exp[i]=='/' || exp[i]=='*'){
                let result = operate(parseFloat(exp[i-1]),exp[i], parseFloat(exp[i+1]));
                exp.splice(i-1,3,result);
                i-=2;
            }
        }
        
        for(let i=1; i<exp.length; i+=2){
            if(exp[i]=='+' || exp[i]=='-'){
                let result = operate(parseFloat(exp[i-1]),exp[i], parseFloat(exp[i+1]));
                exp.splice(i-1,3,result);
                i-=2;
            }
        }
        
    }
    display.textContent=exp[0];
}
