const negativeBtn = document.querySelector('.negativeBtn');
const display = document.querySelector('.display');
const clearBtn = document.querySelector('.clearBtn');
const addBtn = document.querySelector('.addBtn');
const multiplyBtn = document.querySelector('.multiplyBtn');
const divideBtn = document.querySelector('.divideBtn');
const subtractBtn = document.querySelector('.subtractBtn');
const equalsBtn = document.querySelector('.equalsBtn');
const decimalBtn = document.querySelector('.decimalBtn');
const numButtons = document.querySelectorAll('numButtons');
const buttons = document.querySelectorAll('button');
let isClicked = false;

display.textContent = "";
let firstOperand = "";
let secondOperand = "";
let operator = "";
let prevResult = "";



function add(a, b){
    return a + b
}

function subtract(a, b){
    return a - b
}

function multiply(a, b){
    return a * b
}

function divide(a, b){
    if (a == 0 || b == 0){
        return "ERROR"
    }
    return a / b;
}

function operate(operator, num1, num2){
    let numericNum1 = parseInt(num1)
    let numericNum2 = parseInt(num2)
    switch(operator){
        case '+':
            return add(numericNum1,numericNum2).toFixed(2);
        case '-':
            return subtract(numericNum1, numericNum2).toFixed(2);
        case '*':
            return multiply(numericNum1, numericNum2).toFixed(2);
        case '/':
            return divide(numericNum1, numericNum2).toFixed(2);
    }
}

function buttonClicks(e){
    value = e.target.className
    if(value == "numButton" && operator.length != 1){
        firstOperand += e.target.value
        display.textContent = firstOperand
    } else if((value == "addBtn" ||value == "subtractBtn" ||value == "divideBtn" ||value == "multiplyBtn") && containsNumber(firstOperand)){
        if(operator.length == 1){
            return
        } else {
            operator = e.target.value
        }
        display.textContent = operator
    } else if(value == "numButton" && containsNumber(firstOperand) && operator.length == 1){
        secondOperand += e.target.value
        display.textContent = secondOperand
    } else if (value == "equalBtn" && containsNumber(secondOperand)){
        isClicked = true
        isEqualPressed()
    }
}

function isEqualPressed(buttonClicks){
    prevResult = operate(operator, firstOperand, secondOperand)
    display.textContent = prevResult
    operator = ""
    secondOperand = ""
    if(isClicked){
        firstOperand = prevResult
    }
}

buttons.forEach((btn) => {
    btn.addEventListener('click', buttonClicks);
    btn.addEventListener('mouseover', changeColor);
    btn.addEventListener('mouseleave', returnColor);
})



function containsNumber(str) {
    return /\d/.test(str);
  }

function changeColor(e){
    e.target.style.backgroundColor = 'white';
}

function returnColor(e){
    e.target.style.backgroundColor = 'lightgreen';
}


