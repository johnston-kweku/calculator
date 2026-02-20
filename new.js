const numEl = document.getElementById("num-el")
const resultEl = document.getElementById("result-el")
let expression = ""

function backSpace() {
    if(expression === "") return;

    expression = expression.slice(0,-1)

    numEl.textContent = numEl.textContent.slice(0,-1)
}

function clean() {
    numEl.textContent = ""
    resultEl.textContent = ""
    expression = ""
}

function addNumber(number) {
    expression += number
    numEl.textContent += number
}

function operation(op) {
    if(expression === "") return;
    const lastChar = expression[expression.length - 1];
    if("*/+-".includes(lastChar)) {
        expression = expression.slice(0,-1)
    }
    
    expression += op

    if(op === '*'){
        numEl.textContent += 'x'
    }else if(op === '/'){
        numEl.textContent += '÷'
    }else{
        numEl.textContent += `${op}`
    }

}
function calculate() {
    try {
        let result = eval(expression)
        resultEl.textContent = result
        expression = ""
        numEl.textContent = ""

    }catch {
        resultEl.innerHTML = "<p class='text-red-500 font-bold animate-ping'>Error</p>"
        expression = ""
    }
}