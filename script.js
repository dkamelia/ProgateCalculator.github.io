let prevNumber = ''
let calculationOperator = ''
let currentNumber = '0'

const inputNumber = (number) => {
    if (currentNumber === '0') {
        currentNumber = number
    } else {
        currentNumber += number   
    }
}


//----01--------Calc Screen dan update------------
const calculatorScreen = document.querySelector('.calculator-screen')
const updateScreen = (number) => {
    calculatorScreen.value = number
}


//---02--------Number Events--------
const numbers = document.querySelectorAll(".number")
numbers.forEach ((number) => {
    number.addEventListener("click", (event) => { 
        inputNumber(event.target.value)
        updateScreen (currentNumber)   

    })   
})


//---03-------Operators Events-------
const operators = document.querySelectorAll (".operator")
operators.forEach ((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator (event.target.value)
    })
})

const inputOperator = (operator) => {
    if (calculationOperator === '') {
        prevNumber = currentNumber
    }
    calculationOperator = operator
    currentNumber = '0'
}


//---04----------Calculation---------------
const equalSign = document.querySelector('.equal-sign')
equalSign.addEventListener ('click', () => {
    calculate()
    updateScreen (currentNumber)
})

const calculate = () => {
    let result = ''
    switch (calculationOperator) {
        case "+":
            result = parseFloat (prevNumber) + parseFloat (currentNumber)
            break
        case "-":
            result =  parseFloat (prevNumber) -  parseFloat (currentNumber)
            break
        case "*":
            result = parseFloat (prevNumber) * parseFloat (currentNumber)
            break
        case "/":
            result = parseFloat (prevNumber) / parseFloat (currentNumber)
            break
        default:
            break
    }  
    currentNumber = result
    calculationOperator = ''
}


//---05----------Ac--------------
const clearBtn = document.querySelector('.all-clear')
clearBtn.addEventListener('click', () => {
    clearAll ()
    updateScreen (currentNumber)
})

const clearAll = () => {
    prevNumber = ''
    calculationOperator = ''
    currentNumber = '0'
}


//---06----------Decimal---------------
const decimal = document.querySelector('.decimal')
decimal.addEventListener('click', (event) => {
    inputDecimal (event.target.value)
    updateScreen(currentNumber)
})

inputDecimal = (dot) => {
    if (currentNumber.includes('.')) {
        return
    }
    currentNumber += dot
}


//---07----------Percentage---------------
inputPercentage = (percentage) => {
    if(currentNumber.includes ('%')) {
        return
    }
    currentNumber = currentNumber / 100
}

const percentage = document.querySelector('.percentage')
percentage.addEventListener ('click', (event) => {
    inputPercentage (event.target.value)
    updateScreen(currentNumber)
})
