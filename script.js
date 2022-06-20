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
    switch(operator){
        case '+':
            return add(num1,num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
    }
}
console.log(operate('+', 4, 2))
console.log(operate('-', 4, 2))
console.log(operate('*', 4, 2))
console.log(operate('/', 4, 2))
console.log(operate('/', 0, 2))
console.log(operate('/', 2, 0))

const buttons = document.querySelectorAll('button');
const display = document.querySelector('.display');
display.textContent = "0";
let values = {
    firstNum: "",
    operator: "",
    secondNum:""
}

buttons.forEach((btn) => {
    btn.addEventListener('click', storeValue);
    btn.addEventListener('mouseover', changeColor);
    btn.addEventListener('mouseleave', returnColor);
})


function storeValue(e){
        let newValue = e.target.value
        display.textContent += newValue

}

function changeColor(e){
    e.target.style.backgroundColor = 'white';
}

function returnColor(e){
    e.target.style.backgroundColor = 'lightgreen';
}


