function showNumber(number){
    document.querySelector('.calcscreen').textContent += number;
}
let number1 ;
let operator ;

function playOperator(type){
    number1 = document.querySelector('.calcscreen').textContent;
    operator = type;
    document.querySelector('.calcscreen').textContent = "";
}

function add(num1, num2){
    return Number(num1) + Number(num2);
}

function subtract(num1, num2){
    return Number(num1) - Number(num2)}

function multiply(num1, num2){
    return Number(num1) * Number(num2)}

function divide(num1, num2){
    return Number(num1) / Number(num2)}

const equals = document.querySelector('#equals');
equals.addEventListener("click", createNum2)

function createNum2(){
    number2 = document.querySelector('.calcscreen').textContent;
    let result = operate(operator, number1, number2)
    document.querySelector('.calcscreen').textContent = result
    console.log(result)
}

function operate(operator, num1, num2){
    if (operator === "+"){
        console.log(num1, num2)
        console.log(operator)
        return add(num1, num2)
    } else if (operator === "-"){
        return subtract(num1, num2);
    } else if (operator === "*"){
        return multiply(num1, num2);
    } else if (operator === "/"){
        return divide(num1, num2);
    }
}
