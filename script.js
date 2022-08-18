let number1 = null ;
let number2 = null;
let operator = null ;
let opClicked = false;

// gets number input
function clickNumber(number){
    // if last click was operator starts number collection again
    if (opClicked === true){
        document.querySelector('.calcscreen').textContent = "";
        // tells computer last click no longer operator
        opClicked = false;
        // adds input to calc display
        document.querySelector('.calcscreen').textContent += number;
    } else { document.querySelector('.calcscreen').textContent += number;
    }
}
// gets operator input
function clickOperator(type){
    if (number1 === null){
        number1 = document.querySelector('.calcscreen').textContent;
        operator = type;
        opClicked = true
    } else {
        calculate();
        result = operate(operator, number1, number2);
        document.querySelector('.calcscreen').textContent = result;
        opClicked = true;
        operator = type;

    }



//     if (opClicked != true){
//         opClicked = true;
//     }
}


const clear = document.querySelector('#clear');
clear.addEventListener("click", clearAll)

function clearAll(){
    document.querySelector('.calcscreen').textContent = "";
    number1 = null;
    number2 = null;
    operator = null;
    opClicked = false;

}

const equals = document.querySelector('#equals');
equals.addEventListener("click", calculate)

function calculate(){
    number2 = document.querySelector('.calcscreen').textContent;
    let result = operate(operator, number1, number2);
    number1 = result;
    number2 = null;
    document.querySelector('.calcscreen').textContent = result
    console.log(result)
    opClicked = false;
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


function add(num1, num2){
    return Number(num1) + Number(num2);
}

function subtract(num1, num2){
    return Number(num1) - Number(num2)}

function multiply(num1, num2){
    return Number(num1) * Number(num2)}

function divide(num1, num2){
    return Number(num1) / Number(num2)}
