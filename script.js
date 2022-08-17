function showNumber(number){
    document.querySelector('.calcscreen').innerHTML += number;
}
let num1;
let operator;

function playOperator(type){
    const num1 = document.querySelector('.calcscreen').innerHTML;
    const operator = type;
    document.querySelector('.calcscreen').innerHTML = "";
}

function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2
}

function operate(operator, num1, num2){
    console.log(num2, num1, operator)
    let sign = operator;
    let result;
    if (sign === "+"){
        result = add(num1, num2)
    } else if (sign === "-"){
        result = subtract(num1, num2);
    } else if (sign === "*"){
        result = multiply(num1, num2);
    } else if (sign === "/"){
        result = divide(num1, num2);
    }
    console.log(result)
}
