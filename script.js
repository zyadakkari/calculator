let number1 = null ;
let number2 = null;
let operator = null ;
let opClicked = false;
const display = document.querySelector('.calcscreen');


// gets number input, checking if operator already called
function clickNumber(number){
    if (number != "."){
        if (opClicked === true){
            display.textContent = "";
                // tells computer last click no longer operator
            opClicked = false;
                // adds input to calc display
            display.textContent += number;
        } else { display.textContent += number;
        }
    // if decimal clicked checks number doesnt already contain decimal
    } else {
        if (display.textContent.includes(".") && opClicked === true){
            display.textContent = "";
            opClicked = false;
            display.textContent += number;
        } else if (display.textContent.includes(".") && opClicked === false){
            console.log("Error: maximum one decimal per number")
        } else {
            if (opClicked === true){
                display.textContent = "";
                    // tells computer last click no longer operator
                opClicked = false;
                    // adds input to calc display
                display.textContent += number;
            } else { display.textContent += number;
            }
        }
    }
}

// backspace button
const backspace = document.querySelector('#backspace');
backspace.addEventListener("click", delChar)

function delChar(){
    if (display.textContent.length > 0){
        display.textContent = display.textContent.slice(0,-1)

    }
}
// gets operator input
function clickOperator(type){
    // checks if consecutive operation or first
    if (number1 === null){
        number1 = display.textContent;
        operator = type;
        opClicked = true
    } else {
        calculate();
        operator = type;
        opClicked = true;
        number1 = display.textContent



    }

}

// clear button to wipe all data
const clear = document.querySelector('#clear');
clear.addEventListener("click", clearAll)

function clearAll(){
    display.textContent = "";
    number1 = null;
    number2 = null;
    operator = null;
    opClicked = false;

}

// equals button programming to define num2 and call operate
const equals = document.querySelector('#equals');
equals.addEventListener("click", calculate)

function calculate(){
    if (number1 === null){
        return;
    } else {
        number2 = display.textContent;
        let result = operate(operator, number1, number2);
        number1 = null;
        number2 = null;
        operator = null;
        display.textContent = result
        console.log(result)
        opClicked = false;
    }
}

// conducts calculation
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
