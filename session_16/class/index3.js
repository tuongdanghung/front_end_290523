let expression = '';

function handleClick(value) {
    if (value === '=') {
        const result = calculate();
        document.getElementById('result').value = result;
        expression = result;
    } else {
        expression += value;
        document.getElementById('number').value = expression
    }
}

function calculate() {
    const operands = expression.split(/(\+|\-|\*|\/)/);
    let result = Number(operands[0]);

    for (let i = 1; i < operands.length; i += 2) {
        const operator = operands[i];
        const operand = Number(operands[i + 1]);

        if (operator === '+') {
            result += operand;
        } else if (operator === '-') {
            result -= operand;
        } else if (operator === '*') {
            result *= operand;
        } else if (operator === '/') {
            result /= operand;
        }
    }

    return result;
}

